import React, {useState, useEffect} from "react";
import logo from "../img/logo.jpg";
import "./CultSelection.css";
import { Checkbox, Col, Row } from 'antd';
import axios from 'axios';
function CultSelection() {
  
  const [selectedCults, setSelectedCults] = useState([]);
  const [cults, setCults] = useState();

  useEffect(()=>{
    // axios.get('https://cultify-backend-production.up.railway.app/api/cult')
    axios.get('https://cultify-backend-production.up.railway.app/api/cult')
    .then((response) => {
      console.log(response.data);
      setCults(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
  }, [])

  // const optionArr = [];
  // const optionGenerator = ()=>{
  //   response?.data?.forEach((e)=>{
  //     optionArr.push({label : e.name, value : e._id})
  //   })
  // }

  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };

  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ];


  return (
    <div className="cultSelection">
      <div className="heading">
        <img className="cultifyLogo" src={logo} alt="logo" />
        <h1>Cultify </h1>
      </div>
      <p className="detail">Choose atleast 2 cults to continue</p>
      <div className="cults">

      <Checkbox.Group style={{ width: '100%', marginLeft : "40px" }} onChange={onChange}>
    <Row>
      <Col span={8} style = {{marginBottom : "10px"}}>
        <Checkbox value="A">Maths</Checkbox>
      </Col>
      <Col span={8} style = {{marginBottom : "10px"}}>
        <Checkbox value="B">Aptitude</Checkbox>
      </Col>
      <Col span={8} style = {{marginBottom : "10px"}}>
        <Checkbox value="C">Physics</Checkbox>
      </Col>
      <Col span={8} style = {{marginBottom : "10px"}}>
        <Checkbox value="D">Chemistry</Checkbox>
      </Col>
      <Col span={8} style = {{marginBottom : "10px"}}>
        <Checkbox value="E">Biology</Checkbox>
      </Col>
      <Col span={8} style = {{marginBottom : "10px"}}>
        <Checkbox value="F">DSA</Checkbox>
      </Col>
      <Col span={8} style = {{marginBottom : "10px"}}>
        <Checkbox value="E">Dev</Checkbox>
      </Col>
      <Col span={8} style = {{marginBottom : "10px"}}>
        <Checkbox value="E">Fullstack</Checkbox>
      </Col>
      <Col span={8} style = {{marginBottom : "10px"}}>
        <Checkbox value="E">AIML</Checkbox>
      </Col>
    </Row>
  </Checkbox.Group>
        
       
      </div>
      <button className="cultSelection-btn" >
        Continue
      </button>
    </div>
  );
}

export default CultSelection;
