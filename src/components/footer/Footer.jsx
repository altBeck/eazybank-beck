import './footer.css';
import logo from '../../images/logo-white.svg';

const Footer = () => {
  return (
    <section className="footer--container">
      <div className="footer--main">
        <div className="logo">
          <div className="main--logo">
            <img src={logo} alt="logo"/>
          </div>
          <div className="social--logo">
            <span className="icon logo--fb"></span>
            <span className="icon logo--yt"></span>
            <span className="icon logo--tw"></span>
            <span className="icon logo--pt"></span>
            <span className="icon logo--ig"></span>
          </div>
        </div>

        <div className="footer--links">
          <div className="footer--links-content">
            <ul>
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="footer--links-content">
            <ul>
              <li>Careers</li>
              <li>Support</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>

        <div className="footer--footnote">
          <button className="footer--button">Request Invite</button>

          <p>© Easybank. All Rights Reserved</p>
        </div>


      </div>


      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://bekanno.com">Beck Kanno</a>.
      </div>
    </section>
    
  )
}

export default Footer