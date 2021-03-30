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
  const [qnumber, setQnumber] = useState(1);
  const qnumberRef = useRef(qnumber);
  qnumberRef.current = qnumber;

  const contactButtonDelay = () => {
    onChangeContactDelay(true);
    setTimeout(() => {
      onChangeContactDelay(false);
    }, 1000)
  }

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

  useEffect(() => {
    contactButtonDelay();
  }, [currentContactState]);

  useInterval(() => {
    contactAnimation();
  }, currentContactState === true ? 6000 : null);

  return (
    <div className='contact-area'>
      {/* <div className={`contact-button${currentContactDelay ? ' delay' : ''}${currentContactState ? ' open' : ''}`} onClick={onChangeContactState}>
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
                <SplitTextComponent animation={'up'} scroll={'all'} index={'con1'} depth>What  should  I  do  for  you?</SplitTextComponent>
              )}
              {currentContactState && qnumberRef.current === 2 && (
                <SplitTextComponent animation={'up'} scroll={'all'} index={'con2'} depth>Could  you  tell  me  about  the  project?</SplitTextComponent>
              )}
              {currentContactState && qnumberRef.current === 3 && (
                <SplitTextComponent animation={'up'} scroll={'all'} index={'con3'} depth>I  will  reply  by  email  as  soon  as  possible.</SplitTextComponent>
              )}
            </div>
          </div>

          <div className='contact-content-frame'>
            <div className='container pl-pr-none'>
              <div className='row contact-content'>
                <div className='col-12 col-s-6 col-l-4'>
                  <div className={`email-form-frame${currentContactState ? ' open' : ' close'}`}>
                    <div>
                      <CustomInputComposition type={'text'} placeholder={'Name'} />
                      <CustomInputComposition type={'text'} placeholder={'Phone'} />
                      <CustomInputComposition type={'email'} placeholder={'Email'} />
                      <CustomInputComposition type={'text'} placeholder={'Title'} />
                    </div>
                    <CustomTextareaComposition placeholder={'Inquiry'} />
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
