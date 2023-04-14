import axios from "axios"
import React from "react"
class Person extends React.Component{

constructor(props){
    super(props)

    this.state={
        value:0,
        count:0,
        api:[]
    }

   
}

async componentDidMount(){
     
        const {data}=await axios.get('https://www.zomato.com/webapi/searchapi.php?city=11290')
        console.log("i am component did mount",data.results.restaurants);
        this.setState({
            api:data.results.restaurants
        })
    }




    render(){
        return(
            <>


<div className='desc-image'>

{this.state.api.map((api)=>{
    return(
        <>
    
    <div className='desc-images' >
       <img  className='me' src={api.image_url} alt="" srcset="" /> 
       <span>
        {api.description}
    </span>
    <p></p>
    </div>
    </>

) })}


</div>

            <h1>i am a class compo{this.props.name}</h1>
            <h2>i am a state made using class component{this.state.value} </h2>
            <h3>i am count 2 {this.state.count}</h3>
            <button onClick={()=>{
                this.setState({
                    value:this.state.value+1
                })
            }} >class1</button>

            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1
                })
            }}>class2</button>
            </>
        )
    }
}


export default Person