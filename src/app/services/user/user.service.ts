import { Injectable } from '@angular/core';
import { dbNames } from 'src/app/interfaces/dbNames';
import { User } from 'src/app/interfaces/user';
import { DbService } from '../db/db.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private db: DbService) {}

  writeUser = async (uid: string, user: User) => {
    await this.db.setWithId(dbNames.users, uid, user);
  };

  getUser = async (uid: string): Promise<User> =>
    await this.db
      .getDocOnce(dbNames.users, uid)
      .then((doc: any) => doc.data() as User)
      .catch((err) => err);

  getUsers() {
    return this.db
      .getObserverDb(dbNames.users)
  }
}
