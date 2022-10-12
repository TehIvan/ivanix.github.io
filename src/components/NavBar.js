import "../styles/comp/NavBar.css";

function NavBar() {
    return (
        <div className="nav-container">
            <a href="/resume" className="nav-item">Resume</a>
            <a href="/" className="nav-item">Home</a>
            <a href="/portfolio" className="nav-item">Portfolio</a>
        </div>
    )
}

export default NavBar;