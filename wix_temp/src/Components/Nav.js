import React from 'react';
import './CSS/nav.css';
import logo from '../Images/logo.png'
import {Link} from 'react-router-dom'

function Nav() {
  return (
        <div className='indexNav'>
            <div className='indexlogo'>
            <Link to ="/"><img src={logo}/></Link>
            </div>
            <div className='indexNavItems'>
                <div className='indexNavText'>
                    <p ><Link className='productTitle' to ="/product">Product</Link></p>
                    <p>Solutions</p>
                    <p>Pricing</p>
                    <p>Resources</p>
                </div>
                <div className='indexNavLog'>
                    <div className='loginIcon'></div>
                    <div className='loginText'>
                        <i class="fas fa-user-circle logIcon"></i>
                        Log In
                    </div>
                </div>
                <div className='indexNavBtn'>
                    <div className='indexBtnText'>Try for Free</div>
                </div>
            </div>

        </div>
        );
}

export default Nav;
