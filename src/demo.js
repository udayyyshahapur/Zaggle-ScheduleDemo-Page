import React, { useState } from "react";
import { Input,Button,Row,Col,Form,DatePicker, TimePicker  } from "antd";
import FloatLabel from "./floatinglabel";

import "antd/dist/antd.css";
import "./App.css";

// const { Option } = Select;


const DemoForm = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [jobTitle, setJobTitle] = useState();
  const [companyName, setCompanyName] = useState("Zaggle Prepaid ocean services pvt ltd");
  const [emailId, setEmailId] = useState();
  const [phoneNum, setPhoneNum] = useState();
  const [numExpFil, setExpenseFilterNumber] = useState();
  // const [numEmpl, setNumEmpl] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [demoDetails, setDemoDetails] = useState();
  // const [selectValue, setSelectValue] = useState();

  // const dropdown =<Icon type="caret-down" opacity={1}/>
  const ItemLayout = {
    style: {margin: 1 
    }
  };

  // const values = {'date-picker': ItemLayout['date-picker'].format('YYYY-MM-DD')};


  return (
    <div className="bgc">
    <div className="img"></div>
    <div style={{width:'100%'}}>
    <div style={{width:'30%', textAlign:'left, height:1000',float:'left', marginRight:'auto', marginLeft:'7%', marginTop:'5%'}}>
      
      <div>
        <h1  className="quotes">“</h1>
      </div>
      <div>
        <p className="Association"><b>Association with Zaggle has <br/> been a year now</b></p>
      </div>
      <div className='textInQuote'>
        <h5>Gifting & Rewards program with zaggle boosted team helping our productivity <br/>goals. Employees are happy to pick up the vouchers online or walk into any store<br/>of their choice with the Gift card. The support extended by your team need to be<br/>appreciated.</h5>
      </div>
      <div><h3><b>Keyur Shah,</b></h3><h4>Transaction Banking - Axis Bank</h4></div>
    </div>
    <div style={{width:'60%',float:'right'}}>
    <div className="horizalign">    
        <b>Schedule a Demo now</b>
    </div>
    <div className="form" >
    <Form >
        
        <Row gutter={1}>
          <Col span={3} offset={9}  >
        
      <FloatLabel  label="First Name" name="firstName" value={firstName} >
          <Form.Item {...ItemLayout}>
        <Input  size="large" value={firstName} onChange={e => setFirstName(e.target.value)} />
        </Form.Item>
      </FloatLabel>
      </Col>
        <Col span={3} >
      <FloatLabel label="Last Name" name="lastName" value={lastName}>
      <Form.Item {...ItemLayout}>
        <Input  size="large"  value={lastName} onChange={e => setLastName(e.target.value)} />
        </Form.Item>
      </FloatLabel>
      </Col>
      </Row>
      <Row >
          <Col  span={6} offset={9}  >
      <FloatLabel label="Job Title" name="jobTitle" value={jobTitle} >
      <Form.Item {...ItemLayout}>
        <Input  size="large" value={jobTitle} onChange={e => setJobTitle(e.target.value)} />
        </Form.Item>
      </FloatLabel>
      </Col>
      </Row>
      <Row >
          <Col  span={6} offset={9}  >
      <FloatLabel label="Company name" name="companyName" value={companyName} >
      <Form.Item {...ItemLayout}>
        <Input  size="large" value={companyName} onChange={e => setCompanyName(e.target.value)} />
        </Form.Item>
      </FloatLabel>
      </Col>
      </Row>
      <Row >
          <Col  span={6} offset={9} >
      <FloatLabel label="Email id" name="emailId" value={emailId} >
      <Form.Item {...ItemLayout}>
        <Input size="large" value={emailId} onChange={e => setEmailId(e.target.value)}  />
        </Form.Item>
      </FloatLabel>
      </Col>
      </Row>
      <Row >
          <Col  span={6} offset={9}>
      <FloatLabel label="Mobile Number" name="phoneNum" value={phoneNum} >
      <Form.Item {...ItemLayout}>
      <Input size="large" value={phoneNum} onChange={e => setPhoneNum(e.target.value)} />
        </Form.Item>
      </FloatLabel>
      </Col>
      </Row>
      <Row >
          <Col  span={6} offset={9}>
      <FloatLabel label="Number of expense filters per month*" name="numExpFil" value={numExpFil} >
      <Form.Item {...ItemLayout}>
      <Input size="large" value={numExpFil} onChange={e => setExpenseFilterNumber(e.target.value)} />
        </Form.Item>
      </FloatLabel>
      </Col>
      </Row>
      
      {/* <Row gutter={1} >
          <Col  span={3} offset={9}>
      <FloatLabel label="Country" name="name" value={selectValue}>
      <Form.Item {...ItemLayout}>
        <Select
          showSearch
          size="large"
          suffixIcon={dropdown}
          style={{ width: "100%" }}
          onChange={value => setSelectValue(value)}
          value={selectValue}
        >
                <Option value="AFG">Afghanistan</Option>
        </Select>
        </Form.Item>
      </FloatLabel>
      </Col>
      <Col span={3}>
      <FloatLabel label="No. of Employees" name="numEmpl" value={numEmpl}>
      <Form.Item {...ItemLayout}>
        <Input size="large" value={numEmpl} onChange={e => setNumEmpl(e.target.value)} />
        </Form.Item>
      </FloatLabel>
      </Col>
      </Row> */}

      
      <Row gutter={1} >
          <Col  span={3} offset={9}>
          <FloatLabel label="" name="date" value={date} >
            <Form.Item {...ItemLayout}>
              <DatePicker size="large" value={date} onChange={e => setDate(e.target.value)}/>
            </Form.Item>
          </FloatLabel>
      </Col>

      <Col span={3}>
      <FloatLabel label="" name="time" value={time}>
        <Form.Item {...ItemLayout}>
          <TimePicker size="large" style={{width:'100%'}} value={time} onChange={e => setTime(e.target.value)}/>
        </Form.Item>
      </FloatLabel>
      </Col>
      </Row>
      
      <Row >
          <Col  span={6} offset={9}  >
      <FloatLabel  label="What are you looking for?" name="demoDetails" value={demoDetails} >
      <Form.Item {...ItemLayout} className="demoDetails">
        <Input  size="large" value={demoDetails} onChange={e => setDemoDetails(e.target.value)} />
        </Form.Item>
      </FloatLabel>
      </Col>
      </Row>

      <Row >
          <Col  span={6} offset={9}>
          <Form.Item {...ItemLayout}>
      <Button size="large" className="submitbutton" htmlType="submit" block>
            TRY ZAGGLE FOR FREE
          </Button>
          </Form.Item>
          </Col>
      </Row>
      </Form>
    </div>
    </div>
    </div>



    </div>
  );
};


const WrappedDemoForm = Form.create({ name: 'DemoForm' })(DemoForm);

export default WrappedDemoForm;
