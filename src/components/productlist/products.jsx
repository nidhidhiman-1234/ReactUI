// import React from "react";
// import { useStore } from "../constant";
// import './index.css'
// export default function Products() {
//     const {handleShowProductList,handleItems,getData}=useStore(state=>state)
//   return (
//     <div
//       style={{
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//         <div className="main-container-products">

//         {
//             [...Array(10).keys()].map((el,index)=>{
//                 return (

//       <div className="product-block" onClick={()=>{
//         handleShowProductList(false)
//         handleItems(true)
//         getData("helo")
//       }}>
//         <div className="listing-product">
//           <img src="/test1.png" className="product-Images" />
//           <span className="product-title">hello world</span>
//           <span className="product-descriptionss">this is a description</span>
//           <span className="product-descriptionss">Price</span>
//           <span className="product-descriptionss">150/-</span>
//           <span className="product-descriptionss">Available Stock</span>
//           <span className="product-descriptionss">100 pcs</span>
//         </div>
//       </div>
//                 )
//             })
//         }
//         </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useStore } from "../constant";
import './index.css';

export default function Products() {
  const { handleItems } = useStore(state => state);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleProductClick = async (productId) => {
    try {
      const response = await axios.get(`http://localhost:4000/products/${productId}`);
      const productData = response.data;
      navigate(`/dummy/${productId}`, { state: { productData } });
      handleItems(true);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("http://localhost:4000/products");
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []); 

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="main-container-products">
        {products.map(product => (
          <div className="product-block" key={product.id} onClick={() => handleProductClick(product.id)}>
            <div className="listing-product">
              <img src={product.images[0]} className="product-Images" alt="Product" />
              <span className="product-title">{product.title}</span>
              <span className="product-descriptionss">{product.description}</span>
              <span className="product-descriptionss">Price: {product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
