


const items = [
{
    name:"Machine Learning",
    price: 12,
    id : 1,
    image:process.env.PUBLIC_URL + 'img/1.jfif'
    
},
{   
    id:4,
    name:"Financial Markets",
    price:9,
    image:process.env.PUBLIC_URL + "img/7.jfif"
    
},
{
    id: 5,
    name: "Introduction to Psichology",
    price:9,
    image: process.env.PUBLIC_URL + "img/4.jfif"
},
{
    id: 6,
    name: "The 5 secrets of Science",
    price: 10,
    image:process.env.PUBLIC_URL + "img/5.jfif"
},
{
    id: 7,
    name: "Getting Started with Python",
    price:11,
    image: process.env.PUBLIC_URL + `img/2.jfif`
},
{
    id: 8,
    name: "EF Core",
    price:12,
    image:process.env.PUBLIC_URL + 'img/7.png'
}

]

//const productos = [];

//for (const item of items) {
  //  productos.push(new Producto(item.id,item.name,item.price,item.image,item.description))
//};

export default items;