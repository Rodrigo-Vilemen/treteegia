declare interface IRole {
  id: string;
  slug: string;
  role: string;
  createdAt: '2021-05-17T13:14:23.445Z';
  updatedAt: '2021-05-17T13:14:23.445Z';
}

declare interface IUser {
  id: string;
  slug: string;
  userName: string;
  roles: IRole[];
  servers: IServer[];
  createdAt: string;
  updatedAt: string;
  manager: string;
  lastNotification: string;
  __v: number;
}

declare interface IError {
  name?: string;
  message: string;
  status?: number;
  error?: string;
  field?: string;
}

declare interface IClient {
  baseDomain: string;
  clientName: string;
  createdAt: string;
  id: string;
  slug: string;
  updatedAt: string;
}

declare interface IServer {
  resultado: number;
  serverId: string;
  serverName: string;
  url: string;
  online: boolean;
}

declare interface IServers {
  id: string;
  slug: string;
  serverName: string;
  subDomain: string;
  baseDomain: string;
  url: string;
  accesslevel: number;
  clientName: string;
}

declare interface INotification {
  body: {
    message: string;
    title: string;
    [key: string]: any;
    data: {
      data_sorteio: string;
      message: string;
      sorteio_id: string;
      resultado: number;
      [key: string]: any;
    };
  };
  createdAt: string;
  serverId: string;
  serverName: string;
  serverurl: string;
  type: string;
  id: string;
}

declare interface INotifications {
  data: INotification[];
}

declare interface IPos {
  ativo: string;
  estabelecimento: string;
  estabelecimento_nome: string;
  mac_address: string;
  online: boolean;
  pos: string;
  rota: string;
  server: string;
  vendedor: string;
  client: string;
  [key: string]: any;
}

declare interface ITvs {
  ativo: string;
  estabelecimento: string;
  estabelecimento_nome: string;
  id: string;
  mac_address: string;
  rota: string;
  server: string;
  tipo: string;
  online: boolean;
  client: string;

  token: string;
}
declare interface IUsers {
  userName: string;
  password: string;
  managerId: string;
}

declare interface ISubordinates {
  id: string;
  userName: string;
  slug: string;
  isAdmin: string;
  managerId: string;
  createdAt: string;
  updatedAt: string;
  servers: IServer[];
}
declare interface IFinancialTotal {
  data: IFinancial[];
  total: IFinancialResume;
  doacoes: number;
  premios: number;
  saldo: number;
  comissao: number;
  cartelas: number;
  sorteios: number;
  doacoesbilhetes: number;
  [key: string]: any;
}

declare interface IFinancialResume {
  bilhetes: number;
  comissao: number;
  doacoes: number;
  'doacoes/bilhetes': number;
  premios: number;
  resultado: number;
  saldo: number;
  sorteios: number;
  [key: string]: any;
}
declare interface IFinancial {
  total: IFinancialResume;
  doacoes: number;
  premios: number;
  saldo: number;
  comissao: number;
  cartelas: number;
  sorteios: number;
  online: boolean;
  ['doacoes/bilhetes']: number;
  server: IServer;
  [key: string]: any;
}
declare interface IGraphics {
  bilhetes: number;
  comissao: number;
  dias: IDaily[];
  doacoes: number;
  ['doacoes/bilhetes']: number;
  premios: number;
  resultado: number;
  saldo: number;
  server: IServer;
  [key: string]: any;
}

declare interface IServer {
  accesslevel: number;
  baseDomain: string;
  id: string;
  serverName: string;
  slug: string;
  subDomain: string;
  url: string;
}

declare interface IDaily {
  data: string;
  doacoes: number;
  premios: number;
  saldo: number;
  comissao: number;
  resultado: number;
  sorteios: number;
  bilhetes: number;
  'doacoes/bilhetes': number;
  [key: string]: any;
}

declare interface ITotalSemanal {
  bilhetes: number;
  comissao: number;
  doacoes: number;
  'doacoes/bilhetes': number;
  premios: number;
  resultado: number;
  saldo: number;
  sorteios: number;
}
