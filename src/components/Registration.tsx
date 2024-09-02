import React from "react";
import { Form, Input, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { userService } from "../apis/userApis";
import { useNavigate } from "react-router-dom";

const RegistrationForm  = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("username", values.userName);
    formData.append("contactInfo", values.contactInfo);
    if (values.profilePicture) {
      formData.append("profilePicture", values.profilePicture);
    }
 
    try {
      console.log('form : ' , formData)
    const result = await userService.registerUser(formData);
    console.log('result: ', result);
      message.success("Registration successful!");
      navigate("/users");
    } catch (error) {
      message.error("Registration failed. Please try again.");
    }
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item
        label="Person Name"
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
            type: "email",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Username"
        name="userName"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Contact Info"
        name="contactInfo"
        rules={[{ required: true, message: "Please input your contact info!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Profile Picture"
        name="profilePicture"
        valuePropName="file"
        getValueFromEvent={(e) => e.file.originFileObj}
      >
        <Upload
          name="profilePicture"
          listType="picture"
          beforeUpload={() => false} 
        >
          <Button icon={<UploadOutlined />}>Upload Profile Picture</Button>
        </Upload>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
