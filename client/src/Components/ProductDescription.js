import React , {Component} from 'react';
import axios from 'axios';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core'
import profile from '../../src/assets/profile.jpg';
import {Grid,Row,Col} from 'react-bootstrap';
import productdescription from '../../src/assets/productdescription.jpg';
import Header2 from './Header2';
import '../App.css';
import Slider3 from './slider3';
export default class ProductDescription extends Component {
    constructor(){
        super();
        this.state = {
            products: []
        }
    }

    componentDidMount(){
        axios.get(`http://localhost:7000/products/${this.props.match.params.myid}`)
        .then(res => {
          const products = res.data;
          console.log(products);
          this.setState({ products });
        })
    }


    getCustomize(){
      console.log("heyy");
    }


    render(){
        const {products} = this.state;
        return(
            <div>
                <Slider3/>
               <Grid>
  <Row>

    <Col xs={4} sm ={12} md={4} lg={8}>
    <Card >
      <CardActionArea>
        <CardContent>
            <div>
<img src={products.screenShot} alt="description"/>
            </div>
        </CardContent>
      </CardActionArea>
    </Card>
    </Col>
    
    
    <Col xs={4} sm ={12} md={4} lg={4}> 
    
    <Card >
      <CardActionArea>
        <CardContent >
              <div className="icons">
            
            <p> name    :   {products.pname} </p> 
            <p> category :   {products.category} </p> 
            <p> cost   :   {products.cost} </p> 
            <p> demovideo   :   {products.demoVideoUrl}</p>            <p> exeurl   :   {products.exeUrl}</p>
            
            <div className="centerCart"> 
            <br/><br/>
    
</div>
            </div>
        </CardContent>
      </CardActionArea>
      <CardActions> 
      </CardActions>
    </Card>


        
        <Card >
      <CardActionArea>
        <CardContent >
              <div className="icons">
            <h2> Seller Profile</h2>
            <p> name      :   </p> 
            <p> category  :    </p> 
            <p> cost      :    </p> 
            <p> demovideo :   </p>
            <p> exeurl    :  </p>
            
            <div className="centerCart"> 
            <br/><br/>
<Button onClick={this.getCustomize.bind(this)}> CUSTOMIZE </Button>
</div>
            </div>
        </CardContent>
      </CardActionArea>
      <CardActions> 
      </CardActions>
    </Card>
    </Col>
    </Row>
</Grid>


            </div> 
        )
    }
}

