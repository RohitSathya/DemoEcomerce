import { useEffect, useState } from 'react'
import Products from './Products'
import Cart from './Cart'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import royologo from '../images/logo.png'
import locationlogo from '../images/location.png'
import search from '../images/search.png'
import './App.css'
import cartstore from '../images/cart.png' 
import Navbar from './navbar'
import Sample from './sample'
import Login from './login'
import BuyPage from './BuyPage'
import Signup from './signup'
import Myoder from './Myoder'
import ProductInfo from './ProductInfo'

import threepoint5 from '../images/3.5.png'
import four from '../images/4.0.png'
import fourpoint5 from '../images/4.5.png'
import five from '../images/5.0.png'
function App() {

   const[buyprice,setbuyprice]=useState()
  const[count,setcount]=useState()
  const [username,setusername]=useState()
  const [buydata,setbuydata]=useState([])
  const [productinfo,setproductinfo]=useState({})

  const products = [
    {
      name: 'Grace solid wooden sofa set',
      category: 'Sofa',
      price: '500 USD',
      image: 'https://d2dwxeidp9b9gl.cloudfront.net/images/products/169183524749301.jpg',
      count: 1,
      description: 'Secured and Ultra fast mobile',
      brand: 'Apple',
      rating: 5.0,
      t: ['Argan Oil', 'Coconut Oil', 'Vitamin E'],
    
      pur: '500+ purchased last month',
      mrp: '800.32',
      dis: '50%',
      ratingimg:four,
      ati: [
        'Luxurious wooden sofa set crafted for comfort and style.',
        'Solid wood construction for durability and longevity.',
        'Ideal centerpiece for your living room decor.',
        'Elegant design with plush cushions for maximum relaxation.',
        'Enhance your home with this exquisite sofa set.'
      ]
    },
    {
      name: 'Queen size bed',
      category: 'Bed',
      price: '100.00 USD',
      ratingimg:fourpoint5
      ,
  
      image: 'https://d2dwxeidp9b9gl.cloudfront.net/images/category/1685613799430Queen Size Beds.jpg',
      count: 2,
      description: 'Professional DSLR camera for stunning photography and videography',
      brand: 'Canon',
      resolution: '24.2 MP',
      rating: 4.5,
      videoResolution: 'Full HD 1080p',
      ratingimg: fourpoint5,
      pur: '35+ purchased last month',
      mrp: '150.00',
      dis: '25%',
      ati: [
        'Spacious queen-size bed for ultimate comfort.',
        'Sturdy construction with premium wood materials.',
        'Elevate your bedroom decor with this elegant bed frame.',
        'Generous dimensions for a restful night\'s sleep.',
        'Experience luxury and relaxation with this queen-size bed.'
      ]
    },
    {
      name: '6 seater dining set',
      category: 'Dining',
      price: '370.66 USD',
      
      image: 'https://d2dwxeidp9b9gl.cloudfront.net/images/category/16856250712324 Seater Dining Sets.jpg',
      count: 3,
      description: 'Calvin Klein perfume for a captivating and long-lasting fragrance',
      brand: 'Calvin Klein',
      rating: 4.0,
      scent: 'Floral and Woody',
      ratingimg: four,
      pur: '250+ purchased last month',
      mrp: '741.32',
      dis: '50%',
      ati: [
        'Stylish 6-seater dining set for memorable meals.',
        'Crafted from premium materials for durability and elegance.',
        'Create lasting memories with friends and family around this dining table.',
        'Comfortable seating for up to six guests.',
        'Enhance your dining space with this exquisite set.'
      ]
    },
    {
      name: 'Noorah sheesham wood tv cabinet',
      category: 'Cabinet',
      price: '300.00 USD',
      image: 'https://d2dwxeidp9b9gl.cloudfront.net/images/category/1685610229520Tv unit.jpg',
      count: 3,
      description: 'Comfortable and stylish sneakers for everyday wear',
      brand: 'JumpStyle',
      rating: 3.5,
      sizeOptions: ['US 7', 'US 8', 'US 9'],
      ratingimg: threepoint5,
      pur: '500+ purchased last month',
      mrp: '450.00',
      dis: '25%',
      ati: [
        'Elegant TV cabinet crafted from Sheesham wood for durability.',
        'Ample storage space for media devices and accessories.',
        'Enhance your living room decor with this stylish and functional piece.',
        'Stylish addition to any modern home.',
        'Organize your entertainment area with this versatile TV cabinet.'
      ]
    },
    {
      name: 'Rose sheesham wood dressing table',
      category: 'Dressing Table',
      price: '400.00 USD',
      image: 'https://d2dwxeidp9b9gl.cloudfront.net/images/products/1685512766235Rose Sheesham Wood Dressing Table01.jpg',
      count: 3,
      description: 'Gentle face wash for a refreshing and clean face',
      brand: 'Dove',
      rating: 4.0,
      skinType: 'All Skin Types',
      ratingimg: four,
      pur: '400+ purchased last month',
      mrp: '800.00',
      dis: '50%',
      ati: [
        'Elegant dressing table crafted from Sheesham wood for durability and style.',
        'Ample storage space for your beauty essentials.',
        'Enhance your morning routine with this stylish and functional piece.',
        'Elevate your bedroom decor with this versatile dressing table.',
        'Organize your skincare and makeup products with ease.'
      ]
    },
    {
      name: 'Wooden study table',
      category: 'Table',
      price: '500.00 USD',
      image: 'https://d2dwxeidp9b9gl.cloudfront.net/images/products/1685603535276Aria Sheesham Wood Study Table (Honey Finish).jpg',
      count: 3,
      description: 'Elegant white band watch for a classy and timeless look',
      brand: 'TimeMaster',
      rating: 4.0,
      waterResistance: '30m',
      ratingimg: four,
      pur: '300+ purchased last month',
      mrp: '750.00',
      dis: '25%',
      ati: [
        'Stylish study table crafted from Sheesham wood for durability and elegance.',
        'Spacious surface for studying or working.',
        'Enhance your workspace with this versatile and functional piece.',
        'Elevate your home office decor with this elegant study table.',
        'Organize your work essentials with ease.'
      ]
    },
    {
      name: 'Solid wooden console table',
      category: 'Table',
      price: '300.62 USD',
      image: 'https://d2dwxeidp9b9gl.cloudfront.net/images/products/1685452789984Travis Solid Wood Console Table02.jpg',
      count: 3,
      description: 'Lightweight and breathable running shoes for active lifestyles',
      brand: 'RunFlex',
      rating: 5.0,
      color: 'Grey/White',
      ratingimg: five,
      pur: '150+ purchased last month',
      mrp: '601.24',
      dis: '50%',
      ati: [
        'Stylish console table crafted from solid wood for durability and functionality.',
        'Ideal for entryways, hallways, or living rooms.',
        'Enhance your home decor with this versatile and chic piece.',
        'Spacious surface for displaying decorative items'
  ]},{
    name: 'Wooden bar cabinet',
    category: 'Cabinet',
    price: '1000.00 USD',
    image: 'https://d2dwxeidp9b9gl.cloudfront.net/images/products/1685602762490Jason Solid Sheesham Wood Bar Cabinet (Brown Finish).jpg',
    count: 3,
    description: 'Premium smartwatch by Apple with advanced features and sleek design',
    brand: 'Apple',
    rating: 4.0,
    compatibility: 'iOS and Android',
    ratingimg: four,
    pur: '150+ purchased last month',
    mrp: '3000.00',
    dis: '75%',
    ati: [
      'Elegant wooden bar cabinet crafted from solid Sheesham wood for durability and style.',
      'Ample storage space for your bar essentials and glassware.',
      'Enhance your home entertainment area with this luxurious and functional piece.',
      'Ideal for storing and displaying your favorite beverages.',
      'Organize your bar accessories with this versatile bar cabinet.'
    ]
  },
  {
    name: 'wooden 4 seater dining set',
    category: 'Dining',
    price: '200.00 USD',
    image: 'https://d2dwxeidp9b9gl.cloudfront.net/images/category/1685625178153Dining Tables.jpg',
    count: 3,
    description: 'Vibrant pink lipstick for a bold and beautiful look',
    brand: 'CosmeticGlow',
    rating: 5.0,
    type: 'Matte',
    ratingimg: five,
    pur: '100+ purchased last month',
    mrp: '400.00',
    dis: '50%',
    ati: [
      'Stylish 4-seater dining set crafted from premium wood materials for durability and elegance.',
      'Compact design ideal for smaller dining spaces or breakfast nooks.',
      'Enhance your dining experience with this vibrant and functional dining set.',
      'Comfortable seating for up to four guests.',
      'Elevate your home decor with this chic and versatile dining set.'
    ]
  },
  {
    name: 'Wooden 4 seater Sofa dining set',
    category: 'Dining',
    price: '400.66 USD',
    image: 'https://d2dwxeidp9b9gl.cloudfront.net/images/products/1685538373037Atlanta 6 Seater Dining Set with Cushion (Honey Finish).jpg',
    count: 3,
    description: 'Martin perfumes with a unique blend of exotic scents',
    brand: 'Martin',
    rating: 4.0,
    scentNotes: ['Amber', 'Vanilla', 'Sandalwood'],
    ratingimg: four,
    pur: '500+ purchased last month',
    mrp: '601.32',
    dis: '25%',
    ati: [
      'Luxurious 4-seater dining set crafted from premium wood materials for durability and style.',
      'Elegant design with comfortable cushioned seats for a cozy dining experience.',
      'Enhance your dining area with this stylish and functional dining set.',
      'Ideal for intimate dinners or family gatherings.',
      'Create lasting memories with this exquisite dining set.'
    ]
  },
  {
    name: 'wooden modern TV cabinet',
    category: 'Cabinet',
    price: '350.00 USD',
    image: 'https://d2dwxeidp9b9gl.cloudfront.net/images/products/1685431337857Moviya Sheesham Wood Tv Cabinets01.jpg',
    count: 3,
    description: 'High-quality DSLR lens for sharp and clear photography',
    brand: 'LensMaster',
    focalLength: '50mm',
    rating: 4.0,
    aperture: 'f/1.8',
    ratingimg: four,
    pur: '1000+ purchased last month',
    mrp: '700.00',
    dis: '50%',
    ati: [
      'Modern TV cabinet crafted from Sheesham wood for durability and style.',
      'Ample storage space for media devices and accessories.',
      'Enhance your living room decor with this sleek and functional piece.',
      'Ideal for organizing your entertainment area.',
      'Create a contemporary look with this versatile TV cabinet.'
    ]
  },
  {
    name: 'Sheeesam wooden sofa set',
    category: 'Sofa',
    price: '50.66 USD',
    image: 'https://d2dwxeidp9b9gl.cloudfront.net/images/products/169183803484101.jpg',
    count: 3,
    description: 'Lightweight and durable athletic shoes for sports and workouts',
    brand: 'SportX',
    color: 'Red/Black',
    rating: 5.0,
    sizeOptions: ['US 6', 'US 7', 'US 8'],
    ratingimg: five,
    pur: '450+ purchased last month',
    mrp: '76.32',
    dis: '25%',
    ati: [
      'Durable and stylish sofa set crafted from premium Sheesham wood.',
      'Elegant design with comfortable cushions for a relaxing experience.',
      'Enhance your living room decor with this versatile and chic sofa set.',
      'Ideal for lounging and entertaining guests.',
      'Create a cozy atmosphere with this exquisite sofa set.'
    ]
  }
]
  
 
  const [dcount,setdcount]=useState(0)

   function getcount(e){
       setcount(e)
     
   }
   function dcou(e){
    setdcount(e)
    console.log('oirerejek')

   }
   function getname(e){
       
   
   
     
      if(e!==''){
       
        console.log(e+2)
    
   
        sr1(products.slice(0,6).filter((p)=>p.name.toLowerCase().startsWith(e)))
        sr2(products.slice(6,12).filter((p)=>p.name.toLowerCase().startsWith(e)))

      }
      else{
        sr1(products.slice(0,6))
        sr2(products.slice(6,12))

      }

      

   }
   function buyerprice(e){
    setbuyprice(e)
     
   }
   function buyerdata(e){
    setbuydata(e)

   }
   function usernamef(e){
    setusername(e)

   }
   function productinfos(e){
    setproductinfo(e)

   }
   var [row1,sr1]=useState(products.slice(0,6))
   var [row2,sr2]=useState(products.slice(6,12))
  

  return (
    <>
    
    
   
    <BrowserRouter>
    <Navbar data={count} func={getname} namess={username} dco={dcount}/>
    <Routes>
      <Route path='/app' element={<>
        <div className='s' style={{display:'flex',flexDirection:'row'}}>
    {row1.map((p)=><Products data={p} func={getcount} namefunc={usernamef} pi={productinfos}/>)}
    </div>
    <div className='s' style={{display:'flex',flexDirection:'row'}}>
    {row2.map((p)=><Products data={p} func={getcount} namefunc={usernamef} pi={productinfos}/>)}
    </div></>}></Route>
      <Route path='/cart' element={<Cart func={buyerprice} funce={buyerdata}/>}></Route>
      <Route path='/' element={<Signup/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    
    <Route path='/buy' element={<BuyPage data={buyprice} func={dcou} data2={buydata} />}></Route>
    
     <Route path='/order' element={<Myoder/>}></Route>
     <Route path='/productinfo' element={<ProductInfo data={productinfo}/>}></Route>
    </Routes>
    
    </BrowserRouter>
   
   
 
     
    </>
  )
}

export default App
