function getInitials(titulo) {
  return titulo
    .split(' ')
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');
}

function CardLivro({ livro, favorito, aoAlternarFavorito }) {
  const initials = getInitials(livro.titulo);
  const statusClass = `status status-${livro.status.toLowerCase().replace(' ', '-')}`;

  return (
    <article
      className="card-livro"
      data-initials={initials}
    >
      <div className="card-livro__cabecalho">
        <span className="categoria">{livro.categoria}</span>
        <button
          className={`favorito ${favorito ? 'ativo' : ''}`}
          onClick={() => aoAlternarFavorito(livro.id)}
          aria-label={favorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        >
          {favorito ? '★' : '☆'}
        </button>
      </div>

      {/* Seção da Imagem do Livro */}
      <div className="card-livro__capa-container">
        {livro.imagem ? (
          <img 
            src={livro.imagem} 
            alt={`Capa do livro ${livro.titulo}`} 
            className="card-livro__imagem"
            loading="lazy"
          />
        ) : (
          <div className="card-livro__imagem-fallback">
            <span>{initials}</span>
          </div>
        )}
      </div>

      <h2>{livro.titulo}</h2>

      <p className="autor">
        <strong>Autor:</strong> {livro.autor}
      </p>

      <p className={statusClass}>
        {livro.status}
      </p>

      {livro.descricao && (
        <p className="descricao">{livro.descricao}</p>
      )}

      {livro.tags && livro.tags.length > 0 && (
        <div className="tags">
          {livro.tags.map((tag) => (
            <span key={tag} className="tag">
              #{tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

export default CardLivro;