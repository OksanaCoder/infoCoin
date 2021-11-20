import React from 'react';
import { Container, Form, Row } from 'react-bootstrap';
import '@styles/components/HomeContainer.css';
import './Categories.css';
import CategoryBox from '@components/CategoryBox/CategoryBox';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { categories } from './categories-api';

const Categories = () => {
  return (
    <>
      <div className="wrapper">
        <Container>
          <div className="category-container my-3">
            <h4 className="page-heading">Категории</h4>
            <h6>
              <Form.Select size="sm" className="custom-select">
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
              {categories.map(category => (
                <CategoryBox key={category.id} category={category} />
              ))}
            </Row>
          </Container>
        </PerfectScrollbar>
      </div>
    </>
  );
};

export default Categories;
