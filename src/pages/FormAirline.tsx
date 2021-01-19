import { Form, Input, Button, DatePicker, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import React, { Component } from "react";
import TitlePage from "../components/TitlePage";

function getBase64(file:any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
export class FormAirline extends Component {
  render() {
    const formItemLayout = {
        labelCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 8,
          },
        },
        wrapperCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 16,
          },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
    return (
      <div className="wrap-form">
        <TitlePage titlePage="Create new Airline"></TitlePage>
        <Form
        {...formItemLayout}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
        >
          <Form.Item label="Name" name="Name" rules={[{
              required:true,
              message: 'Please input your name!',
          }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Country" name="country"
            rules={[
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
          >
            <Input />
          </Form.Item>
          
          <Form.Item label="Logo Image">
            <Upload>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="Slogan" name="slogan"
            rules={[
                {
                  required: true,
                  message: 'Please input your slogan!',
                },
              ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Head Quaters" name="head_quaters"
            rules={[
                {
                  required: true,
                  message: 'Please input your head quaters!',
                },
              ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Website" name="website"
            rules={[
                {
                  type: 'url',
                  message: 'The input is not valid Website!',
                },
                {
                  required: true,
                  message: 'Please input website!',
                },
              ]}
          >
            <Input  addonBefore="http://" defaultValue="website" />
          </Form.Item>
          <Form.Item label="DatePicker">
            <DatePicker />
          </Form.Item>
          <Form.Item  {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default FormAirline;
