// import { Button } from 'antd'

import React, { useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Ref() {
  
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const hash = searchParams.get("hash");
  const navigate = useNavigate();
  
  useEffect(()=>{
    
    axios.post('https://cultify-backend-production.up.railway.app/api/user/verify-email', {
      email : email,
      hash : hash,
    })
    .then((response) => {
      console.log(response)
      localStorage.setItem("jwt", response.data.token)
      navigate("/");
    })
    .catch((error) => {
        console.log(error)
    })

    
  },[]);


  // const clickHandler = ()=>{
    
    
  // }

  return (
    <h1>sashdahd</h1>
  )
}

export default Ref