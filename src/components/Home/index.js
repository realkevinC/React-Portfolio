import { Link } from "react-router-dom"
import './index.scss';

const Home = () => {

    return(
        <div className='container homePage'>
            <div className='textArea'>
                <h1>Hi, <br/> I'm Kevin,<br/> a Full Stack Web Developer.  </h1>
                <Link to="/contact" className="button">Contact Me</Link>
            </div>
        </div>
    )
}

export default Home