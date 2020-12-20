import React, { useEffect } from 'react';
import CustomInputComposition from '../../compositions/CustomInputComposition';
import CustomTextareaComposition from '../../compositions/CustomTextareaComposition';
import CustomButtonComposition from '../../compositions/CustomButtonComposition';
import { useDispatch, useSelector } from 'react-redux';
import { changeContactState, changeContactDelay } from '../../Modules/CommonValueModule';
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

  useEffect(() => {
    onChangeContactDelay(true);
    setTimeout(() => {
      onChangeContactDelay(false);
    }, 1000)
  }, [currentContactState]);

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
                <div className={`email-form-frame${currentContactState ? ' open' : ' close'}`}>
                  <CustomInputComposition type={'text'} placeholder={'Name'} />
                  <CustomInputComposition type={'text'} placeholder={'Phone'} />
                  <CustomInputComposition type={'email'} placeholder={'Email'} />
                  <CustomInputComposition type={'text'} placeholder={'Title'} />
                  <CustomTextareaComposition placeholder={'content'} />
                  <CustomButtonComposition text={'보내기'} align={'right'} />
                </div>
              </div>

              <div className='col-12 col-s-6 col-l-4'>
                <div className={`info-frame${currentContactState ? ' open' : ' close'}`}>
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
