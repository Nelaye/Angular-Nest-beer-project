import {Component, OnInit} from '@angular/core';
import {User} from './shared/interfaces/user';
import {UserService} from './shared/service/user-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'beer-front-ng';

  private _users: User[];
  private _selectedUser: User;

  constructor(private _userService: UserService){
    this._users = [] as User[];
    this._selectedUser = {} as User;
  }

  get users(): User[]{
    return this._users;
  }

  get selected(){
    return this._selectedUser;
  }

  ngOnInit(): void {
    /*this._userService
      .fetch().subscribe((users: User[]) => this._users = users);

     */
  }

  get currentUser(): User{
    return this._selectedUser;
  }

  selectUser($event: Event) {
    console.log("Evenement de changement de user");
  }
}
