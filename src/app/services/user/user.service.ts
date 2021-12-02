import { Injectable } from '@angular/core';
import { dbNames } from 'src/app/interfaces/dbNames';
import { User, UserId } from 'src/app/interfaces/user';
import { DbService } from '../db/db.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private db: DbService) {}

  writeUser = async (uid: string, user: User) => {
    await this.db.setWithId(dbNames.users, uid, user);
  };

  getUser = async (uid: string): Promise<UserId> =>
    await this.db
      .getDocOnce(dbNames.users, uid)
      .then((doc: any) => {
        return { id: doc.id, data: doc.data() as User } as UserId
      })
      .catch((err) => err);

  getUsers() {
    return this.db.getObserverDb(dbNames.users);
  }
}
