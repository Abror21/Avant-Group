import './Card.css'

const Card = ({icon, text}) => {
  return (
    <div className='card animate__animated animate__zoomIn'>
      <img src={icon} alt="icon" />
      <p>{text}</p>
    </div>
  )
}

export default Card
