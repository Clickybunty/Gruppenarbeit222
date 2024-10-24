import React from "react";
import SimpleParallax from "simple-parallax-js";
/*import "./Content.css";*/

const MyContent = () => {
  const images = [
    "image.png",
    "image.png",
    "image.png",
    "image.png",
    "image.png",
  ];

  return (
    <div
      style={{
        maxWidth: "100vw",
      }}
    >
      <h1>Test</h1>

      <div
        style={{
          maxWidth: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gridGap: "10px",
        }}
      >
        {Array.from(Array(50).keys()).map((line) => (
          <React.Fragment key={line}>
            {images.map((src, index) => (
              <SimpleParallax
                key={`${line}-${index}`}
                delay={0.2}
                transition="cubic-bezier(0,0,0,1)"
                orientation="up"
                scale={1.5}
                //overflow={true}
                //maxTransition={50}
              >
                <img
                  src={src}
                  alt={`image-${line}-${index}`}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </SimpleParallax>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default MyContent;
