import { useState } from "react";

function Portfolio() {

  const [hover, setHover] = useState(false); // initial false

  const onHover = (e) => {
    e.preventDefault();
    let getImage = document.getElementById('portfolioContainer');
    const image = getImage.children
    const image2 = getImage.children[1]
    console.log([getImage], image, image2);
    setTimeout(() => {
      setHover(true);
    }, 50);
    console.log("hovered");
  };
  
  const onHoverOver = (e) => {
    e.preventDefault(); // turn false
    setTimeout(() => {
      setHover(false);
    }, 100);
  };
  return (
    <>
      <h2>Portfolio</h2>
        <div id="portfolioContainer">
          <div className="singlePortfolioItem">
            <a href="https://swatson2000.github.io/Digital-Museum/" rel="noreferrer" target="_blank">
              {hover && <p>{"Digital Museum"}</p>}
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
                id="portfolioImg" src="src/assets/readme-generator.png" alt="readme-generator-via-express"/>
            </a>
          </div>
          <div className="singlePortfolioItem">
          <a href="https://application-2023-07-31-69c69ce85b50.herokuapp.com/login" rel="noreferrer" target="_blank" >
            {hover && <p className={hover}>{"Swoldemort"}</p>}
            <img onMouseEnter={(e) => onHover(e)}
                onMouseLeave={(e) => onHoverOver(e)}  
                id="portfolioImg" src="src/assets/swoledemort.png" alt="swoldemort-workout-routine"/>
          </a>
          </div>
          <div className="singlePortfolioItem">
          <a href="https://damp-thicket-22045-f9b7c3017935.herokuapp.com/" rel="noreferrer" target="_blank">
          {hover && <p className={hover}>{"PWA Text Editor"}</p>}
            <img onMouseEnter={(e) => onHover(e)}
                onMouseLeave={(e) => onHoverOver(e)}  
                id="portfolioImg" src="src/assets/text-editor.png" alt="pwa-text-generator" />
          </a>
          </div>
          <div className="singlePortfolioItem">
          <a href="https://dong135790.github.io/weather-forecast-dashboard/" rel="noreferrer" target="_blank">
          {hover && <p className={hover}>{"Weather Forecast Dashboard"}</p>}
            <img onMouseEnter={(e) => onHover(e)}
                onMouseLeave={(e) => onHoverOver(e)}  
                id="portfolioImg" src="src/assets/weather-forecast.png" alt="weather-forecast-dashboard" />
          </a>
          </div>
          <div className="singlePortfolioItem">
          <a href="https://github.com/dong135790/employee-tracker" rel="noreferrer" target="_blank">
          {hover && <p className={hover}>{"Employee Tracker"}</p>}
            <img onMouseEnter={(e) => onHover(e)}
                onMouseLeave={(e) => onHoverOver(e)}  
                id="portfolioImg" src="src/assets/employee-tracker.png" alt="pwa-text-generator" />
          </a>
          </div>
        </div>
    </>
  );
}

export default Portfolio;
