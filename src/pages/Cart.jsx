import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../slices/cartSlice';
import { emptycart } from '../slices/cartSlice';
import { useNavigate } from 'react-router-dom';

function Cart() {
const cartArray = useSelector((state)=>state.cartReducer)
/* console.log(cartArray); */
const dispatch = useDispatch()
const [total,settotal] = useState(0)
const navigate = useNavigate()

const getTotal = ()=>{
 if(cartArray.length>0){settotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))}
 else{
  settotal(0)
 }
}
useEffect(()=>{
  getTotal()
},[cartArray])
const handlecart =()=>{
  alert('thankyou')
  dispatch(emptycart())
  navigate('/')
}
  return (
    <div style={{marginTop:'150px'}}>
{
  cartArray?.length>0? <div className='row w-100'>
  <div className='col-lg-6 m-5'>
    <table  className='table border shadow'>
      <thead>
        <tr>
          <th>#</th>
          <th>product</th>
          <th>image</th>
          <th>price</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
       { cartArray?.map((item,index)=>( <tr>
          <td>{index+1}</td>
          <td>{item.title}</td>
          <td><img width={'100px'} height={'100px'} src={item.image} alt="" /></td>
          <td>${item.price}</td>
          <td>         <Button  onClick={()=>dispatch(removeFromCart(item.id))} variant="outline-danger rounded"><i class="fa-solid fa-trash"></i></Button>
</td>
        </tr>))
      }
      </tbody>
    </table>
  </div>
<div className="col-lg-4 d-flex justify-content-center align-items-center">
  <div className='border shadow p-5'>
<h2>Cart Summary</h2>
<h4>
  total number of products :{ cartArray.length}
  
</h4>  
<h4>total price :{total}</h4>
<button onClick={handlecart} className='btn btn-success rounded w-100 mt-3'>Checkout</button>
</div>
</div>

</div>:
<p>nothing to dispkay</p>
}
    </div>
  )
}

export default Cart