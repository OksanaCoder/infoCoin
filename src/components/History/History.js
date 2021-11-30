import React from 'react';
import { stories } from '@components/VideoSwiper/stories';
import { Container, Form, Row } from 'react-bootstrap';
import HistoryItem from './HistoryItem';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import '@styles/components/HomeContainer.css';

const History = () => {
  return (
    <>
      <div className="wrapper page">
        <Container>
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
        </Container>

        <PerfectScrollbar className="scrollBar">
          <Container className="flex-row-center">
            <Row>
              {stories?.map(item => (
                <HistoryItem key={item.id} item={item} />
              ))}
            </Row>
          </Container>
        </PerfectScrollbar>
      </div>
    </>
  );
};

export default History;
