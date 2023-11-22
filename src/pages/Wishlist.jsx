import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeFromWishlist } from '../slices/wishlistSlice';
import { addToCart } from '../slices/cartSlice';


function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);

  const dispatch = useDispatch()

  const handlewishlist = (item)=>{
    dispatch(addToCart(item))
    dispatch(removeFromWishlist(item.id))
  }
  return (
    <div>
<Row className='ms-3 me-3' style={{marginTop:'150px'}}>


{
  wishlistArray?.length>0?
  wishlistArray?.map((item)=>(
  <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
<Card style={{ width: '100%' }}>
     <Card.Img style={{height:'200px'}} variant="top" src={item.image}/>
     <Card.Body>
       <Card.Title  className='fw-bolder'></Card.Title>
       <Card.Text>
         <p></p>
         <p className='fw-bolder'>Price : $</p>
       </Card.Text>
       <div className='d-flex align-items-center justify-content-between'>
         <Button onClick={()=>dispatch(removeFromWishlist(item.id))}  variant="outline-danger rounded"><i class="fa-solid fa-trash"></i></Button>
         <Button onClick={()=>handlewishlist(item)} variant="outline-success rounded"><i class="fa-solid fa-cart-plus"></i></Button>
 
       </div>
     </Card.Body>
   </Card>
</Col>)):
<p>nothing to display</p>

}

</Row>
    </div>
  )
}

export default Wishlist