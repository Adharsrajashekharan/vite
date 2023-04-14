import axios from 'axios'
import { useState,useEffect } from 'react'
const useZomatoApi = () => {
    const [api, setapi] = useState([])
    useEffect(() => {
        async function getData(){
             const {data}= await axios.get("https://www.zomato.com/webapi/searchapi.php?city=11290")
          setapi(data.results.restaurants)
          console.log("data",data)
         }
      getData()
     }, [])

     return api
 
}

export default useZomatoApi
