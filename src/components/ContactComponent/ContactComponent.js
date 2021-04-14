import React, { useState, useRef, useEffect } from 'react';
import kakaoIcon from 'static/images/kakao-icon.svg';
import mobileIcon from 'static/images/mobile-icon.svg';
import mailIcon from 'static/images/mail-icon.svg';
import './ContactComponent.scss';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
// import { changeContactState, changeContactButtonDelay } from './modules/CommonValueModule';
import CustomInputComposition from 'compositions/CustomInputComposition';
import CustomTextareaComposition from 'compositions/CustomTextareaComposition';
import CustomButtonComposition from 'compositions/CustomButtonComposition';
import SplitTextComponent from 'components/SplitTextComponent';
import useInterval from 'utils/useInterval';

const ContactComponent = () => {
  // const dispatch = useDispatch();
  // const onChangeContactState = () => dispatch(changeContactState());
  // const onChangeContactButtonDelay = (value) => dispatch(changeContactButtonDelay(value));
  const [currentContactState] = useSelector(state => [state.CommonValueModule.currentContactState], shallowEqual);
  // const [currentContactButtonDelay] = useSelector(state => [state.CommonValueModule.currentContactButtonDelay], shallowEqual);
  const [contactSplitTextReady, setContactSplitTextReady] = useState(false);
  const [qnumber, setQnumber] = useState(1);
  const qnumberRef = useRef(qnumber);
  qnumberRef.current = qnumber;

  // const ContactButtonDelay = () => {
  //   console.log('ButtonDelay')
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
                <SplitTextComponent animation={'up'} scroll={'all'} index={'con1'} ready={contactSplitTextReady} depth>What  should  I  do  for  you?</SplitTextComponent>
              )}
              {currentContactState && qnumberRef.current === 2 && (
                <SplitTextComponent animation={'up'} scroll={'all'} index={'con2'} ready={contactSplitTextReady} depth>Could  you  tell  me  about  the  project?</SplitTextComponent>
              )}
              {currentContactState && qnumberRef.current === 3 && (
                <SplitTextComponent animation={'up'} scroll={'all'} index={'con3'} ready={contactSplitTextReady} depth>I  will  reply  by  email  as  soon  as  possible.</SplitTextComponent>
              )}
            </div>
          </div>

          <div className='contact-content-frame'>
            <div className='container pl-pr-none'>
              <div className='row contact-content'>
                <div className='col-12 col-s-6 col-l-4'>
                  <div className={`email-form-frame${currentContactState ? ' open' : ' close'}`}>
                    <div>
                      <CustomInputComposition type={'text'} placeholder={'Name'} label={'name'} />
                      <CustomInputComposition type={'text'} placeholder={'Phone'} label={'phone'} />
                      <CustomInputComposition type={'email'} placeholder={'Email'} label={'email'} />
                      <CustomInputComposition type={'text'} placeholder={'Title'} label={'title'} />
                    </div>
                    <CustomTextareaComposition placeholder={'Inquiry'} label={'content'} />
                    <CustomButtonComposition text={'Send'} align={'right'} />
                  </div>
                </div>

                <div className='col-12 col-s-6 col-l-4'>
                  <div className={`info-frame${currentContactState ? ' open' : ' close'}`}>
                    <div><span><img src={kakaoIcon} alt='kakao app icon' /></span> Lavignee</div>
                    <div><span><img src={mobileIcon} alt='mobile icon' /></span> +82 010.2690.9243</div>
                    <div><span><img src={mailIcon} alt='letter icon' /></span> doyoung9243@naver.com</div>
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

export default ContactComponent;
