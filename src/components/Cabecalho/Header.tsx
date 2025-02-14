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

  function scrollToElement(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();
    const index = event.currentTarget.href.indexOf("#");
    const id = event.currentTarget.href.slice(1 + index);

    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  }

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
              <a href="#lancamentos" onClick={scrollToElement}>
                LANÇAMENTOS
              </a>
            </li>
            <li className="cabecalho__menu__link__links">
              <a href="#brasilidade" onClick={scrollToElement}>
                BRASILIDADE
              </a>
            </li>
            <li className="cabecalho__menu__link__links">
              <a href="#classicos" onClick={scrollToElement}>
                CLÁSSICOS
              </a>
            </li>
            <li className="cabecalho__menu__link__links">
              <a href="#minha_lista" onClick={scrollToElement}>
                MINHA LISTA
              </a>
            </li>
          </ul>

          <button className="cabecalho__menu__botao">
            <i className="ri-menu-line"></i>
          </button>
        </section>
      </header>
    </>
  );
}
