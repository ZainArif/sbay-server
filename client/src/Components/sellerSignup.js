import React, {Component} from 'react';
import {Form,FormControl,FormGroup,ControlLabel,Grid,Row,Col,Button} from 'react-bootstrap';
import Card from '@material-ui/core/Card';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Header from './Header';
import Slider3 from './slider3';
import auth from "./Auth";

class sellerSignup extends Component {
constructor(props){
    super(props);

    this.state = {
        users: [],
        password: '',
        email: '',
        name: '',
        contact: '',
        address: '',
        image: ''
    }
    // this.gotoLogin = this.gotoLogin.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getName = this.getName.bind(this);
    this.getPassword = this.getPassword.bind(this);
    this.getContact = this.getContact.bind(this);
    this.getAddress = this.getAddress.bind(this);
    this.Postdata = this.Postdata.bind(this);

}

componentWillMount() {
    axios.get('http://localhost:7000/sellers/getsellers')
      .then(res => {
        const users = res.data;
        console.log("users are : ",users)
        this.setState({ users });
      })
  }

  Postdata() {

    let userObject = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      contact: this.state.contact,
      address: this.state.address,
      image: this.state.image
    }

    axios.post('http://localhost:7000/sellers/postseller', userObject)
      .then(res => {
        console.log(res.data);
      });

      if(this.state.name === "" && this.state.email === "" && this.state.contact === "" && this.state.address === "" && this.state.password === "" ){
          alert('fields missing')
      }
      else{
      // this.props.history.push('/sellerLogin');
   
        auth.login(() => {
          this.props.history.push("/sellerLogin");
        });
    }
      console.log(userObject);
  }


    getEmail(e){
        this.setState({ email: e.target.value})
    }

    getName(e){
        this.setState({ name: e.target.value})
    }

    getContact(e){
        this.setState({ contact: e.target.value})
    }

     getAddress(e){
        this.setState({ address: e.target.value})
    }
     
    getPassword(e){
    this.setState({ password: e.target.value})
    }


    render() {
        console.log(this.state.users)
        return (
            <div >
          {  /*<Slider3/>*/}
            
                {/* <h1> Seller Registration Form </h1> <hr/> */}
                <div class="SignUpParent ">
                <div class="login-logo">
                <i class="fas fa-globe"></i>
                <p>sBay</p>
            </div>
            <section class="SignUpOne">
            <h1>Welcome To <span class="SignUpFont">S</span>bay</h1>
          <p>fill out the form to get the started</p>
          </section>
                <form  method="post">
                <section class="SignUpTwo">
                <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1"><i class="far fa-user"></i></span>
                </div>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"  onChange={this.getName}/>
             </div>

             <div class="input-group mb-3">
             <div class="input-group-prepend">
               <span class="input-group-text" id="basic-addon2"><i class="far fa-envelope"></i></span>
             </div>
             <input type="email" class="form-control" placeholder="email" aria-label="email" aria-describedby="basic-addon2" onChange={this.getEmail}/>
           </div>
           <div class="input-group mb-3">
           <div class="input-group-prepend">
             <span class="input-group-text" id="basic-addon3"><i class="fas fa-lock"></i></span>
           </div>
           <input type="password" class="form-control" placeholder="password" aria-label="password" aria-describedby="basic-addon3"  onChange={this.getPassword}/>
         </div>
         <div class="input-group mb-3">
           <div class="input-group-prepend">
             <span class="input-group-text" id="basic-addon4"><i class="far fa-caret-square-up"></i></span>
           </div>
           <input type="number" class="form-control" placeholder="contact" aria-label="contact" aria-describedby="basic-addon4" onChange={this.getContact}/>
         </div>
         <div class="input-group mb-3">
           <div class="input-group-prepend">
             <span class="input-group-text" id="basic-addon5"><i class="far fa-address-book"></i></span>
           </div>
           <input type="text" class="form-control" placeholder="address" aria-label="address" aria-describedby="basic-addon5" onChange={this.getAddress}/>
         </div>
  
  </section>
</form>
<section class="SignUpThree">
              <button onClick={this.Postdata} type="button" class="btn btn-primary btn-lg btn-block">Signup</button>
             
              <Link to="/sellerLogin"> <p class="secondpara">already have an account <span>login?</span> here</p>  </Link>
            
             </section>
</div>

        
            </div>
        );
    }
}

export default sellerSignup;