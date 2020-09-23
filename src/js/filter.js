import * as Handler from './handle.js';
import * as database from './users.js';

export default (event) => {
 event.preventDefault();
 const name = document.getElementById('name').value;
 const filteredUsers = database.default.USERS.filter((user) => {
  if (user.name.first.includes(name) || user.name.last.includes(name) ||user.name.first.includes(name.toUpperCase()) || user.name.last.includes(name.toUpperCase())) {
   return user;
  }
 });

 const handler = new Handler.default(document);
 handler.render(filteredUsers);
};