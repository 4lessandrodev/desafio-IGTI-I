export default async (url) => {
 const result = await fetch(url);
 const { results } = await result.json();
 return results;
};
