import React, { useRef, useState } from 'react';
import { Container, Row, InputGroup, FormControl } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { ReactComponent as ArrowDown } from '@assets/icons/arrow-down.svg';
import arrowLong from '@assets/icons/arrow-r-long.svg';
import '@styles/components/Security.css';
import { devices, addresses } from './device-list';

const Security = () => {
  const devicesArrow = useRef();
  const addressesArrow = useRef();
  const [isOpenDevicesList, setIsOpenDevicesList] = useState(false);
  const [isOpenAddressesList, setIsOpenAddressesList] = useState(false);

  const handlerScroll = evt => {
    const { id } = evt.target;
    id === 'devicesArrow' &&
      devicesArrow.current.id === 'devicesArrow' &&
      setIsOpenDevicesList(!isOpenDevicesList);

    id === 'addressesArrow' &&
      addressesArrow.current.id === 'addressesArrow' &&
      setIsOpenAddressesList(!isOpenAddressesList);
  };

  return (
    <>
      <Container className="m-mob">
        <div className="devices-wrapper">
          <div className="devices-list">
            <h6 className="devices-list-header">Ваши устройства</h6>
            <PerfectScrollbar className="devices-list-scroll">
              <ul
                className={`${
                  !isOpenDevicesList
                    ? 'devices-list-container'
                    : 'devices-list-container-open'
                }`}
              >
                {devices &&
                  devices.map(item => (
                    <li className="devices-list-item" key={item.id}>
                      {item.device}
                    </li>
                  ))}
              </ul>
            </PerfectScrollbar>
            <ArrowDown
              onClick={handlerScroll}
              className={`${
                !isOpenDevicesList ? 'devices-arrow' : 'devices-arrow-rotate'
              }`}
              ref={devicesArrow}
              id="devicesArrow"
            />
          </div>

          <div className="devices-list">
            <h6 className="devices-list-header">Входы с устройств</h6>
            <PerfectScrollbar className="devices-list-scroll">
              <ul
                className={`${
                  !isOpenAddressesList
                    ? 'devices-list-container'
                    : 'devices-list-container-open'
                }`}
              >
                {addresses &&
                  addresses.map(item => (
                    <li className="devices-list-item" key={item.id}>
                      {item.address}
                    </li>
                  ))}
              </ul>
            </PerfectScrollbar>
            <ArrowDown
              onClick={handlerScroll}
              className={`${
                !isOpenAddressesList ? 'devices-arrow' : 'devices-arrow-rotate'
              }`}
              ref={addressesArrow}
              id="addressesArrow"
            />
          </div>
        </div>

        <Row className="my-5">
          <h6>Двухэтапная верификация</h6>
          <p className="description">
            Двухэтапная верификация выполняется по номеру телефона
          </p>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="+380123456789"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              className="borderBlack"
            />
            <InputGroup.Text id="basic-addon2" className="btn-arrow">
              <img src={arrowLong} alt="" />
            </InputGroup.Text>
          </InputGroup>
        </Row>
      </Container>
    </>
  );
};

export default Security;
