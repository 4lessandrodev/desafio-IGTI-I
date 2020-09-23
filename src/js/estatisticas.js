export default class Statistica{
 generateStatistic(users) {
  const qtdMasculino = users.filter((user) => user.gender === 'male').length;
  const qtdFeminino = users.filter((user) => user.gender === 'female').length;
  const somaDasIdades = users.reduce((total, user) => user.dob.age + total, 0);
  const mediaDasIdades = somaDasIdades / (qtdMasculino + qtdFeminino);
  return { qtdMasculino, qtdFeminino, somaDasIdades, mediaDasIdades };
 }
}