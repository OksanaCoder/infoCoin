import React from 'react';
import { useLocation } from 'react-router';
import { Container, Form } from 'react-bootstrap';
import { VideoSwiper } from '@components/VideoSwiper';

const LinkBrowsingHistory = () => {
  const { state } = useLocation();

  return (
    <Container className="wrapper page">
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
