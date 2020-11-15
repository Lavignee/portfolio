import React, { useState } from 'react';
import CustomInputComposition from '../../compositions/CustomInputComposition';
import CustomTextareaComposition from '../../compositions/CustomTextareaComposition';
import CustomButtonComposition from '../../compositions/CustomButtonComposition';
import './ContactComponent.scss';

const ContactComponent = () => {
  const [contactToggle, setContactToggle] = useState('');
  const [contactDelay, setContactDelay] = useState('');

  const contactClick = () => {
    setContactToggle(contactToggle !== ' open' ? ' open' : ' close');
    setContactDelay(' delay')
    setTimeout(() => {
      setContactDelay('')
    }, 1000)
  }

  return (
    <>
      <div className={`contact-button${contactDelay}`} onClick={contactClick}>
        {contactToggle !== ' open' ? (
          <>Contact</>
        ) : (
            <>x</>
          )}
      </div>

      <div className={`contact-frame${contactToggle}`}>
        <div className='contact-grid-frame'>
          <div className='contact-grid'></div>
          <div className='contact-grid'></div>
          <div className='contact-grid'></div>
          <div className='contact-grid'></div>
          <div className='contact-grid'></div>
          <div className='contact-grid'></div>
          <div className='contact-grid'></div>
          <div className='contact-grid'></div>
        </div>

        <div className='contact-content-frame'>
          <div className='container'>
            <div className='row contact-content'>
              <div className='col-12 col-s-6 col-l-4'>
                <div className={`email-form-frame${contactToggle}`}>
                  <CustomInputComposition type={'text'} placeholder={'Name'} />
                  <CustomInputComposition type={'text'} placeholder={'Phone'} />
                  <CustomInputComposition type={'email'} placeholder={'Email'} />
                  <CustomInputComposition type={'text'} placeholder={'Title'} />
                  <CustomTextareaComposition placeholder={'content'} />
                  <CustomButtonComposition text={'보내기'} align={'right'} />
                </div>
              </div>

              <div className='col-12 col-s-6 col-l-4'>
                <div className={`info-frame${contactToggle}`}>
                  <span>phone: +82 010-2690-9243</span>
                  <span>kakao: Lavignee</span>
                  <span>email: doyoung9243@naver.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactComponent;
