import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWhishlist } from '../slices/wishlistSlice';
import { addToCart } from '../slices/cartSlice';





function Home() {

  const data = useFetch('https://fakestoreapi.com/products')
  console.log(data);

  const dispatch = useDispatch()
  return (
<Row className='ms-3 me-3' style={{marginTop:'150px'}}>

 { data?.length>0?
 data?.map((item)=>(
<Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
<Card style={{ width: '100%' }}>
      <Card.Img style={{height:'200px'}} variant="top" src={item.image}/>
      <Card.Body>
        <Card.Title  className='fw-bolder'>{item.title.slice(0,20)}...</Card.Title>
        <Card.Text>
          <p>{item.description.slice(0,40)}...</p>
          <p className='fw-bolder'>Price : ${item.price}</p>
        </Card.Text>
        <div className='d-flex align-items-center justify-content-between'>
          <Button onClick={()=>dispatch(addToWhishlist(item))} variant="outline-danger rounded"><i class="fa-solid fa-heart"></i></Button>
          <Button onClick={()=>dispatch(addToCart(item))} variant="outline-success rounded"><i class="fa-solid fa-cart-plus"></i></Button>
  
        </div>
      </Card.Body>
    </Card>
</Col>))
: <p>nothing do display</p>
}
</Row>
  
  )
}

export default Home