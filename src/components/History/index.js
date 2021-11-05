import React from "react";
import { Container, Form } from "react-bootstrap";
import "@styles/components/HomeContainer.css";
import VideoSwiper from "@components/VideoSwiper";

const History = () => {
  return (
    <>
      <div className="wrapper">
        <Container>
          <div className="flex-row-center-align my-3">
            <h4>История просмотров</h4>
            <h6>
              <Form.Select size="sm">
                <option>Сортировать по</option>
              </Form.Select>
            </h6>
          </div>
        </Container>
        <Container className="flex-row-center">
          <VideoSwiper />
        </Container>
      </div>
    </>
  );
};

export default History;
