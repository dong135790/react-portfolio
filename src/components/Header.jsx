import background from "../assets/headerImg.jpg"

function Header() {
  return (
    <>
    <article className="headerImg" style={{ backgroundImage: `url(${background})`}}>
      <div className="headerTxt">Justin Dong</div>
    </article>
    </>
  )
}

export default Header