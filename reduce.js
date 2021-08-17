const items=[
    {name :'bike', price:100},
    {name :'TV', price:200},
    {name:'Album',  price:10},
    {name:'Book',  price:500},
    {name :'Computer',  price:25},
    {name :'Keyboard', price:30}
]
const total = items.reduce((currentTotal,item) => {
    return item.price + currentTotal
},0)
console.log(total)