import React from 'react';
import {
  Container,
  // Form,
  Row,
} from 'react-bootstrap';
import '@styles/components/HomeContainer.css';
import PreferenceBox from '@components/PreferenceBox';

const Preferences = () => {
  return (
    <>
      {/* <div className="wrapper"> */}
      <Container className="m-mob">
        <h4>Редактирование предпочтений</h4>
      </Container>
      <Container className="flex-row-center my-3">
        <Row>
          <PreferenceBox />
        </Row>
      </Container>
      {/* </div> */}
    </>
  );
};

export default Preferences;
