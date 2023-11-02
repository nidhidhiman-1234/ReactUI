import React, { useEffect, useState } from "react";
import "./styles.css";
import ProgressBar from "@ramonak/react-progress-bar";
import { useNavigate } from "react-router-dom";
export default function LandingPage() {
  const [val, setVal] = useState(0);
  const navigate = useNavigate();
   useEffect(()=>{
    setTimeout(()=>{
        setVal(e=>e+20)
      },1500)
      if(val>100) {
        navigate('/main')
      }
   
    },[val])
     
  return (
    <div className="landing-contain">
      <div className="testing">
        <img src="/logo.png" className="page-img" />
        <div className="bar-container">
          <ProgressBar
            completed={val}
            bgColor="#fff"
            baseBgColor="#000"
            borderRadius="0px"
            height="11px"
            
          />
          ;
        </div>
      </div>
    </div>
  );
}
