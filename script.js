"use strict"
// 1
const delay = ms => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    })
  };
  
  const logger = time => console.log(`Resolved after ${time}ms`);
  
  delay(2000).then(logger); 
  delay(1000).then(logger); 
  delay(1500).then(logger); 

//   2
const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];
  const toggleUserState = (allUsers, userName) => {
    return new Promise((resolve, reject) => {
        const user = allUsers.find(user => user.name === userName);
        if (!user) {
            reject('There is no such user');
        }
         else {
            resolve(user.active);
  }
    });
}

  
  
  toggleUserState(users, 'Mango').then(updatedUsers => console.log(updatedUsers));
  toggleUserState(users, 'Lux').then(updatedUsers => console.log(updatedUsers));