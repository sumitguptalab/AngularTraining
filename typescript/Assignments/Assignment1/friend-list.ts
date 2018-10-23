import { Friend } from './friend'

// let friends: Friend[] = [];
// friends[0] = new Friend("Sumit", 35, "sumit@test.com", true);
// friends[1] = new Friend("Jerry", 21, "jerry@test.com", false);
// friends[2] = new Friend("Scott", 22, "scott@test.com", false);
// friends[3] = new Friend("Suresh", 36, "suresh@test.com", true);
// friends[4] = new Friend("Chalma", 37, "chalma@test.com", true);


let friends: Friend[] = [];
friends.push(new Friend("Sumit", 35, "sumit@test.com", true));
friends.push(new Friend("Jerry", 21));

var friend: Friend=new Friend("Scott", 22);
friend.email =   "scott@test.com";
friend.bestFriend = true;

friends.push(friend);
friends.push(new Friend("Suresh", 36, "suresh@test.com", true));
friends.push(new Friend("Chalma", 37, "chalma@test.com", true));

enum header {
  "NAME" = "Name", "AGE" ="Age","EMAIL" ="Email","BEST" = "Best"
};

function printFirends() {
  console.log(`${header.NAME} ${header.AGE} ${header.EMAIL}        ${header.BEST} `);
  friends.forEach(element => {
  //  console.log(element.name + " " + element.age + " " +  element.email + " " +  element.bestFriend);
    
    console.log(`${element.name} ${element.age} ${element.email} ${element.bestFriend} `);
  });
  console.log("Done Printing");
}

printFirends();

console.log("Printing Sorted firends");

function compareAge(a: Friend,b: Friend) {
  if (a == b) return 0;
   return (a.age > b.age) ? 1 : -1;
}

friends.sort(compareAge);
printFirends();
