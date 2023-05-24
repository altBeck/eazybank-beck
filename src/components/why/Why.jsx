import './why.css';
import api from '../../images/icon-api.svg';
import budget from '../../images/icon-budgeting.svg';
import onboard from '../../images/icon-onboarding.svg';
import online from '../../images/icon-online.svg';

const Why = () => {
  return (
    <section className="why--container">
      <div className="why--main">

        <div className="why--header">
          <h1>Why choose Easybank?</h1>
          <p>We leverage Open Banking to turn your bank account into your financial hub. Control 
          your finances like never before.</p>
        </div>

        <div className="why--reasons">
          <div>
            <img src={online} alt="online banking icon"/>
            <h2>Online Banking</h2>
            <p>Our modern web and mobile applications allow you to keep track of your finances 
            wherever you are in the world.
            </p>
          </div>

          <div>
            <img src={budget} alt="budget icon"/>
            <h2>Simple Budgeting</h2>
            <p>See exactly where your money goes each month. Receive notifications when you’re 
            close to hitting your limits.
            </p>
          </div>

          <div>
            <img src={onboard} alt="onboarding icon"/>
            <h2>Fast Onboarding</h2>
            <p>We don’t do branches. Open your account in minutes online and start taking control 
            of your finances right away.
            </p>
          </div>

          <div>
            <img src={api} alt="API icon"/>
            <h2>Open API</h2>
            <p>Manage your savings, investments, pension, and much more from one account. Tracking 
            your money has never been easier.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Why