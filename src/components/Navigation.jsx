// So we can create links from specific pages
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default Navigation