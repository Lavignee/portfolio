import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
// import { changeContactState, changeContactButtonDelay } from 'modules/CommonValue';
import { isMobile } from 'react-device-detect';

import kakaoIcon from 'static/images/kakao-icon.svg';
import mobileIcon from 'static/images/mobile-icon.svg';
import mailIcon from 'static/images/mail-icon.svg';

import './contact.scss';

import SplitText from 'components/splitText';
// import CustomInput from 'compositions/customInput';
// import CustomTextarea from 'compositions/customTextarea';
// import CustomButton from 'compositions/customButton';
import useInterval from 'utils/useInterval';

const Contact = ({ onHover, onLeave }) => {
  // const dispatch = useDispatch();
  // const onChangeContactState = () => dispatch(changeContactState());
  // const onChangeContactButtonDelay = (value) => dispatch(changeContactButtonDelay(value));
  const [currentContactState] = useSelector(state => [state.CommonValue.currentContactState], shallowEqual);
  // const [currentContactButtonDelay] = useSelector(state => [state.CommonValue.currentContactButtonDelay], shallowEqual);
  const [contactSplitTextReady, setContactSplitTextReady] = useState(false);
  const [qnumber, setQnumber] = useState(1);
  const qnumberRef = useRef(qnumber);
  qnumberRef.current = qnumber;

  // const ContactButtonDelay = () => {
  //   onChangeContactButtonDelay(true);
  //   const buttonDelayTimer = setTimeout(() => {
  //     onChangeContactButtonDelay(false);
  //   }, 1000);
  //   return () => clearTimeout(buttonDelayTimer);
  // }

  const contactAnimation = () => {
    if (currentContactState) {
      if (qnumberRef.current === 1) {
        setQnumber(2)
      } else if (qnumberRef.current === 2) {
        setQnumber(3)
      } else if (qnumberRef.current === 3) {
        setQnumber(1)
      }
    }
  }

  // useEffect(() => {
  // ContactButtonDelay();
  // }, [currentContactState]);

  useEffect(() => {
    if (currentContactState) {
      setContactSplitTextReady(true)
    }
  }, [currentContactState])

  useInterval(() => {
    contactAnimation();
  }, contactSplitTextReady ? 6000 : null);

  return (
    <div className='contact-area'>
      {/* <div className={`contact-button${currentContactButtonDelay ? ' delay' : ''}${currentContactState ? ' open' : ''}`} onClick={onChangeContactState}>
        {currentContactState ? (
          <>Close</>
        ) : (
          <>Contact</>
        )}
      </div> */}

      <div className={`contact-frame${currentContactState ? ' open' : ' close'}`}>
        <>
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

          <div className='container'>
            <div className={`back-text${currentContactState ? ' open' : ' close'}`}>
              {currentContactState && qnumberRef.current === 1 && (
                <SplitText animation={'up'} scroll={'all'} index={'con1'} ready={contactSplitTextReady} depth>What  should  I  do  for  you?</SplitText>
              )}
              {currentContactState && qnumberRef.current === 2 && (
                <SplitText animation={'up'} scroll={'all'} index={'con2'} ready={contactSplitTextReady} depth>Could  you  tell  me  about  the  project?</SplitText>
              )}
              {currentContactState && qnumberRef.current === 3 && (
                <SplitText animation={'up'} scroll={'all'} index={'con3'} ready={contactSplitTextReady} depth>I  will  reply  by  email  as  soon  as  possible.</SplitText>
              )}
            </div>
          </div>

          <div className='contact-content-frame'>
            <div className='container pl-pr-none'>
              <div className='row contact-content'>
                <div className='col-12 col-s-6 col-l-4'>
                  {/* <div className={`email-form-frame${currentContactState ? ' open' : ' close'}`}>
                    <div>
                      <CustomInput type={'text'} placeholder={'Name'} label={'name'} />
                      <CustomInput type={'text'} placeholder={'Phone'} label={'phone'} />
                      <CustomInput type={'email'} placeholder={'Email'} label={'email'} />
                      <CustomInput type={'text'} placeholder={'Title'} label={'title'} />
                    </div>
                    <CustomTextarea placeholder={'Inquiry'} label={'content'} />
                    <CustomButton text={'Send'} align={'right'} />
                  </div> */}
                </div>

                <div className='col-12 col-s-6 col-l-4'>
                  <div className={`info-frame${currentContactState ? ' open' : ' close'}`}>
                    <div><span><img width='100%' height='100%' src={kakaoIcon} alt='kakao app icon' /></span> Lavignee</div>
                    {isMobile ? (
                      <div className='link' onMouseEnter={() => onHover(' go-cursor')} onMouseLeave={() => onLeave()}><span><img width='100%' height='100%' src={mobileIcon} alt='mobile icon' /></span>{isMobile ? <a href="tel:010-1234-5678">+82 010.2690.9243</a> : ' +82 010.2690.9243'}</div>
                    ) : (
                      <div><span><img width='100%' height='100%' src={mobileIcon} alt='mobile icon' /></span>{isMobile ? <a href="tel:010-1234-5678">+82 010.2690.9243</a> : ' +82 010.2690.9243'}</div>
                    )}

                    <div><span><img width='100%' height='100%' src={mailIcon} alt='letter icon' /></span> doyoung9243@naver.com</div>
                    <div className='link' onMouseEnter={() => onHover(' go-cursor')} onMouseLeave={() => onLeave()}><span><img width='100%' height='100%' src={mailIcon} alt='github icon' /></span> <a href='https://github.com/Lavignee/portfolio' target='_black'>github.com/Lavignee</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  )
}

export default Contact;
