export default async (buscar) => {
 const USERS = await buscar(`https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo`);
 return USERS;
};