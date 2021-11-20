import VideoSwiper from '@components/VideoSwiper/VideoSwiper';
import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { useLocation } from 'react-router';

const LinkBrowsingHistory = () => {
  const { state } = useLocation();
  console.log(`state`, state);
  return (
    <Container className="wrapper">
      <Container className="flex-row-column">
        <div className="category-container my-3">
          <h4 className="page-heading">История просмотров</h4>
          <h6>
            <Form.Select className="custom-select" size="sm">
              <option>Сортировать по</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </h6>
        </div>

        <VideoSwiper props={state} />
      </Container>
    </Container>
  );
};

export default LinkBrowsingHistory;
