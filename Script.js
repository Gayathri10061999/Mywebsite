let data=[
    {id: 1,
    name:"abc",
    age:10
 },
    {id:2,
     name:"def",
     age:30
    },
    {id:3,
    name:"ghi",
    age:15
}
]
// let arrayid=data.map(function(data){
//      return data.id;
// });
// console.log(arrayid)
let totalage=data.reduce((acc,curr)=>{
  return acc+curr.age;
},1
);
console.log(totalage);