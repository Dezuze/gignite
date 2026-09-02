import './Registration.css';

const Registration = () => {
  return (
    <section id="registration" className="section-container registration-section">
      <div className="registration-content">
        <h2 className="section-title">Registration</h2>
        <p className="section-subtitle">Join the ultimate coding challenge</p>
        
        <div className="registration-card">
          <h3>Participant Registration</h3>
          <p>
            Form your teams and get ready to innovate. We are finalizing the platform
            for team registrations. Stay tuned!
          </p>
          <div className="form-placeholder">
            <input type="text" placeholder="Full Name" disabled />
            <input type="email" placeholder="Email Address" disabled />
            <button className="btn disabled">Coming Soon</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
