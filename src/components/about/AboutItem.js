import './AboutItem.css'

const AboutItem = ({ title, subtitle, text }) => {
  return (
    <div className='about__item'>
      <h5>{title}</h5>
      <h6>{subtitle}</h6>
      <p>{text}</p>
    </div>
  )
}

export default AboutItem
