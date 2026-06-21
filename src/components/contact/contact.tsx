import React from 'react';
import { isMobile as isMobileRaw } from '@/utils/device';
import useMounted from '@/hooks/useMounted';

const kakaoIcon = '/images/kakao-icon.svg';
const mailIcon = '/images/mail-icon.svg';
const mobileIcon = '/images/mobile-icon.svg';

import './contact.scss';

// import CustomInput from 'compositions/customInput';
// import CustomTextarea from 'compositions/customTextarea';
// import CustomButton from 'compositions/customButton';
import useStore from '../../store/useStore';
import SplitText from '../splitText';

// Props로 받는 이벤트들에 대한 interface 정의.
interface ContactProps {
  _onHover: (hoverCursor: string, hoverText?: string | null) => void;
  _onLeave: (hoverText?: string | null) => void;
}

const Contact = ({ _onHover, _onLeave }: ContactProps) => {
  // 렌더에서만 쓰는 디바이스 분기는 하이드레이션 불일치를 막기 위해 마운트 후 값으로 게이트.
  const mounted = useMounted();
  const isMobile = mounted ? isMobileRaw : false;

  // 전역 스토어 액션.
  const onContactText = useStore((s) => s.splitTextStart);

  // 전역 스토어 구독.
  const currentContactState = useStore((s) => s.currentContactState);

  // splittext 호출 순서를 리랜더를 위해 state에 작성.
  const [qnumber, setQnumber] = React.useState(1);

  // setTime을 저장하고 이후 초기화를 위한 ref.
  const setTime = React.useRef<ReturnType<typeof setInterval>>(undefined);

  // 반복 될 호출 명령. (함수형 업데이트만 사용하므로 안정 함수)
  // 렌더에서는 qnumber state를 직접 읽는다(ref를 렌더 중 읽으면 React Compiler가 추적하지 못해 화면이 멈출 수 있음).
  const contactAnimation = React.useCallback(() => {
    setQnumber((prev) => (prev < 3 ? prev + 1 : 1));
  }, []);

  // 화면 진입 및 contact가 활성화 되어있을 시,
  React.useEffect(() => {
    if (currentContactState) {
      // splitText를 주기적으로 실행.
      setTime.current = setInterval(contactAnimation, 6000);
    }

    // 화면 벗어날 시,
    return () => {
      // 인터벌 삭제.
      clearInterval(setTime.current);
      // splitText 트리거 초기화.
      onContactText('');
    };
  }, [currentContactState, onContactText, contactAnimation]);

  return (
    <div className='contact-area'>
      <div className={`contact-frame${currentContactState ? ' open' : ' close'}`}>
        {/* 배경 그리드 영역 */}
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

        {/* 상단 splitText 영역. */}
        <div className='container'>
          <div className={`back-text${currentContactState ? ' open' : ' close'}`}>
            {qnumber === 1 && (
              <SplitText animation={'up'} scroll={'all'} index={'con1'}>
                What should I do for you?
              </SplitText>
            )}
            {qnumber === 2 && (
              <SplitText animation={'up'} scroll={'all'} index={'con2'}>
                Could you tell me about the project?
              </SplitText>
            )}
            {qnumber === 3 && (
              <SplitText animation={'up'} scroll={'all'} index={'con3'}>
                I will reply by email as soon as possible.
              </SplitText>
            )}
          </div>
        </div>

        {/* 본문 영역. */}
        <div className='contact-content-frame'>
          <div className='container pl-pr-none'>
            <div className='row contact-content'>
              <div className='col-12 col-s-6 col-l-4'>
                {/* TODO: 추후 간단한 개인 연락 폼 개발 예정. */}
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

              {/* 연락처 영역 */}
              <div className='col-12 col-s-6 col-l-4'>
                <div className={`info-frame${currentContactState ? ' open' : ' close'}`}>
                  <div>
                    <span>
                      <img width='100%' height='100%' src={kakaoIcon} alt='kakao app icon' />
                    </span>
                    Lavignee
                  </div>
                  <div className={`${isMobile ? 'link' : ''}`}>
                    <span>
                      <img width='100%' height='100%' src={mobileIcon} alt='mobile icon' />
                    </span>
                    {isMobile ? (
                      <a href='tel:010-1234-5678'>+82 010.2690.9243</a>
                    ) : (
                      ' +82 010.2690.9243'
                    )}
                  </div>

                  <div>
                    <span>
                      <img width='100%' height='100%' src={mailIcon} alt='letter icon' />
                    </span>
                    ldy9243@gmail.com
                  </div>

                  <div className='link'>
                    <span>
                      <img width='100%' height='100%' src={mailIcon} alt='' />
                    </span>
                    <a
                      href='https://github.com/Lavignee/portfolio'
                      target='_blank'
                      rel='noopener noreferrer'
                      onMouseEnter={() => _onHover(' go-cursor')}
                      onMouseLeave={() => _onLeave()}
                    >
                      github.com/Lavignee
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
