import CardLivro from './CardLivro.jsx';
import EmptyState from './EmptyState.jsx';

function ListaLivros({ livros, favoritos, aoAlternarFavorito }) {
  if (livros.length === 0) return <EmptyState />;

  return (
    <section className="lista-livros" aria-label="Lista de livros filtrados">
      {livros.map((livro) => (
        <CardLivro
          key={livro.id}
          livro={livro}
          favorito={favoritos.includes(livro.id)}
          aoAlternarFavorito={aoAlternarFavorito}
        />
      ))}
    </section>
  );
}

export default ListaLivros;
