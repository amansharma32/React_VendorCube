import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ph from "../images/favicon.png"
// import { Button } from 'react-bootstrap';


const LogIn = () => {
  return (
    <>
     <title>Sign in - vendor cube Admin Dashboard</title>
     
     <div id="auth">

        <div className="container">
            <div className="row">
                <div className="col-md-5 col-sm-12 mx-auto">
                    <div className="card pt-4">
                        <div className="card-body">
                            <div className="text-center mb-5">
                                <img src={ph} height="48" className='mb-4' alt=''/>
                                <h3>Sign In</h3>
                                <p>Please sign in to continue to vendor cube .</p>
                            </div>

                            <form action="./aboutUs" className="form-signin" method="post">
                                <div className="form-group position-relative has-icon-left">
                                    <label>Email</label>
                                    <div className="position-relative">


                                        <input name="email" type="text" className="form-control"
                                            placeholder="Enter your Email"/>

                                        <div className="form-control-icon">
                                            <i data-feather="user"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group position-relative has-icon-left">
                                    <div className="clearfix">
                                        <label>Password</label>
                                        <a href="auth-forgot-password.html" className='float-right'>
                                            <small>Forgot password?</small>
                                        </a>
                                    </div>
                                    <div className="position-relative">


                                        <input name="password" type="password" className="form-control"
                                            placeholder="Enter your Password"/>


                                        <div className="form-control-icon">
                                            <i data-feather="lock"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className='form-check clearfix my-4'>
                                    <div className="checkbox float-left">


                                        <input type="checkbox" id="checkbox1" className='form-check-input'/>


                                        <label for="checkbox1">Remember me</label>
                                    </div>
                                    <div className="float-right">
                                        <a href="registration">Don't Have An Account?Register</a>
                                    </div>
                                </div>
                                <div className="clearfix">
                                    <button type="submit" className="btn btn-primary float-right btn-block">Sign In</button>
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
                                    <button type="button" className="btn btn-block mb-2 btn-secondary"> Google</button>
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

            <img src="./assets/images/favicon.png" height="48" class='mb-2 rounded' alt='' placeholder="pixel"/>

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
}

export default LogIn