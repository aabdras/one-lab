const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const cities = [
  { name: 'Almaty', code: 'ALA' },
  { name: 'Nursultan', code: 'AST'},
  { name: 'Shymkent', code: 'SHY' },
  { name: 'Aktau', code: 'AKT' },
  { name: 'Atyrau', code: 'ATY' },
  { name: 'Karaganda', code: 'KAR' },
  { name: 'Kyzylorda', code: 'KZY' },
  { name: 'Pavlodar', code: 'PAV' },
];

console.log('Четные числа: '+numbersList.filter(x=>x%2==0))

console.log('Нечетные числа: '+numbersList.filter(x=>x%2==1))

console.log('Список городов, которые начинаются с буквы K:')
console.log(cities.filter(x => x.name.startsWith("K")))

console.log('Названия городов: ')
cities.map(x=>console.log(x.name+''))

sum=1;
for(let i=0; i<numbersList.length; i++)
{
    sum*=numbersList[i]
}
console.log('Произведение элементов: '+sum)

console.log('Произведение элементов: '+numbersList.reduce((total,amount)=>total*amount))

console.log('Cумма элементов: '+numbersList.reduce((total,amount)=>total+amount))

let city=new Object();
cities.reduce(function(start,end)
{
   city[end.code]=end.name
})

console.log('Объект cities: ')
console.log(city)
