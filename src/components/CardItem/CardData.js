


const items = [

{   
    id:1,
    name:"Equity fundamentals – Corporate finance",
    price:400,
    image:process.env.PUBLIC_URL + "img/7.jfif",
    category: 'finance',
    description: 'Learn the ins and outs of the corporate financial structure. Understand the present value of future cash flows. Complete guide to constructing corporate deals and M&A structures. '

},
{
    id: 2,
    name: "Financial freedom - Asset accumulation",
    price:150,
    image: process.env.PUBLIC_URL + "img/3.webp",
    category: 'psichology',
    description: 'Learn how to read and navigate through company’s and personal financial statements. The structure of LLCs and Trusts and its tax and bureaucratic advantages. '

},
{
    id: 3,
    name: "Introduction to Finance",
    price: 50,
    image:process.env.PUBLIC_URL + "img/4.jpeg",
    category: 'science',
    description: 'Financial Markets and equity structures. Interest rate, debt and money market operations. Derivative markets and its vastness of operability. '

},
{
    id: 4,
    name: "Fixed Income",
    price:550,
    image: process.env.PUBLIC_URL + `img/5.jpg`,
    category: 'programming',
    description: 'Assessment of bond pricing, coupon payments, duration and yield. Option volatility and its impact on bond prices. Investment Grade vs High Yield bond. T-Bills and Certificate of Deposits.  '

},
{
    id: 5,
    name: "Financial Modeling 101- Basics of Finance",
    price:250,
    image:process.env.PUBLIC_URL + 'img/6.jpg',
    category: 'programming',
    description: 'Accounting principles and its visualization on financial statements. Foreign exchange operations and its impact on a country’s economic situation. Balance of Payments and international finance.'

},
{   
    id:6,
    name:"Corporate Finance Intermediate – CF 101",
    price:750,
    image:process.env.PUBLIC_URL + "img/8.jpg",
    category: 'finance',
    description: 'Stockholder interests. Asset pricing models and capital requirements. Funding markets and stock issuance. Dilutions and share buy back programs. '

},
{
    id: 7,
    name: "Corporate Finance Advanced – CF 201",
    price:1100,
    image: process.env.PUBLIC_URL + "img/9.jpeg",
    category: 'psichology',
    description: 'Equity beta and cost of capital. WACC and CAPM models in thorough analysis. Capital budgetind and options on hedging activities. Preferred stock and voting rights. Consolidated financial statements and international loopholes. '

}
]

//const productos = [];

//for (const item of items) {
  //  productos.push(new Producto(item.id,item.name,item.price,item.image,item.description))
//};

export default items;