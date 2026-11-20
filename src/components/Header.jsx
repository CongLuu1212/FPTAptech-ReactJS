function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-icon">♦</span>
        <span>FPT Aptech</span>
      </div>

      <nav className="nav-menu">
        <a href="#">About Us</a>
        <a href="#">Products</a>
        <a href="#">Booking</a>
        <a href="#">Locations</a>
      </nav>

      <div className="header-buttons">
        <button className="sign-in">Sign In</button>
        <button className="sign-up">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
