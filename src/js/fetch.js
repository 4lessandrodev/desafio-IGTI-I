export default async (url) => {
 console.log('Buscando ...');
 const result = await fetch(url);
 const { results } = await result.json();
 console.log('Ok, finalizado!');
 return results;
};
