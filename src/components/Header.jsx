function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img className="logo" src="https://images.seeklogo.com/logo-png/16/2/enem-logo-png_seeklogo-168949.png" alt="" />
        <span className="Logoname" > Biblioteca Vestibular</span>

        <nav className="nav">
          <a href="#catalogo">Catálogo</a>
          <a href="#filtros">Filtros</a>
          <a href="#sobre">Sobre</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
