import { Card, Col, DatePicker, Form, Row } from "antd";
import React from "react";
import Select from "../../../common/Antd/Select";

const HotelSearch: React.FC = () => {
  const [form] = Form.useForm();

  return (
    <React.Fragment>
      <div
        style={{
          minHeight: "60vh",
          position: "relative",
          backgroundImage: `url("https://images.unsplash.com/photo-1582533401893-cf3acb4680e8?q=80&w=2142&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Card
          hoverable
          style={{
            position: "absolute",
            bottom: "-2.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80%",
          }}
        >
          <Form form={form}>
            <Row gutter={[10, 10]}>
              <Col span={24} lg={6}>
                <Select
                  variant="filled"
                  style={{ width: "100%" }}
                  options={[{ value: "1", label: "One" }]}
                />
              </Col>
              <Col span={24} lg={6}>
                <DatePicker.RangePicker
                  variant="filled"
                  style={{ width: "100%" }}
                />
              </Col>
              <Col span={24} lg={6}>
                <Select
                  variant="filled"
                  style={{ width: "100%" }}
                  options={[{ value: "1", label: "One" }]}
                />
              </Col>
              <Col span={24} lg={6}>
                <Select
                  variant="filled"
                  style={{ width: "100%" }}
                  options={[{ value: "1", label: "One" }]}
                />
              </Col>
              <Col span={24} lg={6}>
                <Select
                  variant="filled"
                  style={{ width: "100%" }}
                  options={[{ value: "1", label: "One" }]}
                />
              </Col>
            </Row>
          </Form>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default HotelSearch;
