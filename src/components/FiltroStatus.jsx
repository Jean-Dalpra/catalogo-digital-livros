function FiltroStatus({ valor, aoAlterar }) {
  return (
    <div className="filtro-status">
      <label htmlFor="status">Status</label>
      <select
        id="status"
        value={valor}
        onChange={(e) => aoAlterar(e.target.value)}
      >
        <option value="Todos">Todos</option>
        <option value="Lido">Lido</option>
        <option value="Lendo">Lendo</option>
        <option value="Quero ler">Quero ler</option>
      </select>
    </div>
  );
}

export default FiltroStatus;
