import React from 'react';
import { NavLink } from 'react-router-dom';
import './components.css';
import login_png from '../images/login-page.png';

import { FaFacebookSquare, FaTwitterSquare, FaGooglePlusSquare } from 'react-icons/fa';

const Login = () => {
    return (
        <div className='container'>
            <div className='row justify-content-md-center'>
                <section className='col-md-8  shadow mt-5 bg-body rounded'>
                    <div className='row p-4'>
                        <div className='col-lg-6 col-md-12'>
                            <div className='mt-3 offset-md-1'>
                                <h1 className='fw-bold'>Sign In</h1>
                            </div>
                            <form method='POST' className="pt-3 offset-md-1">
                                <label className='col-12'>
                                    <input type="text" id="fname" className='inputcss' name="fname" 
                                    Placeholder="Enter Your Email" />
                                </label>
                                <label className='col-12'>
                                    <input type="password" id="fname" className='inputcss' name="Password" 
                                    Placeholder="Password" />
                                </label>

                                <div className="pb-5 pt-4">
                                    <button type="submit" className="btn btn-primary fw-bold">Log in</button>
                                    <NavLink to="/signup" className="p-3 text-decoration-none">Create an Account</NavLink>
                                    <div className='pt-5'>
                                        <span className='p-3'>login with</span>
                                        <a href="facebook.com"><FaFacebookSquare color='blue' size={'40px'} className='m-1'/></a>
                                        <a href="twitter.com"><FaTwitterSquare color='#00acee' size={'40px'} className='m-1'/></a>
                                        <a href="google.com"><FaGooglePlusSquare color='#db3236' size={'40px'} className='m-1'/></a>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className='col-lg-6 col-md-12 text-center  d-none d-lg-block'>
                            <figure>
                                <img src={login_png} className='img-fluid' alt="login" width={'400px'}/>
                            </figure>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Login
