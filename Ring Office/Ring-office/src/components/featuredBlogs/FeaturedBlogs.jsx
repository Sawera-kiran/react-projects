import "./FeaturedBlogs.css";
import { FaTag } from "react-icons/fa";

function FeaturedBlogs({ blogs = [], title = "Featured Blogs" }) {

  return (
    <section className="featured-blogs">

      <h2>{title}</h2>

      <div className="blogs-container">

        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>

            <img src={blog.image} alt="blog" />

            <div className="blog-content">

              <h3>{blog.title}</h3>

              <p>{blog.desc}</p>

              <div className="blog-tag">
                <FaTag className="tag-icon" />
                <span>{blog.tag}</span>
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default FeaturedBlogs;


