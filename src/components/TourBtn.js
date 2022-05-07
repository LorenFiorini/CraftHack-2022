import React from 'react'
import { useNavigate } from 'react-router-dom'


const TourBtn = () => {
    const navigate = useNavigate()
    const tourButtonHandler = () => {
        navigate('./login')
    }

  return (
    <div>
        <button onClick={tourButtonHandler}>
            Check Out our Tours!
        </button>
    </div>
  )
}

export default TourBtn