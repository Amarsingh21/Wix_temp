import React from 'react';
import Group from '../Images/Group 19.webp';
import Group37 from '../Images/Group 37 Copy.webp';
import Group34 from '../Images/Group 34.webp';
import Group32 from '../Images/Group 32.webp';
import Group6 from '../Images/Group 6 Copy 2.webp';
import Brushed from '../Images/BRUSHED.webp';
import Fixeteria from '../Images/FIXTERIA.webp';
import Truvision from '../Images/TRUVISION.webp';
import Kyroinst from '../Images/KYROINST.webp';
import Novatech from '../Images/NOVATECH.webp';
import Kareena from '../Images/kareena.jfif';
import group2 from '../Images/group2.webp';
import group1 from '../Images/group1.webp';
import learn from '../Images/learn.webp';
import group3 from '../Images/group3.webp';



import './CSS/team.css';

function Team() {
  return (
      <>
    <div className='indexTeam'>
        <div className='indexcricle'></div>
        <div className='indexTeamItems'>
            <div className='indexTeamTitile'>
                Become a Better Team, Together.
            </div>
            <div className='indexTeamText'>
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
            </div>
            <div className='indexTeamPicture'>
                <img src={Group} />
            </div>
        </div>
    </div>

    <div className='simpleApproachable'>
        <div className='simpleApproachableItems'>
            <div className='simpleApproachableTitles'>
                <div className='simpleApproachableTitle'>
                    Simple & Approachable Workflow
                </div>
                <div className='simpleApproachableText'>
                    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                </div>
            </div>
        </div>
        <div className='simpleIconInfo'>
            <div className='IconInfo'>
                <img src={Group37} />
            </div>
            <div className='IconInfoGroup'>
                <img src={Group34} />
            </div>
        </div>
    </div>

    <div className='integratesEasily'>
        <div className='integratesEasilyItems'>
            <div className='integratesEasilyTitles'>
                <div className='integratesEasilyTitle'>
                    Integrates Easily with Industry-Leading Software
                </div>
                <div className='integratesEasilyText'>
                    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you. 
                </div>
            </div>
            <div className='integratesIcons'>
                <div className='primaryIcon1'>
                    <div className='integratesIcons1'><i class="fas fa-infinity"></i></div>
                    <div className='integratesIcons2'><i class="fas fa-grip-horizontal"></i></div>
                </div>
                <div className='integratesIconPrimary'>
                    <img src={Group6} />
                </div>
                <div className='primaryIcon2'>
                    <div className='integratesIcons3'><i class="fas fa-cloud"></i></div>
                    <div className='integratesIcons4'><i class="fas fa-dice-d6"></i></div>
                </div>
            </div>
        </div>
    </div>
    
    
    <div className='easyReport'>
        <div className='easyReportItems'>
            <div className='easyReportTitles'>
                <div className='easyReportTitle'>
                    Easy-to-Read Reports
                </div>
                <div className='easyReportText'>
                    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                </div>
                <div className='easyReportBtn'>
                    <button>Try for Free</button>
                </div>
            </div>
        </div>
        <div className='easyReportIconInfos'>
            <div className='easyReportIconInfo'>
                <img src={Group32} />
            </div>
        </div>
    </div>
    <div className='secTrusted'>
        <div className='secTrustedGreatest'>
            <div className='secTrustedGreatestTitles'>
                Trusted by the Greatest
            </div>
            <div className='secTrustedGreatestTitle'>
                <div className='secTrustedGreatestTitleTexts'>
                    <div className='secTrustedGreatestTitleText'><img src= {Brushed}/></div>
                    <div className='secTrustedGreatestTitleText'><img src= {Fixeteria}/></div>
                    <div className='secTrustedGreatestTitleText'><img src= {Truvision}/></div>
                    <div className='secTrustedGreatestTitleText'><img src= {Kyroinst}/></div>
                    <div className='secTrustedGreatestTitleText'><img src= {Novatech}/></div>
                </div>
            </div>
        </div>
    </div>

    <div className='hearCustomers'>
        <div className='hearCustomersItems'>
            <div className='hearCustomerTitle'>
                Hear it from Our Customers
            </div>
            <div className='hearCustomersItemsInfos'>
                <div className='hearCustomersItemsInfo'>
                    <div className='hearCustomersItemsIcon'><img src = {Kareena} /></div>
                    <div className='hearCustomerDescription'>
                        <div className='hearCustomersItemsText'>
                            “I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”
                        </div>
                        <div className='hearCustomersItemsNames'>
                            Simone, UX Designer, Brushed
                        </div>
                    </div>
                </div>
            </div>
            <div className='hearCustomerDotIcons'>
                <div className='hearCustomerDotIcon'></div>
                <div className='hearCustomerDotIcon'></div>
                <div className='hearCustomerDotIcon'></div>
            </div>
        </div>
    </div>

    <div className='makeLifEasiers'>
        <div className='makeLifEasier'>
            <div className='makeLifEasierTitle'>
                How Do We Make Your<br/> Team Life Easier?
            </div>
            <div className='makeLifEasierCards'>
                <div className='makeLifEasiercard'>
                    <div className='makeLifEasierTeam'>
                        <div className='makeLifEasierIcons'>
                            <div className='makeLifEasierlineGreen'></div>
                            <div className='makeLifEasierlinePink'></div>
                            <div className='makeLifEasierlineGreen'></div>
                        </div>
                        <div className='makeLifEasierTitles'>
                            Encourage<br/> Team <br/>Communication
                        </div>
                    </div>

                    <div className='makeLifEasierTeam'>
                        <div className='makeLifEasierIcons'>
                            <div className='makeLifEasierlineGreenTeam'>
                                <div className='makeLifEasierlinePinkTeam'></div>
                            </div>
                                                 
                        </div>
                        <div className='makeLifEasierTitles'>
                            Helps Save<br/> Time & <br/>Money
                        </div>
                    </div>

                    <div className='makeLifEasierTeam'>
                        <div className='makeLifEasierIcons'>
                            <div className='makeLifEasierlineGreenMakes'></div>
                            <div className='makeLifEasierlinePinkMakes'></div>
                        </div>
                        <div className='makeLifEasierTitles'>
                            Makes<br/> Information <br/>Accessible
                        </div>
                    </div>
                    
                    <div className='makeLifEasierTeam'>
                        <div className='makeLifEasierIcons'>
                            <div className='makeLifEasierlineGreenTeam'>
                                <div className='makeLifEasierlinePinkTeam1'></div>
                                <div className='makeLifEasierlinePinkTeams'>
                                    <div className='makeLifEasierlinePinkTeam1'></div>
                                    <div className='makeLifEasierlinePinkTeam1'></div>
                                </div>
                            </div>
                        </div>
                        <div className='makeLifEasierTitles'>
                            Keeps<br/> EveryOne in <br/>The Loop
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <div className='accessLearn'>
        <div className='accessLearnItems'>
            <div className='accessLearnTitle'>
                Access Our Learnings
            </div>
            <div className='accessGroupCards'>
                <div className='accessGroupCard'>
                    <div className='accessGroupCardIcon'><img src={group2} /></div>
                    <div className='accessGroupInfo'>
                        <div className='accessGroupCardAdmin'>Admin</div>
                        <div className='accessGroupCardDate'>Dec 13, 2021 . 1 min</div>
                        <div className='accessGroupCardText'>Introduction to Product roadmaps</div>
                    </div>
                </div>
                <div className='accessGroupCard'>
                    <div className='accessGroupCardIcon'><img src={learn} /></div>
                    <div className='accessGroupInfo'>
                        <div className='accessGroupCardAdmin'>Admin</div>
                        <div className='accessGroupCardDate'>Dec 13, 2021 . 2 min</div>
                        <div className='accessGroupCardText'>Our Official WFH guide</div>
                    </div>
                </div>
                <div className='accessGroupCard'>
                    <div className='accessGroupCardIcon'><img src={group1} /></div>
                    <div className='accessGroupInfo'>
                        <div className='accessGroupCardAdmin'>Admin</div>
                        <div className='accessGroupCardDate'>Dec 13, 2021 . 1 min</div>
                        <div className='accessGroupCardText'>How workday measures to performance</div>
                    </div>
                </div>
            </div>
                <div className='accessCardBtn'>
                    <button>See All Resources</button>
                </div>
        </div>
    </div>
    
    <div className='rightPlatfrom'>
        <div className='rightPlatfromItems'>
            <div className='rightPlatfromTitles'>
                <div className='rightPlatfromTitle'>
                    With the Right Platform,Everything Is Possible
                </div>
                <div className='accessCardBtn'>
                    <button>Try for Free</button>
                </div>
            </div>
            <div className='rightPlatfromInfo'>
                <div className='rightPlatfromPicture'><img src={group3} /></div>
                <div className='rightPlatfromTry'>
                    <div className='rightPlatfromTryTitle'>
                        Try Us Out
                    </div>
                    <div className='rightPlatfromTryText'>
                        No credit card needed
                    </div>
                    <div className='rightPlatfromTryBtn'>
                        <button>Watch Demo</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
    );
}

export default Team;

// https://www.wix.com/website-template/view/html/2904?siteId=100b6f72-68e5-4856-a5d9-2e8c6605cbb3&metaSiteId=06cfdf92-3e08-40f8-a4d3-6e04a5d45be8&originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%3Fcriteria%3Dbank%26page%3D2&tpClick=view_button