 function Navbar() {
  return (
    <header>
      <nav>

        <div className="logo">
          <h2>Benha National University</h2>
        </div>

        <ul className="nav-links">
          <li>Home</li>

          <li>About University</li>

          <li>University Sectors</li>

          <li>Students</li>

          <li>Colleges</li>

          <li>Electronic Services</li>

          <li>News</li>

          <li>Contact Us</li>
        </ul>

        <div className="nav-actions">
          <button>AR</button>
          <button>Search</button>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;