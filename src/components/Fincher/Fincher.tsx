import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Fincher.css";

interface Filme {
  titulo: string;
  diretor: string;
  pais: string;
  ano: number;
  imagem: string;
}

interface FincherProps {
  filmes: Filme[];
}

export default function Fincher({ filmes }: FincherProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showControls, setShowControls] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount =
        direction === "left"
          ? -carouselRef.current.offsetWidth
          : carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="colecao_fincher">
      <section className="colecao_fincher__conteudo">
        <img
          src="./img/film/david-fincher.png"
          alt="David Fincher"
          className="colecao_fincher__conteudo__imagem"
        />
        <p className="colecao_fincher__conteudo__subtitulo">COLEÇÃO</p>
        <h2 className="colecao_fincher__conteudo__titulo">DAVID FINCHER</h2>
        <p className="colecao_fincher__conteudo__paragrafo">
          Prepare-se para mergulhar na mente de um dos maiores mestres do cinema
          moderno. A coleção de David Fincher traz histórias sombrias, tramas
          inteligentes e uma estética impecável que desafia a percepção do
          espectador. De 'Clube da Luta' a 'Zodíaco', cada filme é um enigma
          visual e psicológico que prende do início ao fim. Você está pronto
          para a imersão?
        </p>
        <div
          className="carousel-container"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          <button
            className={`carousel-control left ${showControls ? "visible" : ""}`}
            onClick={() => scroll("left")}
          >
            <ChevronLeft size={24} />
          </button>
          <section
            ref={carouselRef}
            className="colecao_fincher__conteudo__filmes"
          >
            {filmes.map((Filme, index) => (
              <section
                key={index}
                className="colecao_fincher__conteudo__filmes-card"
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
          <button
            className={`carousel-control right ${
              showControls ? "visible" : ""
            }`}
            onClick={() => scroll("right")}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </section>
    </section>
  );
}
