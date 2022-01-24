import React, { useState, useRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  splitTextStart,
  // changeContactState,
  // changeContactButtonDelay,
} from '../../Modules/commonValue';
import { isMobile } from 'react-device-detect';

import kakaoIcon from '../../static/images/kakao-icon.svg';
import mobileIcon from '../../static/images/mobile-icon.svg';
import mailIcon from '../../static/images/mail-icon.svg';

import './contact.scss';

import SplitText from '../splitText';
// import CustomInput from 'compositions/customInput';
// import CustomTextarea from 'compositions/customTextarea';
// import CustomButton from 'compositions/customButton';
import useInterval from '../../utils/useInterval';
import { RootState } from '../../Modules';

const Contact = ({ _onHover, _onLeave }) => {
  // redux dispatch 정의.
  const dispatch = useDispatch();
  // const onChangeContactState = () => dispatch(changeContactState());
  // const onChangeContactButtonDelay = (value) => dispatch(changeContactButtonDelay(value));
  const onScrollIntro = React.useCallback((value) => dispatch(splitTextStart(value)), [dispatch]);

  const [currentContactState] = useSelector((state: RootState) => [state.CommonValue.currentContactState], shallowEqual);
  // const [currentContactButtonDelay] = useSelector(state => [state.CommonValue.currentContactButtonDelay], shallowEqual);
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
    if (qnumberRef.current === 1) {
      setQnumber(2);
    } else if (qnumberRef.current === 2) {
      setQnumber(3);
    } else if (qnumberRef.current === 3) {
      setQnumber(1);
    }
  };

  // useEffect(() => {
  // ContactButtonDelay();
  // }, [currentContactState]);

  useInterval(
    () => {
      contactAnimation();
    },
    currentContactState ? 6000 : null
  );

  React.useEffect(() => {
    return () => {
      onScrollIntro('');
    }
  }, [currentContactState, onScrollIntro]);

  return (
    <div className='contact-area'>
      {/* <div className={`contact-button${currentContactButtonDelay ? ' delay' : ''}${currentContactState ? ' open' : ''}`} onClick={onChangeContactState}>
        {currentContactState ? (
          <>Close</>
        ) : (
          <>Contact</>
        )}
      </div> */}

      <div
        className={`contact-frame${currentContactState ? ' open' : ' close'}`}>
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
            <div
              className={'back-text'}>
              {qnumberRef.current === 1 && (
                <SplitText
                  animation={'up'}
                  scroll={'all'}
                  index={'con1'}
                >
                  What should I do for you?
                </SplitText>
              )}
              {qnumberRef.current === 2 && (
                <SplitText
                  animation={'up'}
                  scroll={'all'}
                  index={'con2'}
                >
                  Could you tell me about the project?
                </SplitText>
              )}
              {qnumberRef.current === 3 && (
                <SplitText
                  animation={'up'}
                  scroll={'all'}
                  index={'con3'}
                >
                  I will reply by email as soon as possible.
                </SplitText>
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
                  <div
                    className={`info-frame${currentContactState ? ' open' : ' close'
                      }`}>
                    <div>
                      <span>
                        <img
                          width='100%'
                          height='100%'
                          src={kakaoIcon}
                          alt='kakao app icon'
                        />
                      </span>{' '}
                      Lavignee
                    </div>
                    {isMobile ? (
                      <div
                        className='link'
                        onMouseEnter={() => _onHover(' go-cursor')}
                        onMouseLeave={() => _onLeave()}>
                        <span>
                          <img
                            width='100%'
                            height='100%'
                            src={mobileIcon}
                            alt='mobile icon'
                          />
                        </span>
                        {isMobile ? (
                          <a href='tel:010-1234-5678'>+82 010.2690.9243</a>
                        ) : (
                          ' +82 010.2690.9243'
                        )}
                      </div>
                    ) : (
                      <div>
                        <span>
                          <img
                            width='100%'
                            height='100%'
                            src={mobileIcon}
                            alt='mobile icon'
                          />
                        </span>
                        {isMobile ? (
                          <a href='tel:010-1234-5678'>+82 010.2690.9243</a>
                        ) : (
                          ' +82 010.2690.9243'
                        )}
                      </div>
                    )}

                    <div>
                      <span>
                        <img
                          width='100%'
                          height='100%'
                          src={mailIcon}
                          alt='letter icon'
                        />
                      </span>{' '}
                      doyoung9243@naver.com
                    </div>
                    <div
                      className='link'
                      onMouseEnter={() => _onHover(' go-cursor')}
                      onMouseLeave={() => _onLeave()}>
                      <span>
                        <img
                          width='100%'
                          height='100%'
                          src={mailIcon}
                          alt='github icon'
                        />
                      </span>{' '}
                      <a
                        href='https://github.com/Lavignee/portfolio'
                        target='_black'>
                        github.com/Lavignee
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Contact;
