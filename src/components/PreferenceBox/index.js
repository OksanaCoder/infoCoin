import React from 'react';
import { Col } from 'react-bootstrap';
import '@styles/components/CategoryBox.css';
import shortid from 'shortid';

const PreferenceBox = () => {
  const categories = [
    { title: 'category1', id: shortid.generate() },
    { title: 'category2', id: shortid.generate() },
    { title: 'category3', id: shortid.generate() },
    { title: 'category1', id: shortid.generate() },
    { title: 'category2', id: shortid.generate() },
    { title: 'category3', id: shortid.generate() },
    { title: 'category1', id: shortid.generate() },
    { title: 'category2', id: shortid.generate() },
    { title: 'category3', id: shortid.generate() },
    { title: 'category1', id: shortid.generate() },
    { title: 'category2', id: shortid.generate() },
    { title: 'category3', id: shortid.generate() },
    { title: 'category1', id: shortid.generate() },
    { title: 'category2', id: shortid.generate() },
    { title: 'category3', id: shortid.generate() },
    { title: 'category1', id: shortid.generate() },
    { title: 'category2', id: shortid.generate() },
    { title: 'category3', id: shortid.generate() },
  ];

  return (
    <>
      {categories.map(category => {
        return (
          <Col
            key={category.id}
            lg={4}
            md={4}
            sm={12}
            xs={12}
            className="my-2 "
          >
            <div className="preference-box">
              <h6>{category.title}</h6>
            </div>
          </Col>
        );
      })}
    </>
  );
};

export default PreferenceBox;
