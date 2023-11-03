// import React, { useEffect, useState } from "react";
// import "./index.css";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import Button from "@mui/material/Button"
// import { useStore } from "../constant";
// const Dummy = () => {
//   const image = ["/test1.png", "/test2.png", "/test3.png","/test4.png"];
//   const [activeImage, setActiveImage] = useState(image[0]);
//   const {increase,count}=useStore(state=>state)
//   const [counter, setCounter] = useState(0);
//   const handleOnChange = (val) => {
//     if (val) {
//       setCounter((e) => e + 1);
//     } else {
//       if (counter != 0) {
//         setCounter((e) => e - 1);
//       }
//     }
//   };
//   const numReg=/^[0-9]*$/
//   const handleChange=(e)=>{
//     if(numReg.test(e.target.value)){
//       if(!e.target.value) {
//         setCounter(0)
//         return
//       }
//       if(e.target.value>=0){

//         if(e.target.value<100)
//         {
//           setCounter(parseInt(e.target.value))
//         }
//       }
//     }
//   }

//   const handleIncreaseCount=()=>{
//       increase(counter)
//   }
//   return (
//     <>
//     <div className="parent-container-dummy">
//       <div className="sub-parent-container">
//         <div className="item-main-container">
//           <div className="series-image">
//             {image.map((el, index) => {
//               return (
//                 <img
//                   src={el}
//                   className={el.includes(activeImage) ?"active-product-image":"product_image"}
//                   onClick={() => setActiveImage(el)}
//                   key={index}
//                 />
//               );
//             })}
//           </div>
//           <div className="zoomed-image">
//             <img src={activeImage} className="main-image" />
//           </div>
//           <div className="other-details">
            
//             <span className="product-heading">Lorem Ipsum Dolor</span>
//             <div className="item-description-containss">
              
//             <span className="product-sub-heading">
//               by ordering for later help us reduce waste
//             </span>
//             <span className="product-sub-heading-test">Ingridents</span>
//             <p className="product-description">
//               Lorem Ipsum Dolor by ordering for later to help us reduce waste
//               Ingredients Sit amet consectetur. Urna est nunc a arcu eros fusce
//               maecenas ut sed. Viverra ut diam turpis purus maecenas. Libero
//               purus consectetur diam dolor rhoncus. Mauris id sit donec facilisi
//               integer. Morbi morbi incondimentum nec turpis sit condimentum
//               suspendisse tincidunt. Tempor a pretium magna eleifend nam tempus
//               quam. Nisl lorem ut pulvinar posuere aliquet amet odio. Est mi sit
//               consequat cursus. Cras eros in cras aliquam. Adipiscing aliquet
//               vehicula nulla nulla adipiscing leo eget neque. Porttitor accumsan
//               feugiat pellentesque tristique. Amet integer eu netus vestibulum
//               tempor diam. Nunc donec amet nisi sed sem.Morbi morbi in
//               condimentum nec turpis sit condimentum suspendisse tincidunt.
//               Tempor a pretium magna eleifend nam tempus quam. Nisl lorem ut
//               pulvinar posuere aliquet amet odio. Est mi sit consequat cursus.
//               Cras eros in cras aliquam. Adipiscing aliquet vehicula nulla nulla
//               adipiscing leo eget neque. Porttitor accumsan feugiat pellentesque
//               tristique. Est mi sit consequat cursus. Cras eros in cras aliquam.
//               Adipiscing aliquet vehicula nulla nulla adipiscing leo eget neque.
//               Porttitor accumsan feugiat pellentesque tristique. Est mi sit
//               consequat cursus. Cras eros in cras aliquam.
//             </p>
//             </div>
//             <div className="price-container-cart">
//             <span className="stroked-text">$150</span>
//             <div className="bottom-items">
//               <span className="actual-price-text">$150</span>
//               <span className="grad-container">Save 15%</span>
//             </div>
//             </div>

//             <div className="bottom-btn-container">
//               <div className="counter-block">
//                 <div className="icon-holder">
//                   <RemoveIcon
//                     fontSize={"24px"}
//                     onClick={()=>handleOnChange(false)}
//                   />
//                 </div>

//                 <input
//                   className="inner-counter-ele"
//                   value={counter}
//                   onChange={handleChange}
//                   inputMode="numeric"
//                 />
//                 {/* <span className="inner-counter-ele">
//                   {counter}
//                 </span> */}
//                 <div className="icon-holder2">
//                   <AddIcon
//                     fontSize={"24px"}
//                     onClick={()=>handleOnChange(true)}
//                   />
//                 </div>
//               </div>
//               <button className="add-cart-btn" onClick={handleIncreaseCount}>
//                 <span className="btn-txt-cart">Add to bag</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };
// export default Dummy;

import React, { useEffect, useState } from "react";
import "./index.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button"
import { useStore } from "../constant";
import { useParams } from "react-router-dom";
import axios from "axios";
const Dummy = () => {
  const image = ["/test1.png", "/test2.png", "/test3.png","/test4.png"];
  const [activeImage, setActiveImage] = useState(image[0]);
  const {increase,count}=useStore(state=>state)
  const [counter, setCounter] = useState(0);



  const { id } = useParams();
  const [product, setProduct] = useState(null);

console.log(id,"params")

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/products/${id}`);
        
        console.log(response.data,"aaaaaaaaaaaaaaaa"); 

        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
  
    fetchProduct();
  }, [id]);


  const handleOnChange = (val) => {
    if (val) {
      setCounter((e) => e + 1);
    } else {
      if (counter != 0) {
        setCounter((e) => e - 1);
      }
    }
  };
  const numReg=/^[0-9]*$/
  const handleChange=(e)=>{
    if(numReg.test(e.target.value)){
      if(!e.target.value) {
        setCounter(0)
        return
      }
      if(e.target.value>=0){

        if(e.target.value<100)
        {
          setCounter(parseInt(e.target.value))
        }
      }
    }
  }

  const handleIncreaseCount=()=>{
      increase(counter)
  }

  
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className="parent-container-dummy">
      <div className="sub-parent-container">
        <div className="item-main-container">
          <div className="series-image">
            {/* {image.map((el, index) => {
              return (
                <img
                  src={el}
                  className={el.includes(activeImage) ?"active-product-image":"product_image"}
                  onClick={() => setActiveImage(el)}
                  key={index}
                />
              );
            })} */}
               {product.images.map((el, index) => (
                <img
                  src={el}
                  className={el.includes(product.activeImage) ? "active-product-image" : "product_image"}
                  onClick={() => setActiveImage(el)}
                  key={index}
                />
              ))}
          </div>
          <div className="zoomed-image">
            <img src={activeImage} className="main-image" />
          </div>
          <div className="other-details">
            
            {/* <span className="product-heading">Lorem Ipsum Dolor</span> */}
            <span className="product-heading">{product.title}</span>
            <div className="item-description-containss">
              
            <span className="product-sub-heading">
              by ordering for later help us reduce waste
            </span>
            <span className="product-sub-heading-test">Ingridents</span>
            {/* <p className="product-description">
              Lorem Ipsum Dolor by ordering for later to help us reduce waste
              Ingredients Sit amet consectetur. Urna est nunc a arcu eros fusce
              maecenas ut sed. Viverra ut diam turpis purus maecenas. Libero
              purus consectetur diam dolor rhoncus. Mauris id sit donec facilisi
              integer. Morbi morbi incondimentum nec turpis sit condimentum
              suspendisse tincidunt. Tempor a pretium magna eleifend nam tempus
              quam. Nisl lorem ut pulvinar posuere aliquet amet odio. Est mi sit
              consequat cursus. Cras eros in cras aliquam. Adipiscing aliquet
              vehicula nulla nulla adipiscing leo eget neque. Porttitor accumsan
              feugiat pellentesque tristique. Amet integer eu netus vestibulum
              tempor diam. Nunc donec amet nisi sed sem.Morbi morbi in
              condimentum nec turpis sit condimentum suspendisse tincidunt.
              Tempor a pretium magna eleifend nam tempus quam. Nisl lorem ut
              pulvinar posuere aliquet amet odio. Est mi sit consequat cursus.
              Cras eros in cras aliquam. Adipiscing aliquet vehicula nulla nulla
              adipiscing leo eget neque. Porttitor accumsan feugiat pellentesque
              tristique. Est mi sit consequat cursus. Cras eros in cras aliquam.
              Adipiscing aliquet vehicula nulla nulla adipiscing leo eget neque.
              Porttitor accumsan feugiat pellentesque tristique. Est mi sit
              consequat cursus. Cras eros in cras aliquam.
            </p> */}
            <p className="product-description">${product.description} </p>
            </div>
            <div className="price-container-cart">
            {/* <span className="stroked-text">$150</span> */}
            <span className="stroked-text">${product.price}</span>
            <div className="bottom-items">
              {/* <span className="actual-price-text">$150</span> */}
              <span className="actual-price-text">${product.price}</span>
              <span className="grad-container">Save 15%</span>
            </div>
            </div>

            <div className="bottom-btn-container">
              <div className="counter-block">
                <div className="icon-holder">
                  <RemoveIcon
                    fontSize={"24px"}
                    onClick={()=>handleOnChange(false)}
                  />
                </div>

                <input
                  className="inner-counter-ele"
                  value={counter}
                  onChange={handleChange}
                  inputMode="numeric"
                />
                {/* <span className="inner-counter-ele">
                  {counter}
                </span> */}
                <div className="icon-holder2">
                  <AddIcon
                    fontSize={"24px"}
                    onClick={()=>handleOnChange(true)}
                  />
                </div>
              </div>
              <button className="add-cart-btn" onClick={handleIncreaseCount}>
                <span className="btn-txt-cart">Add to bag</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default Dummy;
