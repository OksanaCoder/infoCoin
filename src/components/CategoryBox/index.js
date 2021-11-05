import React from "react";
import { Col } from "react-bootstrap";
import "@styles/components/CategoryBox.css";

const CategoryBox = () => {
  const categories = [
    { title: "category1" },
    { title: "category2" },
    { title: "category3" },
    { title: "category1" },
    { title: "category2" },
    { title: "category3" },
    { title: "category1" },
    { title: "category2" },
    { title: "category3" },
    { title: "category1" },
    { title: "category2" },
    { title: "category3" },
    { title: "category1" },
    { title: "category2" },
    { title: "category3" },
    { title: "category1" },
    { title: "category2" },
    { title: "category3" },
  ];

  return (
    <>
      {categories.map((category) => {
        return (
          <Col lg={3} md={4} sm={6} xs={12}  className="my-2">
            <div className="category-box">
              <h6>{category.title}</h6>
            </div>
          </Col>
        );
      })}
    </>
  );
};

export default CategoryBox;
