import React, { Component } from 'react'
import axios from 'axios';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core';
import Header2 from './Header2';
import ecommerce from '../../src/assets/ecommerce.png';
import Slider3 from './slider3';

export default class InternetOfThings extends Component {
  constructor(){
    super();
    this.state = {
      ecommerce: []
    }
}


componentDidMount(){

axios.get(`http://localhost:7000/products/ecommerce`)
.then(res => {
  const ecommerce = res.data;
  console.log(ecommerce);
  this.setState({ ecommerce });
  
})

}
  render() {
    return (
  <div>
    <Slider3/>
      <h1 style={{textAlign: 'center'}}> Ecommerce </h1>
  
        <div className="cardAllign">
      
        {this.state.ecommerce.map((obj)=>{
          return(
        <Card style={{width: '300px', height: '200px',paddingLeft: '20px',marginLeft: '20px',marginRight:'20px',marginBottom: '20px'}}>
        <div> 
        <img src={obj.screenShot} alt="description"/>

        <p> {obj.pname} </p>
        <p> {obj.category} </p>    
        <p> {obj.demoVideoUrl} </p>   
              <p> {obj.hostUrl} </p>   
              <p> {obj.exeUrl} </p>   
              <p> {obj.cost} </p>             
            </div>
            </Card>
          )
        })}
      </div>
      </div> 
    )
  }
}
