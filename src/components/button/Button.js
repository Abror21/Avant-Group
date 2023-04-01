import { Link } from 'react-router-dom';
import { Button as Btn } from 'react-bootstrap';
import './Button.css';

const Button = ({ title, route }) => {
    return (
        <Link to={route}>
            {/* <Btn variant='danger' className='button' data-back="Back" data-front="Front">{title}</Btn> */}
            <a href="#" class="button" data-back="Click" data-front={title}></a>
        </Link>
    )
}

export default Button;
