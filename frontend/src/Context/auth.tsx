import React, { createContext, useContext, useEffect, useState } from 'react';
import { GiToken } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { TOKEN_KEY, USER_KEY, USER_NAME } from '../consts';
import api_url, { setToken, setUserName } from '../Services/Api';
import { useServices } from './Services';

interface IAuthResponse {
  user: IUser;
  token: string;
}

interface AuthContextData {
  user?: IUser;
  loading?: boolean;
  signed: boolean;
  Login(userName: string, password: string): Promise<void>;
  Logout(): Promise<void>;
  Refresh(): Promise<void>;
  ChangePassword(
    password: string,
    passwordConfirmation: string,
    idUser?: string
  ): Promise<void>;
  CreateUser(
    userName: string,
    password: string,
    passwordConfirmation: string,
    managerId: string
  ): Promise<void>;
  ChangeServer(servers: string[], idUser: string): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const { subscribeUser } = useServices();
  const [user, setUser] = useState<IUser>();
  const [loading, setLoading] = useState(true);

  const setContext = (token: string, user: IUser | string, save = false) => {
    //console.log(token);
    setToken(token);
    setUser(typeof user === 'string' ? JSON.parse(user) : user);
    subscribeUser();

    if (!save) return;
    const userJson = typeof user === 'string' ? user : JSON.stringify(user);
    window.localStorage.setItem(TOKEN_KEY, token);
    window.localStorage.setItem(USER_KEY, userJson);
  };

  async function Login(userName: string, password: string) {
    setLoading(true);
    try {
      const response = await api_url
        .post<IAuthResponse>('/login', {
          userName,
          password,
        })
        .then((x) => x.data);

      setContext(response.token, response.user, true);
    } catch (err) {
      throw err;
    }
  }

  async function Refresh() {
    setLoading(true);
    try {
      const response = await api_url
        .get<IAuthResponse>('/users/me/refresh')
        .then((x) => x.data);

      setContext(
        response.token,
        {
          ...response.user,
          manager: response?.user?.manager || (user?.manager as any),
        },
        true
      );
    } catch (err) {
      throw err;
    }
  }

  async function ChangePassword(
    password: string,
    passwordConfirmation: string,
    idUser: string
  ) {
    try {
      console.log('Cliquei para mudar senha');
      const response = await api_url
        .put<IAuthResponse>('/users/' + idUser, {
          password,
          passwordConfirmation,
        })
        .then((x) => x.data);
    } catch (err) {
      throw err;
    }
  }
  async function CreateUser(
    userName: string,
    password: string,
    passwordConfirmation: string,
    managerId: string
  ) {
    try {
      const response = await api_url
        .post<IAuthResponse>('/register/', {
          userName,
          password,
          passwordConfirmation,
          managerId,
        })
        .then((x) => x.data);
    } catch (err) {
      throw err;
    }
  }

  async function ChangeServer(servers: string[], idUser: string) {
    try {
      const response = await api_url
        .put<IServers>('/users/' + idUser, { servers })
        .then((x) => x.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function Logout() {
    try {
      // zerando sessão do usuário na Local Storage
      window.localStorage.setItem(TOKEN_KEY, '');
      window.localStorage.setItem(USER_KEY, '');
    } catch {}
  }

  useEffect(() => {
    // setLoading(true);
    const savedToken = window.localStorage.getItem(TOKEN_KEY);
    if (savedToken)
      setContext(savedToken, window.localStorage.getItem(USER_KEY) || 'null');
    setLoading(false);
  }, []);

  const context: AuthContextData = {
    user,
    signed: !!user,
    loading,
    Login,
    Logout,
    Refresh,
    ChangePassword,
    CreateUser,
    ChangeServer,
  };
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export default AuthContext;
