import "./Home.css";
import heroimg from "../../assets/heroimg.PNG";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Link to="/product">
        <img className="cartHeroimg" src={heroimg} />
      </Link>
    </>
  );
}

export default Home;
