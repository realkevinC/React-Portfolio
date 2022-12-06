import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import Headshot from '../../asset/images/headshot.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer, faEnvelope, faHome, faLink, faSuitcase, faUser,} from '@fortawesome/free-solid-svg-icons';



const Sidebar = () => {
    return (
    <div className='navbar'>
        <Link className='headshot' to='/'>
            <img src={Headshot} alt='Kevin' />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='grey' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='aboutLink' to='/about'>
                <FontAwesomeIcon icon={faUser} color='grey'/>
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='projectLink' to='/project'>
                <FontAwesomeIcon icon={faSuitcase} color='grey'/>
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='contactLink' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='grey'/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target = 'blank' rel='noreferrer' href='https://www.linkedin.com/in/kevin-chen-069b71181/'>
                    <FontAwesomeIcon icon={faLink} color='grey' />
                </a>
            </li>
            <li>
                <a target = 'blank' rel='noreferrer' href='https://github.com/realkevinC'>
                    <FontAwesomeIcon icon={faComputer} color='grey'/>
                </a>
            </li>
        </ul>
    </div>
    )
}

export default Sidebar





