import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  // Tooltip, Legend,
  ResponsiveContainer,
} from 'recharts';

import { Container, Row, Col } from 'react-bootstrap';
import wallet from '@assets/icons/wallet.svg';
import coins from '@assets/icons/coins.svg';
import '@styles/components/Wallet.css';

const data = [
  {
    name: 'Январь',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Февраль',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Март',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Апрель',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Май',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Июнь',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Июль',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Август',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Сентябрь',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Октябрь',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Ноябрь',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Декабрь',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Wallet = () => {
  const [opacity, setOpacity] = useState(false);
  const withdrawHandler = () => {
    setOpacity(true);
  };
  return (
    <>
      <Container style={{ paddingTop: '100px' }}>
        <h4>
          <img src={wallet} alt="" className="me-2" />
          Кошелек IC
        </h4>
        <Row className="flex-row-center-align text-center">
          <Col className="my-4" lg={3} md={3} sm={6} xs={6}>
            <div className="flex-col-center">
              <h5>Баланс IC</h5>
              <h5>
                5000 <img src={coins} alt="" width="30" />
              </h5>
            </div>
          </Col>
          <Col lg={3} md={3} sm={6} xs={6}>
            <button className="black-btn" onClick={withdrawHandler}>
              Вывести IC
            </button>
          </Col>
          <Col lg={3} md={3} sm={6} xs={6}>
            <div
              className={
                opacity
                  ? 'opacity-low flex-col-center'
                  : 'opacity-high flex-col-center'
              }
            >
              <h5>Доход IC</h5>
              <h5>
                5000 <img src={coins} alt="" width="30" />
              </h5>
            </div>
          </Col>
          <Col lg={3} md={3} sm={6} xs={6}>
            <div
              className={
                opacity
                  ? 'opacity-high flex-col-center'
                  : 'opacity-low flex-col-center'
              }
            >
              <h5>Вывод IC</h5>
              <h5>
                5000 <img src={coins} alt="" width="30" />
              </h5>
            </div>
          </Col>
        </Row>
      </Container>
      <ResponsiveContainer width="100%" aspect={4.0 / 1.0}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid
            vertical={false}
            strokeDasharray="10000"
            stroke="#aab8c2"
          />
          <XAxis dataKey="name" />
          <YAxis />

          {/* <Tooltip />
          <Legend /> */}
          <Line type="monotone" dataKey="pv" stroke="#FA8200" />
          <Line type="monotone" dataKey="uv" stroke="#F5B96D" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};
export default Wallet;
