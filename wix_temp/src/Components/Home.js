import React from 'react';
import './CSS/home.css';
import kareena from '../Images/kareena.jfif';
function Home() {
  return (
        <div className='indexHome'>
            <div className='indexHomeItems'>
                <div className='indexHomeInfo'>
                    <div className='indexHomeInfoTitles'>
                        <div className='indexHomeInfoTitle'>
                            All Your Team Need in Once Great PlactForm
                        </div>
                        <div className='indexHomeInfoText'>
                            Follow your team’s plans, track work progress, and discuss work all in one place. Let us manage your work flawlessly and be on top of everything your team is up to. 
                        </div>
                        <div className='indexHomeInfoBtn'>
                            <div className='indexHomeInfoBtnDemo'>
                                <button>Watch Demo</button>
                            </div>
                            <div className='indexHomeInfoBtnfree'>
                                <button>Try for Free</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='indexHomeIcon'>
                    <img src='https://static.wixstatic.com/media/c837a6_cd289b87384f41eb9da95eff6e2cd6e8~mv2.jpg/v1/fill/w_338,h_405,al_c,q_80,usm_0.66_1.00_0.01/c837a6_cd289b87384f41eb9da95eff6e2cd6e8~mv2.webp' />
                    <div className='indexHomeIconTitle'>
                        <div className='iconMark'>
                            <div className='iconMarkIcon'><i class="far fa-check-circle"></i></div>
                            <div className='iconMarkIconText'>Mark Task Completed</div>
                        </div>
                        <div className='iconLou'>
                            <div className='iconLouIcon'>
                                <img src={kareena} />
                            </div>
                            <div className='iconLouIconText'>Lou Booked a Meething</div>
                        </div>
                        <div className='iconFollows'>
                            <div className='iconFollowIcon'><i class="fas fa-toggle-on"></i></div>
                            <div className='iconFollowIconText'>Follow this Project</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='indexImages'>
                <div className='imageBottom'>
                    <img src='https://static.wixstatic.com/media/84770f_4753af9912144e469acb7dac3bdbba0e~mv2.png/v1/fill/w_242,h_164,al_c,q_85,usm_0.66_1.00_0.01/back2%20-%20top%20-%20UPDATE.webp'/>
                </div>
                <div className='imageTop'>
                    <img src='https://static.wixstatic.com/media/c837a6_ee52c320bae548ea9f1f3730d7f6ff39~mv2.png/v1/crop/x_0,y_0,w_486,h_330/fill/w_242,h_164,al_c,q_85,usm_0.66_1.00_0.01/Group%2028.webp'/>
                </div>
                <div className='imageBottoms'>
                    <img src='https://static.wixstatic.com/media/c837a6_fbd50d9a9dac48068f4c34b5934d6404~mv2.png/v1/fill/w_242,h_164,al_c,q_85,usm_0.66_1.00_0.01/back1%20-%20buttom.webp'/>
                </div>
            </div>
            
           
        </div>
        );
}

export default Home;
