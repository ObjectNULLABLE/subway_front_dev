import QueryString from 'query-string';

export default function foodArrayFilter(query, foodArray) {
  const filterParams = QueryString.parse(query);

  if (filterParams.category === 'all') return foodArray;

  let filteredArray = [];
  for (let index = 0; index < foodArray.length; index++) {
    if (filterParams.category === foodArray[index].category) {
      filteredArray.push(foodArray[index]);
    }
  }
  return filteredArray;
}
