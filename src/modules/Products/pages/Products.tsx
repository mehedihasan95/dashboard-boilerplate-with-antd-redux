import React from "react";
import Container from "../../../common/Container/Container";
import Select from "../../../common/Antd/Select";

const Products: React.FC = () => {
  return (
    <React.Fragment>
      <Container
        options={{
          showButton: false,
        }}
        content={<></>}
        title="Product List"
        additionalContent={[
          <Select options={[{ label: "test", value: "test" }]} />,
        ]}
      />
    </React.Fragment>
  );
};

export default Products;
