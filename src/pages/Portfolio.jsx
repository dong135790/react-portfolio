import { useState } from "react";

function Portfolio() {

  const [hover, setHover] = useState(false); // initial false


  const onHover = (e) => {
    e.preventDefault();
    setHover(true); // turn true
    console.log("hovered");
  };

  const onHoverOver = (e) => {
    e.preventDefault(); // turn false
    setHover(false);
  };
  return (
    <>
      <h2>Portfolio</h2>
        <div id="portfolioContainer">
          <div className="singlePortfolioItem">
            <a href="https://github.com/swatson2000/Digital-Museum" rel="noreferrer" target="_blank">
              {hover && <p className={hover}>{"Digital Museum"}</p>}
              <img onMouseEnter={(e) => onHover(e)}
                onMouseLeave={(e) => onHoverOver(e)}
                className="img-responsive" id="portfolioImg" src="src/assets/museum.png" alt="digital-museum" />
            </a>
          </div>
          <div className="singlePortfolioItem">
            <a href="https://github.com/dong135790/readme-generator" rel="noreferrer" target="_blank">
              {hover && <p className={hover}>{"ReadMe Generator"}</p>}
              <img onMouseEnter={(e) => onHover(e)}
                onMouseLeave={(e) => onHoverOver(e)} 
                id="portfolioImg" src="src/assets/readme generator.png" alt="readme-generator-via-express"/>
            </a>
          </div>
          <div className="singlePortfolioItem">
          <a href="https://github.com/dong135790/swoldemort" rel="noreferrer" target="_blank" >
            {hover && <p className={hover}>{"Swoldemort"}</p>}
            <img onMouseEnter={(e) => onHover(e)}
                onMouseLeave={(e) => onHoverOver(e)}  
                id="portfolioImg" src="src/assets/Screenshot 2023-09-14 133419.png" alt="swoldemort-workout-routine"/>
          </a>
          </div>
          <div className="singlePortfolioItem">
          <a href="https://github.com/dong135790/pwa-text-editor" rel="noreferrer" target="_blank">
          {hover && <p className={hover}>{"PWA Text Editor"}</p>}
            <img onMouseEnter={(e) => onHover(e)}
                onMouseLeave={(e) => onHoverOver(e)}  
                id="portfolioImg" src="src/assets/text editor.png" alt="pwa-text-generator" />
          </a>
          </div>
        </div>
    </>
  );
}

export default Portfolio;
