function PainelEstatisticas({ total, exibidos, favoritos, categorias }) {
  const stats = [
    { label: 'Total de livros', valor: total },
    { label: 'Livros exibidos', valor: exibidos },
    { label: 'Favoritos', valor: favoritos },
    { label: 'Categorias', valor: categorias },
  ];

  return (
    <section className="painel-estatisticas" aria-label="Estatísticas da biblioteca">
      {stats.map(({ label, valor }) => (
        <div key={label} className="card-estatistica">
          <h3>{label}</h3>
          <p>{valor}</p>
        </div>
      ))}
    </section>
  );
}

export default PainelEstatisticas;
