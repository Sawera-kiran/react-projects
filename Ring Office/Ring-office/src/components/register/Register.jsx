import "./Register.css";
import registerImg from "../../assets/createaccountimg.PNG";

function Register() {
  return (
    <section className="register-section">

      <div className="register-container">

        <div className="register-form">

          <form>

            <div className="form-grid">

              <div className="form-group">
                <label>First Name </label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Last Name </label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Username </label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Email Address </label>
                <input type="email" />
              </div>

              <div className="form-group">
                <label>Password </label>
                <input type="password" />
              </div>

              <div className="form-group">
                <label>Confirm Password </label>
                <input type="password" />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Country</label>
                <select>
                  <option>Select a country</option>
                  <option>Canada</option>
                  <option>USA</option>
                  <option>UK</option>
                </select>
              </div>

              <div className="form-group">
                <label>City / State</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Postal / ZIP Code</label>
                <input type="text" />
              </div>

            </div>

            <div className="form-group full">
              <label>Street Address</label>
              <textarea rows="3"></textarea>
            </div>

            <div className="terms">
              <input type="checkbox" />
              <span>
                Accept RingOffice Terms of Service *
              </span>
            </div>

            <button className="submit-btn">
              Submit
            </button>

          </form>

        </div>


        <div className="register-image">
          <img src={registerImg} alt="register" />
        </div>

      </div>

    </section>
  );
}

export default Register;