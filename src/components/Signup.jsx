import { NavLink } from 'react-router-dom';
import './components.css';
import registration from '../images/registration.png';

const Signup = () => {
    return (
        <div className='container'>
            <div className='row justify-content-md-center'>
                <section className='col-md-8  shadow mt-5 bg-body rounded'>
                    <div className='row p-4'>
                        <div className='col-lg-6 col-md-12'>
                            <div className='mt-3 offset-md-1'>
                                <h1 className='fw-bold'>Sign Up</h1>
                            </div>
                            <form method='POST' className="pt-3 offset-md-1">
                                <label className='col-12' >
                                    <input type="text" id="name" className='inputcss' name="name" 
                                        placeholder="Enter Your Name" autoComplete='off'/>
                                </label>
                                <label className='col-12' >
                                    <input type="email" id="email" className='inputcss' name="email" 
                                        placeholder="Enter Your Email" autoComplete='off'/>
                                </label>
                                <label className='col-12' >
                                    <input type="number" id="phone" className='inputcss' name="phone" 
                                        placeholder="Mobile Number" autoComplete='off'/>
                                </label>
                                <label className='col-12' >
                                    <input type="text" id="work" className='inputcss' name="work" 
                                        placeholder="Your Profession" autoComplete='off'/>
                                </label>
                                <label className='col-12' >
                                    <input type="password" id="password" className='inputcss' name="password" 
                                        placeholder="Password" autoComplete='off'/>
                                </label>
                                <label className='col-12' >
                                    <input type="password" id="cpassword" className='inputcss' name="cpassword" 
                                        placeholder="Confirm Your Password" autoComplete='off'/>
                                </label>
                                
                                <div className="pb-5 pt-4">
                                    <input type="submit" name='signup' id='signup' className="btn btn-primary fw-bold" />
                                    <NavLink to="/login" className="p-4 text-decoration-none">I'm already register</NavLink>
                                </div>
                            </form>
                        </div>

                        <div className='col-md-6 align-self-center'>
                            <img src={registration} className='img-fluid ' alt="logo" width={'800px'}/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        
        
    );
};

export default Signup
