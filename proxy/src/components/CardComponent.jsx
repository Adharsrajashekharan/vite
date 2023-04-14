import React from "react";
import { Avatar, Card } from "antd";
import { useSelector } from "react-redux";
import store from "../store";
const CardComponent = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("i am", cartItems);
  return (
    <div>
      {cartItems.map((p) => {
        return (
          // <h1>{p.data.name}</h1>
        <div className=" justify-between">

          <Card    title={p.data.name}/>
            <Card
              cover={
                <img style={{width:"100%"}}
                  alt="example"
                  src={`https://res.cloudinary.com/swiggy/image/upload/${p.data.cloudinaryImageId}.jpg`}
                />
              }
            ></Card>
                      

         
          <Card   title={p.data.restaurantFeeDetails.amount}>
          </Card>


        </div>

        );
      })}
    </div>
  );
};

export default CardComponent;
