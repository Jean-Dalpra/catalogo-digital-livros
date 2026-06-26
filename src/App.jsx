import { useState, useEffect, useMemo } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import PainelEstatisticas from './components/PainelEstatisticas';
import CampoBusca from './components/CampoBusca';
import FiltroCategoria from './components/FiltroCategoria';
import FiltroStatus from './components/FiltroStatus';
import ListaLivros from './components/ListaLivros';

import livrosBase from './data/livros.json';

function App() {
  const [busca, setBusca] = useState('');
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todas');
  const [statusAtivo, setStatusAtivo] = useState('Todos');

  const [favoritos, setFavoritos] = useState(() => {
    try {
      const favoritosSalvos = localStorage.getItem('biblioteca-viva:favoritos');
      return favoritosSalvos ? JSON.parse(favoritosSalvos) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('biblioteca-viva:favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  const categorias = useMemo(() => {
    const categoriasUnicas = livrosBase.map((livro) => livro.categoria);
    return [...new Set(categoriasUnicas)].sort();
  }, []);

  const livrosFiltrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();

    return livrosBase.filter((livro) => {
      const textoPesquisavel = [
        livro.titulo,
        livro.autor,
        livro.categoria,
        ...livro.tags,
      ]
        .join(' ')
        .toLowerCase();

      const combinaComBusca = textoPesquisavel.includes(termo);
      const combinaComCategoria =
        categoriaAtiva === 'Todas' || livro.categoria === categoriaAtiva;
      const combinaComStatus =
        statusAtivo === 'Todos' || livro.status === statusAtivo;

      return combinaComBusca && combinaComCategoria && combinaComStatus;
    });
  }, [busca, categoriaAtiva, statusAtivo]);

  function alternarFavorito(idLivro) {
    setFavoritos((favoritosAtuais) => {
      if (favoritosAtuais.includes(idLivro)) {
        return favoritosAtuais.filter((id) => id !== idLivro);
      }
      return [...favoritosAtuais, idLivro];
    });
  }

  return (
    <>
      <Header />

      <main className="pagina" id="catalogo">
        <section className="hero">
          <span className="hero-eyebrow">Projeto React Guiado por Dados</span>
          <h1>Catálogo para organizar leituras e recomendações</h1>
          <p className="hero-sub">
            Uma interface construída com componentes reutilizáveis. Filtre dinamicamente, salve favoritos e explore o seu acervo.
          </p>
        </section>

        <PainelEstatisticas
          total={livrosBase.length}
          exibidos={livrosFiltrados.length}
          favoritos={favoritos.length}
          categorias={categorias.length}
        />

        <section className="filtros" id="filtros">
          <CampoBusca valor={busca} aoAlterar={setBusca} />
          <FiltroCategoria
            categorias={categorias}
            valor={categoriaAtiva}
            aoAlterar={setCategoriaAtiva}
          />
          <FiltroStatus valor={statusAtivo} aoAlterar={setStatusAtivo} />
        </section>

        <ListaLivros
          livros={livrosFiltrados}
          favoritos={favoritos}
          aoAlternarFavorito={alternarFavorito}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
