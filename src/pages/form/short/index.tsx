import React from 'react';
import {
  Form,
  Input,
  Button,
  DatePicker,
  Tooltip,
  InputNumber,
  Radio,
  Card,
  message,
} from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Store } from 'antd/es/form/interface';
import Title from '@/components/Title';
import { useRequest } from 'umi';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 7 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
    md: { span: 10 },
  },
};

const submitFormLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 10, offset: 7 },
  },
};

export default () => {
  const [form] = Form.useForm();

  useRequest('/form', {
    onSuccess: data => {
      form.setFieldsValue(data);
    },
    onError: error => {
      message.error(error.message);
    },
  });

  const submit = (values: Store) => {
    console.log(values);
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ success: true });
      }, 1000);
    });
  };

  const { loading, run: handleFinish } = useRequest(submit, {
    manual: true,
    onSuccess: () => {
      message.success('保存成功');
    },
    onError: error => {
      console.error(error.message);
      message.error('保存失败');
    }
  });

  return (
    <Card title={<Title text="单列表单" />}>
      <Form form={form} onFinish={handleFinish}>
        <Form.Item
          {...formItemLayout}
          label="标题"
          name="title"
          rules={[
            {
              required: true,
            },
            {
              min: 5,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="起止日期"
          name="date"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <RangePicker
            style={{ width: '100%' }}
            placeholder={['开始日期', '结束日期']}
          />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="目标描述"
          name="goal"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <TextArea style={{ minHeight: 32 }} rows={4} />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="衡量标准"
          name="standard"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <TextArea style={{ minHeight: 32 }} rows={4} />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label={
            <span>
              客户
              <Tooltip title="目标的服务对象">
                <InfoCircleOutlined style={{ marginRight: 4 }} />
              </Tooltip>
            </span>
          }
          name="client"
        >
          <Input />
        </Form.Item>
        <Form.Item {...formItemLayout} label="邀评人" name="invites">
          <Input />
        </Form.Item>
        <Form.Item {...formItemLayout} label="权重" name="weight">
          <InputNumber min={0} max={100} />
        </Form.Item>
        <Form.Item {...formItemLayout} label="目标公开" name="publicType">
          <Radio.Group>
            <Radio value="1">公开</Radio>
            <Radio value="2">部分公开</Radio>
            <Radio value="3">不公开</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item {...submitFormLayout} style={{ marginTop: 32 }}>
          <Button type="primary" htmlType="submit" loading={loading}>
            提交
          </Button>
          <Button style={{ marginLeft: 10 }}>取消</Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
