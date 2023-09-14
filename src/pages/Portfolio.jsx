function Portfolio() {
  return (
    <>
      <h2>Portfolio</h2>
        <div id="portfolioContainer">
          <div >
            <a href="https://github.com/swatson2000/Digital-Museum" rel="noreferrer" target="_blank">
              <div>Digital Museum</div>
              <img id="portfolioImg" src="src/assets/museum.png" alt="digital-museum" />
            </a>
          </div>
          <div >
            <a href="https://github.com/dong135790/readme-generator" rel="noreferrer" target="_blank">
              <div>ReadMe Generator</div>
              <img id="portfolioImg" src="src/assets/readme generator.png" alt="readme-generator-via-express"/>
            </a>
          </div>
          <div >
          <a href="https://github.com/dong135790/swoldemort" rel="noreferrer" target="_blank" >
            <div>Swoldemort</div>
            <img id="portfolioImg" src="src/assets/Screenshot 2023-09-14 133419.png" alt="swoldemort-workout-routine"/>
          </a>
          </div>
          <div >
          <a href="https://github.com/dong135790/pwa-text-editor" rel="noreferrer" target="_blank">
            <div>PWA text generator</div>
            <img id="portfolioImg" src="src/assets/text editor.png" alt="pwa-text-generator" />
          </a>
          </div>
        </div>
    </>
  );
}

export default Portfolio;
