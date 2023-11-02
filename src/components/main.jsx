import React, { useEffect } from 'react'
import { useStore } from './constant'
import Dummy from './dummy/dummy'
import Modal from './ExploreModal/modal'
import Form1 from './form/form'
import Header from './Header/header'
import Cart from './shoppingCart/cart'

export default function MainScreen() {
    const {exploreModal,handleExploreModal,showCart,handleShowCart,formModal,handleFormModal,handleItems,showItems}=useStore(state=>state)
  return (
    <>
    <Header/>
    {!exploreModal && <Modal/>}
    {showCart && !formModal && <Cart/>}
    {formModal && <Form1/>}
    {showItems && <Dummy/>}
    <div className='demo-button-main' onClick={()=>{
      handleFormModal(true)
      handleShowCart(false)
      handleItems(false)
    }}>
    <span>Show Form</span>
    </div>
    <div className='demo-button-main-item' onClick={()=>{
      handleFormModal(false)
      handleShowCart(false)
      handleItems(true)
    }}>
    <span>Show Items</span>
    </div>
    </>
  )
}
