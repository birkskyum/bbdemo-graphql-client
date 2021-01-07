
import { Form, Input,InputNumber, Button, Upload, message } from 'antd';
import {useHistory} from 'react-router-dom'
import React, { useState } from 'react'
import styled from 'styled-components'
import ImgCrop from 'antd-img-crop';

type RequiredMark = boolean | 'optional';

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`



export function AddProductForm () {

  const history = useHistory()
  const [form] = Form.useForm();

  const [fileList, setFileList] = useState([
    
  ]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  function addProduct(){
    setTimeout(()=>{
      history.push('/')
    }, 5000)
    message.info('You have requested a product to be added. Redirectin in 5 sec.')
  }


  return (
    <FormWrapper>
      
      
    <Form
      onFinish={addProduct}
      form={form}
      layout="vertical"
    >
      <h1>Add a new product</h1>
      <Form.Item
        label="Title of product"
        name="title"
        rules={[{ required: true, message: 'Please input a product title.' }]}>
        <Input placeholder="Title of product" />
      </Form.Item>
      <br />
      <Form.Item
        label="Price in USD"
        name="priceUSD"
        rules={[{ required: true, message: 'Please input a price in US Dollars.' }]}
      >
        <InputNumber placeholder="1.0" />
      </Form.Item>
      
      <br />
      <Form.Item
        label="Pictures of the product"
        name="photos"

      >
        
        <ImgCrop rotate>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
          >
            {fileList.length < 5 && '+ Upload'}
          </Upload>
        </ImgCrop>

      </Form.Item>
      <br />
      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
    </FormWrapper>
  );
}