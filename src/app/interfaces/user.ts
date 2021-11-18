export interface User {
  mail: string;
  img_urls: Array<string>;
  tipo: number;
  creado: string;
  modificado: string;
  eliminado: string;
}

export const UserProfiles = {
  admin: 1,
  comprador: 2,
  vendedor: 3,
};

export type UserId = { id: string; data: User };
