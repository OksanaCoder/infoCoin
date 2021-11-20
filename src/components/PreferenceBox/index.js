import React from "react";
import { Col } from "react-bootstrap";
import "@styles/components/CategoryBox.css";

const PreferenceBox = () => {
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
          <Col lg={4} md={4} sm={12} xs={12}  className="my-2 ">
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
