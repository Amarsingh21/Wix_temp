import React from 'react';
import './CSS/product.css'
import kareena from '../Images/kareena.jfif'
import Products from '../Images/PRODUCT.webp'

function Product() {
  return (
        <>
        <div className='indexProduct'>
          <div className='indexProductItems'>
            <div className='indexProductTitle'>
              Helping Brands across Industries
            </div>
            <div className='indexProductTitle'>
              Achieve Their Goals
            </div>
            <div className='indexProductText'>
              I'm a paragraph. Click here to add your own text and edit me.
            </div>
            <div className='indexProductBtn'>
              <button>Try for Free</button>
            </div>
          </div>
        </div>

        <div className='productInfo'>
          <div className='productInfoGuide'>
            <div className='productInfoCustomizableItems'>
              <div className='productInfoCustomizable'>
                <div className='productInfoCustomizableTitle'>
                  Customizable Workspace
                </div>
                <div className='productInfoCustomizableText'>
                  <p>
                  I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                  </p>
                  <p>
                  This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide.
                  </p>
                </div>
                    <div className='iconMark'>
                        <div className='iconMarkIcon'><i class="far fa-check-circle"></i></div>
                        <div className='iconMarkIconText'>Mark Task Completed</div>
                    </div>
              </div>
              <div className='productInfoCustomizable'>
                <div className='productInfoCustomizableTitle'>
                  Real-Time Sharing
                </div>
                <div className='productInfoCustomizableText'>
                  <p>
                  I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
                  </p>
                  <p>
                  This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide.
                  </p>
                </div>
                  <div className='iconLou'>
                      <div className='iconLouIcon'>
                          <img src={kareena} />
                      </div>
                      <div className='iconLouIconText'>Lou Booked a Meething</div>
                  </div>
              </div>
            </div>
            <div className='productionInfoPicture'>
              <img src={Products} />
            </div>

            
            <div className='productInfoCustomizableItems'>
              <div className='productInfoCustomizable'>
                <div className='productInfoCustomizableTitle'>
                  Drop-in Audio Chat
                </div>
                <div className='productInfoCustomizableText'>
                  <p>
                  I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                  </p>
                  <p>
                  This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide.
                  </p>
                </div>
                    <div className='iconMarks'>
                        <div className='iconMarkIcon'><i class="fal fa-microphone"></i></div>
                        <div className='iconMarkIconText'>Start recording message</div>
                    </div>
              </div>
              <div className='productInfoCustomizable'>
                <div className='productInfoCustomizableTitle'>
                  Fits All Team Sizes
                </div>
                <div className='productInfoCustomizableText'>
                  <p>
                  I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
                  </p>
                  <p>
                  This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide.
                  </p>
                </div>
                  <div className='iconLou'>
                      <div className='iconLouIcons'>
                      <i class="far fa-user-friends"></i>
                      </div>
                      <div className='iconLouIconText'>
                        <b>Mark, Tammy & 27 others</b> joined your Board
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className='readytoJourneys'>
          <div className='readytoJourney'>
            <div className='readytoJourneyTitle'>
              Ready to Kickstart Your Journey?
            </div>
            <div className='readytoJourneyBtn'>
              <button>Try for Free</button>
            </div>
          </div>
        </div>

        </>
        );
}

export default Product;
