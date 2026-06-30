function obterIniciais(titulo) {
  return titulo
    .split(' ')
    .filter((p) => p.length > 2)
    .slice(0, 2)
    .map((p) => p[0].toUpperCase())
    .join('');
}

export function abrirDetalhesLivro(livro) {
  const janela = window.open('', '_blank');
  if (!janela) {
    alert('Permita pop-ups para ver os detalhes do livro.');
    return;
  }

  const capa = livro.imagem
    ? `<img src="${livro.imagem}" alt="${livro.titulo}" class="capa" />`
    : `<div class="capa capa-fallback">${obterIniciais(livro.titulo)}</div>`;

  const tags = (livro.tags || []).map((t) => `<span class="tag">#${t}</span>`).join('');
  const vestibulares = (livro.vestibulares || [])
    .map((v) => `<span class="tag tag-teal">${v}</span>`)
    .join('');

  janela.document.write(`
    <html>
    <head>
      <title>${livro.titulo}</title>
      <style>
        body { font-family: system-ui, sans-serif; background: #050d1a; color: #94a3b8; padding: 32px; }
        .container { max-width: 700px; margin: 0 auto; }
        .ficha { background: #0b1628; border: 1px solid rgba(255,255,255,.07); border-radius: 16px; padding: 32px; display: flex; gap: 24px; }
        .capa { width: 200px; height: 280px; border-radius: 12px; object-fit: cover; flex-shrink: 0; }
        .capa-fallback { background: #0f1e35; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: bold; color: #38bdf8; }
        .categoria { color: #38bdf8; font-size: .8rem; font-weight: 600; }
        h1 { color: #fff; margin: 6px 0; }
        .tag { display: inline-block; background: rgba(255,255,255,.08); border-radius: 16px; padding: 4px 10px; margin: 4px 4px 0 0; font-size: .78rem; }
        .tag-teal { background: rgba(20,184,166,.15); color: #14b8a6; font-weight: 600; }
        button { background: none; border: none; color: #94a3b8; cursor: pointer; margin-bottom: 20px; font-size: .9rem; font-family: inherit; }
        button:hover { color: #fff; }
      </style>
    </head>
    <body>
      <div class="container">
        <button onclick="window.close()">← Voltar ao catálogo</button>
        <div class="ficha">
          ${capa}
          <div>
            <p class="categoria">${livro.categoria}</p>
            <h1>${livro.titulo}</h1>
            <p><strong>Autor:</strong> ${livro.autor}</p>
            <p>${livro.status}${livro.paginas ? ` · ${livro.paginas} páginas` : ''}${livro.nota ? ` · ⭐ ${livro.nota}` : ''}</p>
            <p style="margin: 14px 0; line-height: 1.6;">${livro.descricao || ''}</p>
            <div>${tags}</div>
            <div style="margin-top: 8px;">${vestibulares}</div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `);
}