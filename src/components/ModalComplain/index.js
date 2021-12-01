import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import eyeOrange from '@assets/icons/eye-orange.svg';
// import eye from '@assets/icons/eye.svg';
import {
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@material-ui/core';

const ModalComplain = ({ show, onHide }) => {
  const [modalShow, setModalShow] = React.useState(false);

  <>
    <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="text-center">
          <img src={eyeOrange} alt="" />
          <h6 className="my-2">Неприемлимый контент</h6>
        </div>
        <Form className="text-left my-4">
          <div className="mb-3 text-left">
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="gender"
                defaultValue="Пожаловаться"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Пожаловаться"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Больше не показывать"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer className="flex-row-center-align">
        <Button
          onClick={() => setModalShow(false)}
          className="btn-simple text-black"
        >
          Отменить
        </Button>
        <Button className="btn-simple text-black">Продолжить</Button>
      </Modal.Footer>
    </Modal>
  </>;
};

export default ModalComplain;
