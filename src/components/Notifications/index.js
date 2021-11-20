/* eslint-disable react/jsx-no-target-blank */
// import React, {useState} from "react";
import React from 'react';
import '@styles/components/UserProfile.css';
import {
  // FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@material-ui/core';

// import PrivacyPopup from "@containers/PrivacyPopup/PrivacyPopup";

const Notifications = () => {
  return (
    <React.Fragment>
      <div className="m-mob">
        <div>
          <h6>Тип Уведомлений</h6>
          <h6 className="my-4">Новые публицации</h6>
          <RadioGroup
            aria-label="report"
            defaultValue="Выкл"
            name="radio-buttons-group"
            //    value={complainValue}
            //    onChange={handleChangeReason}
          >
            <FormControlLabel
              value="complain"
              control={<Radio />}
              label="Выкл"
            />
            <FormControlLabel
              value="email"
              control={<Radio />}
              label="На почту"
            />
            <FormControlLabel
              value="phone"
              control={<Radio />}
              label="На телефон"
            />
          </RadioGroup>
          <h6 className="my-4">Рекомендации</h6>
          <RadioGroup
            aria-label="report"
            defaultValue="Выкл"
            name="radio-buttons-group"
            //    value={complainValue}
            //    onChange={handleChangeReason}
          >
            <FormControlLabel
              value="complain"
              control={<Radio />}
              label="Выкл"
            />
            <FormControlLabel
              value="email"
              control={<Radio />}
              label="На почту"
            />
            <FormControlLabel
              value="phone"
              control={<Radio />}
              label="На телефон"
            />
          </RadioGroup>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Notifications;
