import { Button } from 'antd'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/headerStyles.css'
import Large from '../assets/large.png'
import { useSelector } from 'react-redux'
import store from '../store'
import { UserOutlined,ShoppingCartOutlined } from '@ant-design/icons';
import { Avatar, Badge } from 'antd';

const Header = () => {
  const cartItem=useSelector((store)=>store.cart.items)
  const [login, setlogin] = useState(false)
  return (
    <div className='header bg-gray-900  shadow-lg'>
    
    <Link style={{textDecoration:"none",color:"white"}} to={"/"}>
      <div>
       <img className='w-24'  src={Large} alt="" srcset="" />
      
        </div>
        </Link>
<Link to={"/test"}>
<div>Test lazy suspense</div>

</Link>
      <div>box 3</div>
      <div>Cart-{cartItem.length}</div>

<Link to={"/cart"}>

      <Badge count={cartItem.length ===0?"empty":cartItem.length}>
      <Avatar shape='circle' icon={<ShoppingCartOutlined />} size="large" />
    </Badge>
 
</Link>

      {login ===false?<Button className='bg-gray-50 hover:bg-red-700 active:bg-orange-600 rounded-l-2xl' onClick={()=>{
        setlogin(true)
      }}>login</Button>:<Button className='bg-gray-50  hover:bg-red-700 active:bg-orange-600  rounded-r-2xl' onClick={()=>{
        setlogin(false)
      }}>logout</Button>}
      </div>
    
  )
}

export default Header

