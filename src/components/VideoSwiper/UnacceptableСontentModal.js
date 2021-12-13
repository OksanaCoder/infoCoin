import React, { useState } from 'react';
import { ReactComponent as EyeOrange } from '@assets/icons/eye-orange.svg';
import './UnacceptableСontentModal.css';
import { reasons } from './ReasonsUnacceptableСontent';
import Portal from '../Portal/Portal';

const UnacceptableСontentModal = ({ videoId, handlerToggleModal }) => {
  const [reportValue, setReportValue] = useState('complain');
  const [continueReport, setContinueReport] = useState(false);
  const [complainValue, setComplainValue] = useState('reason1');

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
    console.log(`modal window data on submit`, {
      videoId,
      reportValue,
      complainValue,
    });
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
      <div className="unwanted_content_wrapper">
        <div className="unwanted_content_title_wrap">
          <EyeOrange />
          <h6 className="unwanted_content_title">
            {continueReport !== null ? 'Неприемлимый контент' : 'Спасибо!'}
          </h6>
        </div>
        <div className="unwanted_content_content">
          <div>
            <form action="" method="post" className="unwanted_content_form">
              {continueReport === false && (
                <>
                  <ul className="unwanted_content_first_step_list">
                    <li
                      className="unwanted_content_first_step_item"
                      key="complain"
                    >
                      <input
                        onChange={handleChangeReport}
                        className="unwanted_content_first_step_input"
                        type="radio"
                        name="radio-buttons-group"
                        value={'complain'}
                        id="complain"
                        defaultChecked
                      />
                      <label
                        className="unwanted_content_first_step_label"
                        htmlFor="complain"
                      >
                        Пожаловаться
                      </label>
                    </li>
                    <li
                      className="unwanted_content_first_step_item"
                      key="showOff"
                    >
                      <input
                        onChange={handleChangeReport}
                        className="unwanted_content_first_step_input"
                        type="radio"
                        name="radio-buttons-group"
                        value={'showOff'}
                        id="showOff"
                      />
                      <label
                        className="unwanted_content_first_step_label"
                        htmlFor="showOff"
                      >
                        Больше не показывать
                      </label>
                    </li>
                  </ul>
                  <ul className="unwanted_content_buttons">
                    <li
                      className="unwanted_content_buttons_item"
                      key="cancel-button"
                      onClick={handlerToggleModal}
                    >
                      <button className="unwanted_content_button">
                        Отменить
                      </button>
                    </li>
                    <li
                      className="unwanted_content_buttons_item"
                      key="continue-button"
                      onClick={handlerContinue}
                    >
                      <button className="unwanted_content_button">
                        Продолжить
                      </button>
                    </li>
                  </ul>
                </>
              )}
              {continueReport && (
                <>
                  <ul className="unwanted_content_second_step_list">
                    {reasons &&
                      reasons.map(reason => (
                        <li
                          className="unwanted_content_second_step_item"
                          key={reason.id}
                          onChange={handleChangeReason}
                        >
                          <input
                            className="unwanted_content_second_step_input"
                            type="radio"
                            value={reason.reason}
                            name="reason-buttons"
                            id={reason.reason}
                          />
                          <label
                            className="unwanted_content_second_step_label"
                            htmlFor={reason.reason}
                          >
                            {reason.reason}
                          </label>
                        </li>
                      ))}
                  </ul>
                  <ul className="unwanted_content_buttons">
                    <li
                      className="unwanted_content_buttons_item"
                      key="cancel-button"
                      onClick={handlerToggleModal}
                    >
                      <button className="unwanted_content_button">
                        Отменить
                      </button>
                    </li>
                    <li
                      className="unwanted_content_buttons_item"
                      key="send-button"
                      onClick={handleSubmit}
                    >
                      <button className="unwanted_content_button">
                        Отправить
                      </button>
                    </li>
                  </ul>
                </>
              )}
              {continueReport === null && (
                <>
                  <p className="unwanted_content_tnx">
                    Вы помогаете нам сделать Infocoin лучше
                  </p>
                  <button
                    className="unwanted_content_button"
                    onClick={handlerToggleModal}
                  >
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
