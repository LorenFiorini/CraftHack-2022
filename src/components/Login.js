import React from 'react'
import {useNavigate} from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate()


  const guidButtonHandler =() =>{
      navigate('/guidinfo')
    }
    const tourButtonHandler =() =>{
        navigate('/userinfo')
    }

  return (
    <div>
        <button onClick={guidButtonHandler}>Im a guid</button>
        <button onClick={tourButtonHandler}>I need a Tour</button>
    </div>
  )
}

export default Login