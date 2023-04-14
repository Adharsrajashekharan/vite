import { useState,useEffect } from 'react'
import axios from 'axios'
import { SWIGGY_API } from '../Constants'
const useSwiggyApi = () => {
    const [first, setfirst] = useState([])

    useEffect(() => {
        async function getData2(){
             const {data}=  await axios.get(SWIGGY_API)
        console.log("yolo",data?.data?.success?.cards[0]?.favourite?.cards);
        setfirst (data?.data?.success?.cards[0]?.favourite?.cards)

    }
      getData2()
     }, [])

     return first
}

export default useSwiggyApi
