import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeContactState, changeContactDelay } from '../../Modules/CommonValueModule';
import CustomInputComposition from '../../compositions/CustomInputComposition';
import CustomTextareaComposition from '../../compositions/CustomTextareaComposition';
import CustomButtonComposition from '../../compositions/CustomButtonComposition';
import SplitTextComponent from '../SplitTextComponent';
import useInterval from "../../utils/useInterval";
import kakaoIcon from '../../Static/images/kakao-icon.svg';
import mobileIcon from '../../Static/images/mobile-icon.svg';
import mailIcon from '../../Static/images/mail-icon.svg';
import './ContactComponent.scss';

const ContactComponent = () => {
  const dispatch = useDispatch();
  const onChangeContactState = () => dispatch(changeContactState());
  const onChangeContactDelay = (value) => dispatch(changeContactDelay(value));
  const { currentContactState } = useSelector(state => ({
    currentContactState: state.CommonValueModule.currentContactState
  }));
  const { currentContactDelay } = useSelector(state => ({
    currentContactDelay: state.CommonValueModule.currentContactDelay
  }));
  const [qnumber, setQnumber] = useState(0);
  const qnumberRef = useRef(qnumber);
  qnumberRef.current = qnumber;

  const contactButtonDelay = () => {
    onChangeContactDelay(true);
    setTimeout(() => {
      onChangeContactDelay(false);
    }, 1000)
  }

  const contactAnimation = () => {
    setQnumber(1)
    for (let i = 2; i < 4; i++) {
      setTimeout(() => {
        setQnumber(i)
      }, 7000 * (i - 1));
    }
  }

  useEffect(() => {
    contactButtonDelay();
  }, [currentContactState]);

  useEffect(() => {
    contactAnimation();
  }, []);

  useInterval(() => {
    contactAnimation();
  }, 21000);

  return (
    <>
      <div className={`contact-button${currentContactDelay ? ' delay' : ''}`} onClick={onChangeContactState}>
        {currentContactState ? (
          <>x</>
        ) : (
            <>Contact</>
          )}
      </div>

      <div className={`contact-frame${currentContactState ? ' open' : ' close'}`}>
        {/* {currentContactState && ( */}
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
              {qnumberRef.current === 1 && (
                <SplitTextComponent animation={'up'} scroll={'all'} depth>What should I do for you?</SplitTextComponent>
              )}
              {qnumberRef.current === 2 && (
                <SplitTextComponent animation={'up'} scroll={'all'} depth>Could you tell me about the project?</SplitTextComponent>
              )}
              {qnumberRef.current === 3 && (
                <SplitTextComponent animation={'up'} scroll={'all'} depth>I will reply by email as soon as possible.</SplitTextComponent>
              )}
            </div>
          </div>

          <div className='contact-content-frame'>
            <div className='container'>
              <div className='row contact-content'>
                <div className='col-12 col-s-6 col-l-4'>
                  <div className={`email-form-frame${currentContactState ? ' open' : ' close'}`}>
                    <CustomInputComposition type={'text'} placeholder={'Name'} />
                    <CustomInputComposition type={'text'} placeholder={'Phone'} />
                    <CustomInputComposition type={'email'} placeholder={'Email'} />
                    <CustomInputComposition type={'text'} placeholder={'Title'} />
                    <CustomTextareaComposition placeholder={'Content'} />
                    <CustomButtonComposition text={'보내기'} align={'right'} />
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
        // )}
      </div>
    </>
  )
}

export default ContactComponent;
