import { useState, useEffect } from "react";
import "./Content.css";
import Fincher from "../Fincher/Fincher";

interface Filme {
  titulo: string;
  diretor: string;
  pais: string;
  ano: number;
  imagem: string;
}

interface FilmesData {
  lancamentos: Filme[];
  brasilidade: Filme[];
  classicos: Filme[];
  colecao_fincher: Filme[];
}

export default function Content() {
  const [filmes, setFilmes] = useState<FilmesData | null>(null);
  const [showMessage, setShowMessage] = useState({
    lancamentos: false,
    brasilidade: false,
    classicos: false,
    minha_lista: false,
  });

  useEffect(() => {
    fetch("./filmes.json")
      .then((response) => response.json())
      .then((data: FilmesData) => setFilmes(data))
      .catch((error) => console.error("Erro ao carregar filmes:", error));
  }, []);

  return (
    <>
      <section
        className="filmes"
        id="lancamentos"
        onMouseEnter={() =>
          setShowMessage((prev) => ({ ...prev, lancamentos: true }))
        }
        onMouseLeave={() =>
          setShowMessage((prev) => ({ ...prev, lancamentos: false }))
        }
      >
        <section className="filmes__conteudo">
          <h2 className="filmes__conteudo__titulo">
            LANÇAMENTOS
            {showMessage.lancamentos && (
              <span className="filmes__conteudo__titulo__mensagem">
                VER TUDO <i className="ri-arrow-right-double-line"></i>
              </span>
            )}
          </h2>
          <section className="filmes__conteudo__filmes">
            {filmes?.lancamentos.map((Filme, index) => (
              <section key={index} className="filmes__conteudo__filmes-card">
                <img src={Filme.imagem} alt={Filme.titulo} draggable="false" />
                <h3>{Filme.titulo.toLocaleUpperCase()}</h3>
                <p>
                  <b>{Filme.diretor.toLocaleUpperCase()}</b>{" "}
                  {Filme.pais.toLocaleUpperCase()} {Filme.ano}
                </p>
              </section>
            ))}
          </section>
        </section>
      </section>

      <section
        className="brasilidade"
        id="brasilidade"
        onMouseEnter={() =>
          setShowMessage((prev) => ({ ...prev, brasilidade: true }))
        }
        onMouseLeave={() =>
          setShowMessage((prev) => ({ ...prev, brasilidade: false }))
        }
      >
        <section className="brasilidade__conteudo">
          <h2 className="brasilidade__conteudo__titulo">
            BRASILIDADE
            {showMessage.brasilidade && (
              <span className="brasilidade__conteudo__titulo__mensagem">
                VER TUDO <i className="ri-arrow-right-double-line"></i>
              </span>
            )}
          </h2>
          <section className="brasilidade__conteudo__filmes">
            {filmes?.brasilidade.map((Filme, index) => (
              <section
                key={index}
                className="brasilidade__conteudo__filmes-card"
              >
                <img src={Filme.imagem} alt={Filme.titulo} draggable="false" />
                <h3>{Filme.titulo.toLocaleUpperCase()}</h3>
                <p>
                  <b>{Filme.diretor.toLocaleUpperCase()}</b>{" "}
                  {Filme.pais.toLocaleUpperCase()} {Filme.ano}
                </p>
              </section>
            ))}
          </section>
        </section>
      </section>

      <section
        className="classicos"
        id="classicos"
        onMouseEnter={() =>
          setShowMessage((prev) => ({ ...prev, classicos: true }))
        }
        onMouseLeave={() =>
          setShowMessage((prev) => ({ ...prev, classicos: false }))
        }
      >
        <section className="classicos__conteudo">
          <h2 className="classicos__conteudo__titulo">
            CLÁSSICOS
            {showMessage.classicos && (
              <span className="classicos__conteudo__titulo__mensagem">
                VER TUDO <i className="ri-arrow-right-double-line"></i>
              </span>
            )}
          </h2>
          <section className="classicos__conteudo__filmes">
            {filmes?.classicos.map((Filme, index) => (
              <section key={index} className="classicos__conteudo__filmes-card">
                <img src={Filme.imagem} alt={Filme.titulo} draggable="false" />
                <h3>{Filme.titulo.toLocaleUpperCase()}</h3>
                <p>
                  <b>{Filme.diretor.toLocaleUpperCase()}</b>{" "}
                  {Filme.pais.toLocaleUpperCase()} {Filme.ano}
                </p>
              </section>
            ))}
          </section>
        </section>
      </section>

      {filmes && <Fincher filmes={filmes.colecao_fincher} />}

      <section
        className="minha_lista"
        id="minha_lista"
        onMouseEnter={() =>
          setShowMessage((prev) => ({ ...prev, minha_lista: true }))
        }
        onMouseLeave={() =>
          setShowMessage((prev) => ({ ...prev, minha_lista: false }))
        }
      >
        <section className="minha_lista__conteudo">
          <h2 className="minha_lista__conteudo__titulo">
            MINHA LISTA
            {showMessage.minha_lista && (
              <span className="classicos__conteudo__titulo__mensagem">
                VER TUDO <i className="ri-arrow-right-double-line"></i>
              </span>
            )}
          </h2>
        </section>
      </section>
    </>
  );
}
