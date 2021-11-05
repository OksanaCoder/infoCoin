import React from "react";
import { Container, Form, Row } from "react-bootstrap";
import "@styles/components/HomeContainer.css";
import CategoryBox from "@components/CategoryBox"



const Categories = () => {
  return (
    <>
      <div className="wrapper">
      <Container>
          <div className="flex-row-center-align my-3">
            <h4>Категории</h4>
            <h6>
              <Form.Select size="sm">
                <option>Сортировать по</option>
              </Form.Select>
            </h6>
          </div>
        </Container>
        <Container className="flex-row-center">
           <Row>
              <CategoryBox />
           </Row>
        </Container>
      </div>
    </>
  );
};

export default Categories;
