import React, { useState, useRef } from "react";
import { useStore } from "../constant";
import "./index.css";
// import RemoveIcon from "@mui/icons-material/Remove";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const Header = () => {
  const { count } = useStore((state) => state);
  const {
    handleShowMenu,
    showMenu,
    handleShowCart,
    showCart,
    exploreModal,
    handleItems,
    handleFormModal,
    handleShowProductList,
    showproducts
  } = useStore((state) => state);
  const menuRef = useRef(null);
  const circleStyle = {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: "black",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "8px",
  };
  return (
    <>
      <div className="header-containers">
        <div className="headerss">
          {showMenu ? (
            <CloseIcon
              onClick={() => handleShowMenu(false)}
              style={{ fontSize: 30, cursor: "pointer" }}
            />
          ) : (
            <MenuIcon
              onClick={() => {
                handleShowMenu(true);
                handleFormModal(false);
                handleItems(false);
                handleShowCart(false);
              }}
              style={{ fontSize: 30, cursor: "pointer" }}
            />
          )}
          <img src="/gabar.png" alt="Gabar" className="logo-image" />
            <div style={{position:"absolute",right:'15%',cursor:'pointer'}} onClick={()=>{
               handleShowCart(false);
               handleItems(false);
               handleFormModal(false);
               handleShowMenu(false);
              handleShowProductList(!showproducts)
              }}>
              <span style={{fontSize:14,fontWeight:"bold"}}>Product List</span>
              </div>  
          <div
            style={{
              position: "relative",
              opacity: !exploreModal ? 0 : 1,
              cursor: "pointer",
            }}
            onClick={() => {
              if (exploreModal) {
                handleShowCart(!showCart);
                handleItems(false);
                handleFormModal(false);
                handleShowMenu(false);
              }
            }}
          >
            <div className="itemCount">
              <div style={circleStyle}>{count}</div>
            </div>
            <img
              src="/Vector.png"
              style={{ height: 20, width: 20, opacity: !exploreModal ? 0 : 1 }}
            />
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
                </div>
                <div className="social-links">
                  <img
                    src="/tiktok.png"
                    alt="TikTok"
                    className="social-link-img"
                  />
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
