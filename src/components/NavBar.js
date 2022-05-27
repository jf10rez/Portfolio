export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="navigation">
      <p className="navbar-brand text-white">Home</p>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <p className="nav-link text-white">Inicio</p>
          </li>
          <li className="nav-item">
            <p className="nav-link text-white">Habilidades</p>
          </li>
          <li className="nav-item">
            <p className="nav-link text-white">Home</p>
          </li>
          <li className="nav-item">
            <p className="nav-link text-white">Home</p>
          </li>
        </ul>
      </div>
    </nav>
  );
};
