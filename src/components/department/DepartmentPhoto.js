import './DepartmentPhoto.css'
import React from 'react'

const DepartmentPhoto = ({title, bg, style}) => {
  return (
    <div className='department__photo animate__animated animate__flipInX' style={{background: `url(${bg}) no-repeat center/cover`, ...style}}>
      <h4>{title}</h4>
    </div>
  )
}

export default DepartmentPhoto
