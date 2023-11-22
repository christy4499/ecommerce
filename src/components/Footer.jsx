import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center w-100 flex-column bg-primary text-white '>
    <div className='d-flex justify-content-evenly align-item-center w-100 mt-5'>
     <div className='websites ' style={{width:'400px'}}>
<h4 className='mb-3' style={{overflowY:'hidden'}}>
<i class="fa-solid fa-cart-shopping me-2
"></i>  E CART
</h4>
<h6 className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa consequuntur inventore nesciunt! Amet obcaecati dolorum odit? Consequuntur, minus. Molestiae sunt molestias vero consequuntur, quis culpa officiis aut dolor accusamus error?</h6>

     </div>

    
     <div className='links d-flex flex-column'>
      <h4 className='mb-3'>Links</h4>
      <Link to={'/'} style={{textDecoration:'none', color:'white'}} >HomePage</Link>
      <Link to={'/cart'} style={{textDecoration:'none', color:'white'}} >Cart </Link>
      <Link to={'/wishlist'} style={{textDecoration:'none', color:'white'}} >Wishlist</Link>
     </div>

     <div className='guides d-flex flex-column'>
     <h4 className='mb-3'>Guides</h4>
      <Link to={'https://react.dev/'} style={{textDecoration:'none', color:'white'}} >React</Link>
      <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none', color:'white'}} >React Bootstrap </Link>
      <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'white'}} >Bootswatch</Link>
      
     </div>
     <div className='contact d-flex flex-column'>

<h4 className='mb-3'>Contacts</h4>
<div className='d-flex'>
<input className='form-control' type="text" placeholder='enter your email id'/>
<button className='btn btn-warning ms-2'>Subscribe</button>

</div>

<div className='d-flex justify-content-evenly align-items-center'>
<Link to={'/'} style={{textDecoration:'none', color:'white'}} ><i class="fa-brands fa-instagram fa-2x"></i></Link>
      <Link to={'/home'} style={{textDecoration:'none', color:'white'}} ><i class="fa-brands fa-facebook fa-2x"></i> </Link>
      <Link to={'/watch-history'} style={{textDecoration:'none', color:'white'}} ><i class="fa-brands fa-youtube fa-2x"></i></Link>
      <Link to={'/'} style={{textDecoration:'none', color:'white'}} ><i class="fa-brands fa-twitter fa-2x"></i></Link>
      <Link to={'/home'} style={{textDecoration:'none', color:'white'}} ><i class="fa-brands fa-linkedin fa-2x"></i>  </Link>
</div>
     </div>

    </div>
    <p className='mt-5'>Copyright @ 2023 Media Player Built with React</p>
  </div>
  )
}

export default Footer