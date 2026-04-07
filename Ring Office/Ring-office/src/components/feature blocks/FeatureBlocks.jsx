import "./FeatureBlocks.css";

function FeatureBlocks({ blocks }) {
  return (
    <section className="feature-blocks">

      <h2 className="feature-title">Features of Cloud Phone Systems</h2>

      {blocks.map((block, index) => (
        <div
          key={index}
          className={`feature-row 
          ${block.reverse ? "reverse" : ""} 
          ${block.bg === "light" ? "light-bg" : "white-bg"}`}
        >

          <div className="feature-image">
            <img src={block.image} alt="feature" />
          </div>

          <div className="feature-content">
            <h3>{block.title}</h3>
            <p>{block.desc}</p>
          </div>

        </div>
      ))}

    </section>
  );
}

export default FeatureBlocks;