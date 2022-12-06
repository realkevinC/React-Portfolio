import './index.scss'

const Contact = () => {
    return(
    <div className='container contactPage'>
        <div className='textArea'>
            <h1>Contact Me</h1>
            <p>I am interested in working with other developers and always open to new opporunities for projects. If for any reason you need to contact me please fill out the form below. </p>
            <div className="contactForm">
            <form>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
    </div>    
    )
}




export default Contact
