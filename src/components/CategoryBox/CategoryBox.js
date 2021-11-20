import React from 'react';
import { Col } from 'react-bootstrap';
import '@styles/components/CategoryBox.css';

const CategoryBox = ({ category }) => {
  const { title, title_image } = category;
  return (
    <>
      {title_image ? (
        <Col lg={3} md={4} sm={6} xs={12} className="my-2">
          <div className="category-box-image-wrap">
            <img
              className="category-box-cover"
              src={title_image}
              alt="category cover"
            />
            <div className="category-box-image">
              <h6 className="category-name-onImage">{title}</h6>
            </div>
          </div>
        </Col>
      ) : (
        <Col lg={3} md={4} sm={6} xs={12} className="my-2">
          <div className="category-box">
            <h6 className="category-name">{title}</h6>
          </div>
        </Col>
      )}
    </>
  );
};

export default CategoryBox;
