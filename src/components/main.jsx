import React, { useEffect } from 'react'
import { useStore } from './constant'
import Dummy from './dummy/dummy'
import Modal from './ExploreModal/modal'
import Form1 from './form/form'
import Header from './Header/header'
import Products from './productlist/products'
import Cart from './shoppingCart/cart'
import Test from "./test/test"
export default function MainScreen() {
    const {showproducts,exploreModal,handleExploreModal,showCart,handleShowCart,formModal,handleFormModal,handleItems,showItems,handleShowMenu,}=useStore(state=>state)
    useEffect(()=>{
      const time=setTimeout(()=>{
        handleFormModal(true)
      },10000)
      return()=>time
    },[])
  return (
    <>
    <Header/>
    {
       showproducts && <Products/>
      }
    {!exploreModal && <Modal/>}
    {showCart && !formModal && <Cart/>}
    {/* {formModal && <Form1/>} */}
    {formModal && <Test/>}
    {showItems && <Dummy/>}
    <div className='demo-button-main' onClick={()=>{
      handleFormModal(true)
      handleShowCart(false)
      handleItems(false)
      handleShowMenu(false)
    }}>
     
    <span>Show Form</span>
    </div>
    <div className='demo-button-main-item' onClick={()=>{
      handleFormModal(false)
      handleShowCart(false)
      handleItems(true)
      handleShowMenu(false)
    }}>
    <span>Show Items</span>
    </div>
    </>
  )
}
