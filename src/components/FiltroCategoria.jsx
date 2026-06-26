function FiltroCategoria({ categorias, valor, aoAlterar }) {
  return (
    <div className="filtro-categoria">
      <label htmlFor="categoria">Categoria</label>
      <select
        id="categoria"
        value={valor}
        onChange={(e) => aoAlterar(e.target.value)}
      >
        <option value="Todas">Todas</option>
        {categorias.map((categoria) => (
          <option key={categoria} value={categoria}>
            {categoria}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FiltroCategoria;
