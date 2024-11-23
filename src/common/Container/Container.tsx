import {
  Button,
  Col,
  Dropdown,
  Flex,
  Input,
  Row,
  Space,
  Typography,
} from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { useAppDispatch } from "../../app/store";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ModalTypes, showModal } from "../../app/slice/modalSlice";
import useBreakpoint from "../../hooks/useBreakpoint";
import {
  addFilter,
  addRestFilter,
  resetFilter,
} from "../../app/slice/filterSlice";
import { debounce } from "lodash";
import BreadCrumb from "../Antd/BreadCrumb";
import Iconify from "../../config/IconifyConfig";

interface Props {
  title: string;
  content: React.ReactNode;
  buttonLabel?: string;
  openModal?: ModalTypes;
  options?: {
    showButton?: boolean;
    showSearch?: boolean;
    placeholder?: string;
    showFilter?: boolean;
  };
  additionalContent?: React.ReactNode[];
  filterData?: {
    [key: string]: string | number | boolean;
  };
}

const Container: React.FC<Props> = ({
  title,
  content,
  openModal,
  buttonLabel = "Create",
  options = {},
  additionalContent,
  filterData,
}) => {
  const { lg } = useBreakpoint();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const [searchParams] = useSearchParams();

  const activeOptions = {
    showButton: options.showButton ?? true,
    showSearch: options.showSearch ?? true,
    placeholder: options.placeholder ?? "Search",
    showFilter: options.showFilter ?? true,
  };

  const items = additionalContent?.map((item, index) => ({
    key: String(index),
    label: item,
  }));

  const searchDebounce = useMemo(
    () =>
      debounce((value: string) => {
        dispatch(addFilter({ name: "KEY", value: value || undefined }));
      }, 500),
    [dispatch]
  );
  useEffect(() => {
    return () => {
      searchDebounce.cancel();
    };
  }, [searchDebounce]);

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Flex justify="space-between" align="center" wrap>
        <Typography.Text
          strong
          style={{
            fontSize: lg ? "1.5rem" : "1rem",
          }}
        >
          {title}
        </Typography.Text>
        <BreadCrumb />
      </Flex>

      <Row gutter={[10, 10]}>
        <Col span={24} lg={6}>
          {activeOptions.showSearch && (
            <Input
              allowClear
              defaultValue={searchParams.get("key") || undefined}
              maxLength={50}
              prefix={<Iconify icon="flat-color-icons:search" />}
              placeholder={activeOptions.placeholder}
              onChange={(value) => searchDebounce(value.target.value)}
            />
          )}
        </Col>
        <Col span={24} lg={18}>
          <Flex justify="flex-end" align="center" gap={8} wrap>
            {activeOptions.showButton && (
              <Button
                onClick={() => dispatch(showModal(openModal))}
                type="primary"
                icon={<Iconify icon="mdi:add-bold" />}
              >
                {buttonLabel}
              </Button>
            )}

            {activeOptions.showFilter && (
              <>
                <Dropdown.Button
                  open={open}
                  trigger={["click"]}
                  style={{ width: "max-content" }}
                  menu={{
                    items: [
                      ...(items || []),
                      {
                        type: "divider",
                      },
                      {
                        label: (
                          <Button
                            icon={<Iconify icon="mynaui:filter" />}
                            size="small"
                            block
                            type="link"
                          >
                            Filter Now
                          </Button>
                        ),
                        key: "submit",
                        onClick: () => {
                          if (filterData) {
                            Object.keys(filterData).forEach((key) => {
                              dispatch(
                                addRestFilter({
                                  label: key,
                                  value: filterData[key],
                                })
                              );
                            });
                          }
                        },
                      },
                    ],
                  }}
                  icon={
                    <Iconify
                      icon={
                        open ? "mingcute:filter-fill" : "mingcute:filter-line"
                      }
                    />
                  }
                  type="default"
                  placement="bottomRight"
                  arrow
                  onOpenChange={() => setOpen(!open)}
                >
                  <Typography.Text>Filter By</Typography.Text>
                </Dropdown.Button>
                <Button
                  title="Filter Reset"
                  onClick={() => {
                    dispatch(resetFilter());
                    navigate(window.location.pathname, {
                      replace: true,
                      state: { reset: true },
                    });
                  }}
                  icon={<Iconify icon="carbon:reset" />}
                />
              </>
            )}
          </Flex>
        </Col>
      </Row>
      <>{content}</>
    </Space>
  );
};

export default Container;
