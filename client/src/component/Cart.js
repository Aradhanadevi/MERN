import React, { useEffect, useState } from 'react';

export const Cart = (props) => {
  const cartItems = props.purchaseItem || [];
  const [total, setTotal] = useState(0);

  function calculateTotal() {
    let sum = 0;
    for (let i = 0; i < cartItems.length; i++) {
      sum += cartItems[i].price;
    }
    return sum;
  }

  useEffect(() => {
    setTotal(calculateTotal());
  }, [cartItems]);

  return (
    <div>
      <h1>Shopping Center</h1>
      <div className='row'>
        <div className='col mt-3 ml-3'>
          <div className='card'> 
            {cartItems.map((item, index) => (
              <div key={index}>
                <h4 className="card-title">{item.title}</h4>
                <img src={item.imageUrl} alt="no img" />
                <div className='card-body'>
                  <h4>Rs. {item.price}</h4>
                  <p className='card-body'>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='col mt-3 ml-3'>
          <div className='card'>
            <table>
              <tbody>
                <tr><th>Items</th><th>Sub Total</th></tr>
                {cartItems.map((item, index) => (
                  <tr key={index}><td>{item.title}</td><td>{item.price}</td></tr>
                ))}
                <tr><td>Total</td><td>{total}</td></tr>
              </tbody>
            </table>
            <center><button type='button' className='btn btn-success'>Buy Now!</button></center>
          </div>
        </div>
      </div>
    </div>
  )
}
