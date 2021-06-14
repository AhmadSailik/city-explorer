import React from "react";
import axios from "axios";


class App extends React.Component{

constructor(props){
  super(props)
  this.state={
    locationResult:'',
    errloc:'',
    Map :false,
   
  }
}



  generatLocation=async (event)=>{
    event.preventDefault();
    let key=process.env.REACT_APP_APIofLocation;
    let location= event.target.addlocation.value;
    // console.log(location);
    let sharchLoc=`https://us1.locationiq.com/v1/search.php?key=${key}&q=${location}&format=json`

    try{
    let result =await axios.get(sharchLoc);
    // console.log(result.data[0]);
    
    this.setState({
      locationResult:result.data[0],
      Map :true
    })
   }
   catch{
    this.setState({
      errloc:'Try Again',
      
    })
   }
  }

  render(){
    let keys=process.env.REACT_APP_APIofLocation;
    return(
    
      <div>
        
        <h1>react axios</h1>
        <form onSubmit={this.generatLocation}>
          <input type='text'  placeholder="location" name='addlocation'/>
          <button >submitit</button>
        </form>
        <p>{this.state.locationResult.display_name}</p>
        <p>{this.state.locationResult.lon}</p>
        <p>{this.state.locationResult.lat}</p>
        <p>{this.state.errloc}</p>
        {this.state.Map &&<img src={`https://maps.locationiq.com/v3/staticmap?key=${keys}&center=${this.state.locationResult.lat},${this.state.locationResult.lon}&size=400x400`} alt='map'/>}

        
</div>
)
}
}
export default App;

     
