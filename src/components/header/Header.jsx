import './header.css';
import mockup from '../../images/image-mockups.png';
import deskIntro from '../../images/bg-intro-desktop.svg';
import bgIntro from '../../images/bg-intro-mobile.svg';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <h1>Next generation digital banking</h1>
        <p>
        Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
        </p>
        <button className="headerButton">Request Invite</button>
      </div>

      <div className="bgImg">
        <img className="bgImp" src={mockup} alt="mockup" />
        <picture>
          <source className="background" media="(min-width: 768px)"
            srcSet={deskIntro}
            alt="background"
          />

          <img className="bgDesktop" src={bgIntro} alt="background"/>
        </picture>
      </div>
    
    </header>
  )
}

export default Header