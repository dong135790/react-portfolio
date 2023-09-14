// So we can create as from specific pages

function Navigation({ setCurrentPage }) {
    /*
    1. e stands for event.
    2. setCurrentPage(page) sets the current value of page to currentPage
    */
    const handleLink = (e, page) => {
        e.preventDefault();
        setCurrentPage(page);
    }
  return (
    <nav>
        <ul id="navBar">
            <li><a href="#/" onClick={(e) => handleLink(e, 'Home')}>About Me</a></li>
            <li><a href="#/portfolio" onClick={(e) => handleLink(e, 'Portfolio')}>Portfolio</a></li>
            <li><a href="#/contact" onClick={(e) => handleLink(e, 'Contact')}>Contact</a></li>
            <li><a href="#/resume" onClick={(e) => handleLink(e, 'Resume')}>Resume</a></li>
        </ul>
    </nav>
  )
}

export default Navigation