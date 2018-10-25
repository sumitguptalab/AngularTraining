import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../users/user.class';


@Pipe({
  name: 'searchUsers'
})
export class SearchUsersPipe implements PipeTransform {

  transform(users: User[], searchCriteria: string): User[] {
    console.log('searchCriteria by : ', searchCriteria);
    if (typeof(searchCriteria) === 'undefined' || searchCriteria === '' ) {
      return users;
    }
    const searchUsers: User[] = [];
    for (const user of users) {
      if ( (typeof(user.UserName) === 'string' && user.UserName.includes(searchCriteria)) ||
          (typeof(user.FirstName) === 'string' && user.FirstName.includes(searchCriteria) ) ||
          (typeof(user.LastName) === 'string' && user.LastName.includes(searchCriteria) ) ||
          (typeof(user.Phone) === 'string' && user.Phone.includes(searchCriteria)) ||
          (typeof(user.Email) === 'string' && user.Email.includes(searchCriteria)) ||
          (typeof(user.Id) === 'number' && user.Id === Number(searchCriteria)) )  {
        searchUsers.push(user);
      }
    }
    return searchUsers;
  }

}
