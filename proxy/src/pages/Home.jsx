
import React, { useEffect } from "react";
import "../styles/home.css";
import { useState } from "react";

import { PoweroffOutlined } from "@ant-design/icons";
import { Card, Skeleton } from "antd";
import { Button } from "antd";
import { Link } from "react-router-dom";
import Test from "./Test";
import useZomatoApi from "../Hooks/useZomatoApi";
import useSwiggyApi from "../Hooks/useSwiggyApi";
import OfflinePage from "../components/Offline";
import { useDispatch } from "react-redux";
import { addItem } from "../slice/cartSlice";
const Home = () => {
  let [colour, setcolour] = useState("blue");
  const ZOMATO = useZomatoApi();
  const SWIGGY = useSwiggyApi();
  const [loaded, setLoaded] = useState(false);
  const[online,setIsonline]=useState(true)

  const changeMe = () => {
    if (colour === "blue") setcolour("red");
    else setcolour("blue");
  };


 const dispatch=useDispatch()

const handleme=(api)=>{
dispatch(addItem(api))
}



useEffect(()=>{
  console.log("trtrtr",online);
const handleOnline=()=>{
  setIsonline(true)

}
const handleOffline=()=>{
  setIsonline(false)

}


  window.addEventListener("online",handleOnline)
  window.addEventListener("offline",handleOffline)

  return()=>{
    window.removeEventListener("online",handleOnline)
    window.removeEventListener("offline",handleOffline)

  }

},[])



if(online===false){
  return(
    <>
    <OfflinePage/>
    </>
  )
}else



  return (
    <>
      <div className="bg-slate-800"  style={{ backgroundColor: colour, height: "400px" }} >
        <Button
          style={{}}
          icon={<PoweroffOutlined />}
          onClick={changeMe}
        ></Button>

        <br />

        <div className="desc-image h-">
        {/* <button className='p-2 bg-fuchsia-700 after:bg-white ' onClick={handleme}>
click
  </button> */}
          {ZOMATO.map((api) => {
            return (
              <>
                <div className="desc-images">
                  <img className="me" src={api.image_url} alt="" srcset="" />
                  <span>{api.description}</span>
                  <p></p>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="headings">
        <h1 className="text-3xl font-bold m-6">Explore Our Hotels</h1>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {SWIGGY.map((api) => {
          return (
            <Card
              style={{
                width: 300,
                margin: 20,
                boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
                borderRadius: "5px",
                backgroundColor: "#fff",
              }}
              cover={
                <>
                  {/* Use the Skeleton component to render a shimmer effect while the image is loading */}
                  {!loaded && (
                    <Skeleton.Image
                      style={{ width: "300px", height: "200px" }}
                    />
                  )}

                  <img
                    src={`https://res.cloudinary.com/swiggy/image/upload/${api.data.cloudinaryImageId}.jpg`}
                    alt=""
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "5px",
                      // Hide the image until it has loaded
                      visibility: loaded ? "visible" : "hidden",
                    }}
                    // Set the state to true when the image has loaded
                    onLoad={() => setLoaded(true)}
                  />
                </>
              }
            >
              <Card.Meta
                title={
                  <Link to={`/contact/${api.data.id}`}>
                    <span style={{ textAlign: "center" }}>{api.data.name}</span>
                  </Link>
                }
                description={
                  <div className="inside-card-data">
                    <p>
                      <b>{api.data.areaName}</b>
                    </p>
                    <p>
                      <i>{api.data.costForTwo}</i>
                    </p>
                  </div>
                }
              />
              <Button className="bg-orange-300 m-2 font-light" onClick={()=>handleme(api)}> ADD TO CART</Button>
            </Card>
          );
        })}
      </div>

      <Test />
    </>
  );
};

export default Home;
