import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ph from "../images/favicon.png"
import { NavLink , useNavigate} from "react-router-dom";

const Registration = () => {
    
//     const navigate = useNavigate();
//     const [user,setUser] = useState({
//      name:"",email:"",phone:"",category:"",password:"",cpassword:"",gst:"",Pan:"",BankDetails:""
//     });
 
//  let name , value;
//  const handleInputs = (e) =>{
//    console.log(e);
//    name= e.target.name;
//    value= e.target.value;
 
//    setUser({...user,[name]:value});
 
//  }
 
//  const Postdata = async(e) => {
//       e.preventDefault();
 
//       const {name,email,phone,category,password,cpassword,gst,Pan,BankDetails } = user;
 
 
//      const res = await fetch("/register",{
//        method:"POST",
//        headers:{
//          "Content-Type":"application/json"
//        },
//        body:JSON.stringify({
//          name,email,phone,category,password,cpassword,
//        })
//      });
 
//      const data = await res.json();
//      if(data.status===422 || ! data){
//        window.alert("invalid registration");
//        console.log("invalid registration")
//      }else{
//        window.alert("invalid registration");
//        console.log("invalid registration");
//        navigate("/login");
//      }





  return (
    <>
     

     <div id="auth">

        <div className="container">
            <div className="row">
                <div className="col-md-7 col-sm-12 mx-auto">
                    <div className="card pt-4">
                        <div className="card-body">
                            <div className="text-center mb-5">
                                <img src={ph} height="48" className='mb-4' alt=""/>
                                <h3>Sign Up</h3>
                                <p>Please fill the form to register.</p>
                            </div>
                            <form action="./registration" method="post">
                                <div className="row register-form">
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label>First Name</label>


                                            <input type="text" className="form-control" name="firstname"
                                                placeholder="Enter Your Name"/>


                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label>Last Name</label>


                                            <input type="text" className="form-control" name="lastname"
                                                placeholder="Enter Your Last Name"/>


                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label>Your Email</label>


                                            <input type="email" className="form-control" name="email"
                                                placeholder="Enter Your Email"/>


                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label>Phone Number</label>


                                            <input type="telephone" maxlength="10" className="form-control"
                                                name="phonenumber" placeholder="Enter your phone number"/>


                                        </div>
                                    </div>

                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label>Category</label>
                                            <select name="category" id="" className="form-control">


                                                <option>none </option>
                                                <option>engineering </option>
                                                <option>Non-engineering </option>


                                            </select>


                                        </div>
                                    </div>

                                    

                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label>Password </label>

                                            <input type="Password" className="form-control" name="Password"
                                                placeholder="Enter your Password"/>

                                        </div>
                                    </div>


                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label>Confirm Password</label>

                                            <input type="Password" className="form-control" name="ConfirmPassword"
                                                placeholder="Enter Your confirm password"/>

                                        </div>
                                    </div>



                                </div>

                                <a href="./index">Have an account? Login</a>

                                <div className="clearfix">
                                    <button type="submit" value="Register"
                                        className="btn btnRegister btn-primary float-right">Submit</button>
                                </div>
                            </form>
                            <div className="divider">
                                <div className="divider-text">OR</div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <button className="btn btn-block mb-2 btn-primary">
                                        Phone Number</button>
                                </div>
                                <div className="col-sm-6">
                                    <button className="btn btn-block mb-2 btn-secondary">
                                        Google</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <footer className="footer2">
    <div className="footer3">


        <div className="flex_dir">

            <img src="./assets/images/favicon.png" height="48" className='mb-2 rounded' alt='' placeholder="pixel"/>

            <p>WCUBE is a fast growing, Bottom Of The Pyramid focused B2B procurement enablement platform
                for
                large size enterprises</p>


        </div>

        <div className="flex_dir">
            <h6 className="h6">
                NAVIGATION
            </h6>


            <ul>

                <li>

                    <a href="/"> home</a><br/>
                </li>
                <li>


                    <a href="/"> about</a><br/>
                </li>
                <li>

                    <a href="/"> ImExNeer</a><br/>
                </li>
                <li>

                    <a href="./registration"> REGISTER</a>
                </li>
            </ul>


        </div>

        <div className="flex_dir">


            <h6 className="h6">CONTACT US</h6>
            <p> WeWork Cyber Hub Gurgaon India
                <br/>
                Phone: <br/>
                +91 76691 04741
                <br/>
                Email: <br/>
                info@wcubeindia.com
                vendors@wcubeindia.com
            </p>

        </div>

        <div className="end_panel_content">

        </div>


    </div>
</footer>

     

    </>
  )
};

export default Registration;