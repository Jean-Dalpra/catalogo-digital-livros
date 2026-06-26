function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img className="logo" src="https://cdn-icons-png.flaticon.com/512/224/224595.png" alt="" />
        <span className="Logoname" > Biblioteca Viva</span>

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
