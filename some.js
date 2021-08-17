const items=[
    {name :'bike', price:100},
    {name :'TV', price:200},
    {name:'Album',  price:10},
    {name:'Book',  price:500},
    {name :'Computer',  price:25},
    {name :'Keyboard', price:30}
]
const hasInexpensiveItems = items.some((item)=>{
    return item.price <= 100
})
console.log(hasInexpensiveItems)