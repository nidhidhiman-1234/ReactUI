import React, { useState, useRef } from "react";
import { useStore } from "../constant";
import "./index.css";
const Header = () => {
  const { count } = useStore((state) => state);
  const { handleShowMenu, showMenu,handleShowCart,showCart,exploreModal,handleItems} = useStore((state) => state);
  const menuRef = useRef(null);
  return (
    <>
      <div className="header-containers">
        <div className="headerss">
          {showMenu ? (
            <img
              src="/close-menu.png"
              alt="Close Menu"
              className="logo-image-cross"
              onClick={() => handleShowMenu(false)}
            />
          ) : (
            <img
              src="/menu.png"
              alt="Close Menu"
              className="logo-image-cross"
              onClick={() => handleShowMenu(true)}
            />
          )}
          <img src="/gabar.png" alt="Gabar" className="logo-image" />
          <div style={{ position: "relative",opacity:!exploreModal?0:1 }} onClick={()=>{
            if(exploreModal)
            
            { handleShowCart(!showCart) 
            handleItems(false)
          }}}>
            <div className="itemCount">
              <span className="counter-number">{count}</span>
            </div>
            <img src="/Vector.png" style={{ height: 20, width: 20,opacity:!exploreModal?0:1 }} />
          </div>
        </div>
      </div>

      {showMenu && (
        <div className="modalss" style={getModalPosition(menuRef)}>
          <div className="modal-contentss">
            <div className="items-option-container">
              <span
                className="option-text"
                onClick={() => handleShowMenu(false)}
              >
                Gabar for Myanmar
              </span>
              <div className="bottom-border" />
              <span
                className="option-text"
                onClick={() => handleShowMenu(false)}
              >
                Stores
              </span>
              <div className="bottom-border" />
              <span
                className="option-text"
                onClick={() => handleShowMenu(false)}
              >
                About us
              </span>
              <div className="bottom-border" />
              <div className="social-links-container">
                <div className="social-links">
                  <img src="/instagram.png" className="social-link-img" />
                  {/* <span className="social-link-txt">/gabar</span> */}
                </div>
                <div className="social-links">
                  <img
                    src="/tiktok.png"
                    alt="TikTok"
                    className="social-link-img"
                  />
                  {/* <span className="social-link-txt">@gabarinthewild</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
    // </div>
  );
};

const getModalPosition = (menuRef) => {
  if (menuRef.current) {
    const rect = menuRef.current.getBoundingClientRect();
    return {};
  }
  return {};
};

export default Header;
