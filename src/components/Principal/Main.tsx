import "./Main.css";

export default function Main() {
  return (
    <>
      <main className="principal">
        <section className="principal__conteudo">
          <section className="principal__conteudo__filme">
            <img
              src="./img/her_film.jpeg"
              alt="Her Film"
              className="principal__conteudo__imagem"
            />
            <a
              href="https://pt.wikipedia.org/wiki/Her"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./img/her_film-logo.png"
                alt="Logo"
                className="principal__conteudo__imagem__logo"
                draggable="false"
              />
            </a>

            <p className="principal__conteudo__imagem__paragrafo">
              Em um futuro próximo, Theodore Twombly, um homem solitário,
              desenvolve um relacionamento com um sistema operacional de
              inteligência artificial chamado Samantha. A história explora os
              limites entre a tecnologia e as emoções humanas, desafiando
              questões sobre a natureza do amor e da conexão em um mundo
              altamente digitalizado.
            </p>

            <button className="principal__conteudo__imagem__botao">
              <i className="ri-play-fill"></i>
              ASSISTIR
            </button>
          </section>
        </section>
      </main>
    </>
  );
}
