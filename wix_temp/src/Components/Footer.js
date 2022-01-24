import React from 'react';
import './CSS/footer.css';
import Logo from '../Images/logo1.png';
import Appstore from '../Images/appStore.webp';
import Google from '../Images/google play.webp';
import {Link} from 'react-router-dom'


function Footer() {
  return (
        <div className='indexFooter'>
            <div className='indexFooterText'>
                <div className='indexFooterPrimery'>
                    <div className='indexFootrLogo'><img src={Logo} /></div>
                    <div className='indexFooterTitle'>
                        500 Terry Farancois Street,<br/>
                        San Francisoco, CA 94158
                    </div>
                    <div className='indexFooterPrimeryGroupText'>
                        <p>Home</p>
                        <p>Product</p>
                        <p>Solutions</p>
                        <p>Pricing</p>
                        <p>Resources</p>
                    </div>
                </div>

                <div className='indexFooterSecondery'>
                    <div className='indexFooterSeconderyItems'>
                        <div className='indexFooterSeconderTitle'>
                            Company
                        </div>
                        <div className='indexFooterSeconderyGroupText'>
                            <p>Our Story</p>
                            <p>Customers</p>
                            <p>Careers</p>
                        </div>
                        <div className='indexFooterSeconderyDownload'>
                            <div className='indexFooterSeconderyDownloadTitle'>
                                Download Our App
                            </div>
                            <div className='downloadPicture'>
                                <div><img src={Google} /></div>
                                <div><img src={Appstore} /></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='indexFooterThird'>
                    <div className='indexFooterThirdItems'>
                        <div className='indexFooterThirdTitle'>
                            Company
                        </div>
                        <div className='indexFooterThirdGroupText'>
                            <p>Contact Us</p>
                            <p>Start a Free Traial</p>
                            <p>Watch Demo</p>
                            <p>FAQ</p>
                        </div>
                    </div>
                    <div className='indexFooterThirdSocicalIcon'>
                        <p><i class="fab fa-facebook-f"></i></p>
                        <p><i class="fab fa-instagram"></i></p>
                        <p><i class="fab fa-twitter"></i></p>
                        <p><i class="fab fa-linkedin-in"></i></p>
                        <p><i class="fab fa-youtube"></i></p>
                    </div>
                </div>
            </div>
            <div className='messageTexts'>  
            <Link to='/'><i class="far fa-comment-dots messageText"></i>
            </Link>
            </div>
            <div className='copyright'>
                © 2023 by Unite. Proudly created with Wix.com
            </div>
        </div>
        );
}

export default Footer;
