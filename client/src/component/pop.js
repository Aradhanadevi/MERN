import React from 'react';
import Data from "./fwd/Data.json";
import { useNavigate } from 'react-router-dom';
const Home = (props) => {
  const navigate = useNavigate();
  const addtocartBtn = (index)=>{
    const addedCart = Data[index];
    console.log(`test` +addedCart.title);
    const item = (Data[index]).title;
    props.purchaseItem(addedCart);
    alert(item + 'has been added to cart ');
    if(window.confirm('Proceed to cart?')){
      navigate('/cart')
    }
  }
  return (
    <>
      <div className='container-fluid'>
        <div className='row justify-content-center'>
            {Data.map((item, index) => (
              <div key={index} className="col-md-3 mb-3">
                  <div className="card h-100">
                    <h4 className="card-title"><center>{item.title}</center></h4>
                    <img src={require(`../${item.url}`)} alt={item.title} className="card-img-top" />
                      <div className="card-body">
                            <p className="card-text">Price: {item.price} Rs</p>
                            <p className="card-text">Count: {item.count} left</p>
                            <button className='btn btn-warning'  onClick={()=>addtocartBtn(index)}>Add to cart</button>
                      </div>
                  </div>
              </div>
            ))}
          </div>
      </div>
    </>
  );
};

export default Home;
