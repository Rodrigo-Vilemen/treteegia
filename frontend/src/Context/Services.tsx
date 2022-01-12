import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
} from 'react';
import * as serviceWorkerRegistration from '../serviceWorkerRegistration';
import firebase from 'firebase/app';
import 'firebase/messaging';
import isPwaCompatible from '../utils/isPwaCompatible';
import api_url from '../Services/Api';
import { useState } from 'react';

interface IServiceContext {
  subscribeUser: () => Promise<void>;
  hasNotifAccess: boolean;
}

const ServicesContext = createContext({} as IServiceContext);

export const ServicesProvider: React.FC = ({ children }) => {
  const [hasNotifAccess, setHasNotifAccess] = useState(false);
  const initializeFirebase = () => {
    if (!isPwaCompatible()) return;
    //não precisa iniciar firebase se não tem service worker

    const firebaseConfig = {
      apiKey: 'AIzaSyDWmuNRVxhxg-9wmPrdSQzotbU846rUQPA',
      authDomain: 'hub-test-bbf3b.firebaseapp.com',
      projectId: 'hub-test-bbf3b',
      storageBucket: 'hub-test-bbf3b.appspot.com',
      messagingSenderId: '934464908288',
      appId: '1:934464908288:web:f9217190457b4a47b63ce5',
    };

    firebase.initializeApp(firebaseConfig);
  };

  useEffect(() => {
    if (isPwaCompatible()) {
      serviceWorkerRegistration.register();
      initializeFirebase();
      // subscribeUser();
    }
  }, []);

  const subscribeUser = useCallback(async () => {
    if (!isPwaCompatible()) return;

    try {
      const swReg = await navigator.serviceWorker.getRegistration();
      const messaging = firebase.messaging();
      const permission = await Notification.requestPermission();

      console.log({ permission, swReg });
      if (permission === 'denied' || !swReg) return;

      const token = await messaging.getToken({
        serviceWorkerRegistration: swReg,
      });
      if (!token) return;

      await api_url.post(`/notifications/subscribe`, { token });

      messaging.onMessage((payload) => {
        document.dispatchEvent(new CustomEvent('Notificacao', payload));
      });

      setHasNotifAccess(true);
      return;
    } catch (error) {
      console.error(error);
    }
  }, []);

  const data: IServiceContext = {
    subscribeUser,
    hasNotifAccess,
  };

  return (
    <ServicesContext.Provider value={data}>{children}</ServicesContext.Provider>
  );
};

export const useServices = () => {
  const context = useContext(ServicesContext);
  return context;
};

export { ServicesContext };
