import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
  const [laptops, setLaptops] = useState([]);
  const navigate = useNavigate();
  const addtocartBtn = (index)=>{
    const addedCart = laptops[index];
    console.log(`test` +addedCart.title);
    const item = (laptops[index]).title;
    props.purchaseItem(addedCart);
    alert(item + ' has been added to cart ');
    if(window.confirm('Proceed to cart?')){
      navigate('/cart')
    }
  }
  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const response = await fetch('/laptop');
        const data = await response.json();
        setLaptops(data);
      } catch (error) {
        console.error('Error fetching laptops:', error);
      }
    };

    fetchLaptops();
  }, []);

  return (
    <>
    <div className='container-fluid'>
    <div className='row justify-content-center'>
        {laptops.map((laptop, index) => (
           <div key={index} className="col-md-3 mb-3">
            <div  className="card h-100">
            <h3 className="card-title"><center>{laptop.title}</center></h3>
            {/* Use Base64 encoded image as src */}
            <img src={laptop.imageUrl} alt={laptop.title} />
            <div className="card-body">
            <p className="card-text" >Price: {laptop.price}</p>
            <p className="card-text" >Count: {laptop.count}</p>
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
