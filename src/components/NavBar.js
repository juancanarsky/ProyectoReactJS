import CartWidget from "./CartWidget";

function NavBar({ brand, categoria1, categoria2 }) {
    return (
    <div className="navbar">
        <div className="navbar__brand">
        <h1>{brand}</h1>
        </div>
        <div className="navbar__categories">
        <a href="/categoria1">
            <h3>{categoria1}</h3>
        </a>
        <a href="/categoria2">
            <p>{categoria2}</p>
        </a>
        </div>
        <div className="navbar__cart">
        </div>
    </div>
    );
}

export default NavBar;