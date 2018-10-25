import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../users/user.class';

@Pipe({
  name: 'sortUsers'
})
export class SortUsersPipe implements PipeTransform {

  transform(users: User[], property?: string): User[] {
    const sortProperty: string = (property != null) ? property : 'LastName';
    console.log(' Sort Users By : ', sortProperty);
    return  users.sort(compareFn);

    // creating function inside transform function, so that it will be only accessable insdie this method.
    function compareFn(a: User, b: User) {
      let x = a[sortProperty];
      let y = b[sortProperty];
      if ( typeof(x) === 'string' ) {
         x = x.toUpperCase;
      }

      if ( typeof(y) === 'string' ) {
        y = y.toUpperCase;
     }

      if ( x === y ) {
        return 0;
      }
      return  ( x > y ) ? 1 : -1;
    }

  }

}
