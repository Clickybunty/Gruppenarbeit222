import { useRef } from "react";
import moon from "./moon.png";
import land from "./land.png";
import cat from "./cat.gif";
import "./Content.css";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function MyContent() {
  const ref = useRef();

  return (
    <div className="background">
      <Parallax pages={4} ref={ref}>
        {/* <ParallaxLayer speed={1}>
            <h2>Hallo</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
            <h2>Web development is fun!</h2>
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.5, end: 3.5 }}
          style={{ textAlign: "center" }}
        >
          <img src={cat} alt="Kadse" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2>Willkommen zu unserer Seite!</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.6}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2>The End!!</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default MyContent;
