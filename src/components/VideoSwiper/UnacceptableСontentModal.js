import React, { useState } from 'react';
import { ReactComponent as EyeOrange } from '@assets/icons/eye-orange.svg';
import './UnacceptableСontentModal.css';
import { reasons } from './ReasonsUnacceptableСontent';
import Portal from '../Portal/Portal';

const UnacceptableСontentModal = ({ videoId, handlerToggleModal }) => {
  const [reportValue, setReportValue] = useState('complain');
  const [continueReport, setContinueReport] = useState(false);
  const [complainValue, setComplainValue] = useState('reason1');
  // const [showComplain, setShowComplain] = useState(false);

  const handleChangeReport = evt => {
    setReportValue(evt.target.value);
  };

  const handlerContinue = evt => {
    evt.preventDefault();

    setContinueReport(true);
  };
  const handleChangeReason = evt => {
    setComplainValue(evt.target.value);
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    setContinueReport(null);
    // setShowComplain(true);
    console.log(`data on submit`, { videoId, reportValue, complainValue });
    // if (showComplain === true) {
    //   //API call
    //   setShowComplain(null);
    // } else if (showComplain === false) {
    //   if (reportValue === 'complain') {
    //     setShowComplain(true);
    //   } else {
    //     // API CALL
    //   }
    // } else if (showComplain === null) {
    //   setShowComplain(false);
    //   setReportValue('complain');
    //   setComplainValue('reason1');
    // }
  };

  return (
    <Portal key={`${videoId + 1}`}>
      <div className="createProd_wrapper">
        <div className="createProd_title_wrap">
          <EyeOrange />
          <h6 className="createProd_title">
            {continueReport !== null ? 'Неприемлимый контент' : 'Спасибо!'}
          </h6>
        </div>
        <div className="createProd_content">
          <div>
            <form action="" method="post">
              {continueReport === false && (
                <>
                  <ul onChange={handleChangeReport}>
                    <li key="complain">
                      <input
                        type="radio"
                        name="radio-buttons-group"
                        value={'complain'}
                        id="complain"
                        defaultChecked
                      />
                      <label htmlFor="complain">Пожаловаться</label>
                    </li>
                    <li key="showOff">
                      <input
                        type="radio"
                        name="radio-buttons-group"
                        value={'showOff'}
                        id="showOff"
                      />
                    </li>
                    <label htmlFor="showOff">Больше не показывать</label>
                  </ul>
                  <ul>
                    <li key="cancel-button" onClick={handlerToggleModal}>
                      <button>Отменить</button>
                    </li>
                    <li key="continue-button" onClick={handlerContinue}>
                      <button>Продолжить</button>
                    </li>
                  </ul>
                </>
              )}
              {continueReport && (
                <>
                  <ul onChange={handleChangeReason}>
                    {reasons &&
                      reasons.map(reason => (
                        <>
                          <li key={reason.id}>
                            <input
                              type="radio"
                              value={reason.reason}
                              name="reason-buttons"
                              id={reason.reason}
                            />
                            <label htmlFor={reason.reason}>
                              {reason.reason}
                            </label>
                          </li>
                        </>
                      ))}
                  </ul>
                  <li key="cancel-button" onClick={handlerToggleModal}>
                    <button>Отменить</button>
                  </li>
                  <li key="send-button" onClick={handleSubmit}>
                    <button>Отправить</button>
                  </li>
                </>
              )}
              {continueReport === null && (
                <>
                  <p>Вы помогаете нам сделать Infocoin лучше</p>
                  <button onClick={handlerToggleModal}>
                    Вернутся на главную
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default UnacceptableСontentModal;
