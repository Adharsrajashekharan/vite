import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const Contact = () => {
    const { Meta } = Card;

    const [singlecard, setSinglecard] = useState([])
    const {id}=useParams()
    //78027
    useEffect(()=>{
      async function singleCardview(){
        const {data}=await axios.get(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=8.4320632&lng=77.0502803&restaurantId=${id}&submitAction=ENTER`)
        setSinglecard(data.data.cards)
        console.log("first",data.data.cards[2]?.groupedCard)
        // data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.name	
     

      }
      singleCardview()
    },[])
  return (
    <div>
<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center',textAlign:'center',padding:'20px' }}>
<img style={{width:"900px",height:'500px'}} src={`https://res.cloudinary.com/swiggy/image/upload/${singlecard[0]?.card?.card?.info?.cloudinaryImageId}.jpg`} alt="" srcset="" />
</div>
<div style={{textAlign:'center'}}>
<h1>{singlecard[0]?.card?.card?.info?.name}</h1>

</div>

   
   
    
 </div>
  )
}

export default Contact

