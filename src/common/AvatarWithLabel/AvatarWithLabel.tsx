import { Grid, Image, Space, Typography } from "antd";
import React from "react";
import { IMAGE_HOST_URL, no_image } from "../../utilities/image.collection";

interface Props {
  image?: string;
  name?: string;
}

const AvatarWithLabel: React.FC<Props> = ({ image, name }) => {
  const { lg } = Grid.useBreakpoint();

  return (
    <Space direction={lg ? "horizontal" : "vertical"}>
      <Image
        width={lg ? 30 : 20}
        height={lg ? 30 : 20}
        src={image ? IMAGE_HOST_URL.concat(image) : no_image}
        style={{ borderRadius: "50%", objectFit: "cover" }}
        alt="avatar"
      />
      <Typography.Text
        style={{
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          overflow: "hidden",
        }}
      >
        {name}
      </Typography.Text>
    </Space>
  );
};

export default AvatarWithLabel;
