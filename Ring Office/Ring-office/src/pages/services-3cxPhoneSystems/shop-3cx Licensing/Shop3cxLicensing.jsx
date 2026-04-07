import "./Shop3cxLicensing.css";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import licensingImg from "../../../assets/3cxLogoBgWhite.PNG";
import { Link } from "react-router-dom";

function Shop3cxLicensing() {
  return (
    <>
      <Header />
      <section className="licensing-section">
        <div className="licensing-container">
          <div className="licensing-image">
            <img src={licensingImg} alt="3CX Licensing" />
          </div>

          <div className="licensing-content">
            <h2>3CX Phone System License Manager</h2>
            <div className="3cxCategories">
              <span className="subheading3cx">Categories :</span>
              <Link to="" className="linkitem">
                3CX
              </Link>
              <Link to="" className="linkitem">
                {" "}
                3CX Licenses
              </Link>
              <Link to="" className="linkitem">
                {" "}
                Phone Systems
              </Link>
            </div>
            <div className="3cxTag">
              <span className="subheading3cx">Tag:</span>
              <Link to="" className="linkitem">
                3CX
              </Link>
            </div>

            <div className="3cxBrand">
              <span className="subheading3cx">Brand:</span>
              <Link to="" className="linkitem">
                3CX
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Shop3cxLicensing;
