import { useState, useEffect } from "react";
import "./Header.css";

interface Filme {
  titulo: string;
  diretor: string;
  ano: number;
}

export default function Header() {
  const [filmes, setFilmes] = useState<Filme[]>([]);
  const [busca, setBusca] = useState<string>("");
  const [resultados, setResultados] = useState<Filme[]>([]);
  const [mostrarMenu, setMostrarMenu] = useState<boolean>(false);

  useEffect(() => {
    fetch("./filmes.json")
      .then((response) => response.json())
      .then((data) => {
        const todosOsFilmes = [
          ...data.lancamentos,
          ...data.brasilidade,
          ...data.classicos,
        ];
        setFilmes(todosOsFilmes);
      })
      .catch((error) => console.error("Erro ao carregar os filmes:", error));
  }, []);

  useEffect(() => {
    if (busca.trim() === "") {
      setResultados([]);
      setMostrarMenu(false);
    } else {
      const termoBusca = busca.toLowerCase();
      const filtrados = filmes.filter(
        (filme) =>
          filme.titulo.toLowerCase().includes(termoBusca) ||
          filme.diretor.toLowerCase().includes(termoBusca)
      );
      setResultados(filtrados);
      setMostrarMenu(filtrados.length > 0);
    }
  }, [busca, filmes]);

  return (
    <>
      <header className="cabecalho">
        <section className="cabecalho__menu">
          <a
            href="https://mubi.com/pt/br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./img/MUBI-logo.png"
              alt="Logo MUBI"
              className="cabecalho__menu__imagem"
            />
          </a>

          <section className="cabecalho__menu__input-text">
            <label htmlFor="buscar">
              <i className="ri-search-line"></i>
            </label>
            <input
              type="text"
              name="buscar"
              id="buscar"
              placeholder="Buscar"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              onFocus={() => setMostrarMenu(resultados.length > 0)}
              onBlur={() => setTimeout(() => setMostrarMenu(false), 200)}
            />
            {mostrarMenu && (
              <ul className="resultados">
                {resultados.map((filme) => (
                  <li key={filme.titulo} className="resultado-item">
                    <span>
                      {filme.titulo} ({filme.ano}) - {filme.diretor}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <ul className="cabecalho__menu__link">
            <li className="cabecalho__menu__link__links">
              <a href="#lancamentos">LANÇAMENTOS</a>
            </li>
            <li className="cabecalho__menu__link__links">
              <a href="#brasilidade">BRASILIDADE</a>
            </li>
            <li className="cabecalho__menu__link__links">
              <a href="#classicos">CLÁSSICOS</a>
            </li>
          </ul>
        </section>
      </header>
    </>
  );
}
