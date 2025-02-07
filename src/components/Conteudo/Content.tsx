import "./Content.css";

export default function Content() {
  return (
    <>
      <section className="filmes">
        <section className="filmes__conteudo">
          <h2 className="filmes__conteudo__titulo" id="lancamentos">
            LANÇAMENTOS
          </h2>

          <section className="filmes__conteudo__filmes">
            <section className="filmes__conteudo__filmes-card">
              <img
                src="./img/film/la-la-land.png"
                alt="La La Land"
                draggable="false"
              />
              <h3 className="p1">LA LA LAND</h3>
              <p className="p2">DAMIEN CHAZELLE ESTADOS UNIDOS 2016</p>
            </section>

            <section className="filmes__conteudo__filmes-card">
              <img
                src="./img/film/lost-in-translation.png"
                alt="Lost in Translation"
                draggable="false"
              />
              <h3 className="p1">LOST IN TRANSLATION</h3>
              <p className="p2">SOFIA COPPOLA ESTADOS UNIDOS 2003</p>
            </section>

            <section className="filmes__conteudo__filmes-card">
              <img
                src="./img/film/grown-ups.png"
                alt="Grown Ups 2"
                draggable="false"
              />
              <h3 className="p1">GROWN UPS 2</h3>
              <p className="p2">DENNIS DUGAN ESTADOS UNIDOS 2013</p>
            </section>

            <section className="filmes__conteudo__filmes-card">
              <img
                src="./img/film/gone-girl.png"
                alt="Gone Girl"
                draggable="false"
              />
              <h3 className="p1">GONE GIRL</h3>
              <p className="p2">DAVID FINCHER ESTADOS UNIDOS 2014</p>
            </section>
          </section>
        </section>
      </section>

      <section className="brasilidade">
        <section className="brasilidade__conteudo">
          <h2 className="brasilidade__conteudo__titulo" id="brasilidade">
            BRASILIDADE
          </h2>

          <section className="brasilidade__conteudo__filmes">
            <section className="brasilidade__conteudo__filmes-card">
              <img
                src="./img/film/cidade-de-deus.png"
                alt="Cidade de Deus"
                draggable="false"
              />
              <h3 className="p1">CIDADE DE DEUS</h3>
              <p className="p2">FERNANDO MEIRELLES E KÁTIA LUND BRASIL 2002</p>
            </section>

            <section className="brasilidade__conteudo__filmes-card">
              <img
                src="./img/film/central-do-brasil.png"
                alt="Central do Brasil"
                draggable="false"
              />
              <h3 className="p1">CENTRAL DO BRASIL</h3>
              <p className="p2">WALTER SALLES BRASIL 1998</p>
            </section>

            <section className="brasilidade__conteudo__filmes-card">
              <img
                src="./img/film/auto-da-compadecida.png"
                alt="O Auto da Compadecida"
                draggable="false"
              />
              <h3 className="p1">O AUTO DA COMPADECEIDA</h3>
              <p className="p2">GUEL ARRAES BRASIL 2000</p>
            </section>

            <section className="brasilidade__conteudo__filmes-card">
              <img
                src="./img/film/tropa-de-elite.png"
                alt="Tropa de Elite"
                draggable="false"
              />
              <h3 className="p1">TROPA DE ELITE</h3>
              <p className="p2">JOSE PADILHA BRASIL 2007</p>
            </section>

            <section className="brasilidade__conteudo__filmes-card">
              <img
                src="./img/film/ainda-estou-aqui.png"
                alt="Ainda Estou Aqui"
                draggable="false"
              />
              <h3 className="p1">AINDA ESTOU AQUI</h3>
              <p className="p2">WALTER SALLES BRASIL 2024</p>
            </section>

            <section className="brasilidade__conteudo__filmes-card">
              <img
                src="./img/film/que-horas-ela-volta.png"
                alt="Que Horas Ela Volta?"
                draggable="false"
              />
              <h3 className="p1">QUE HORAS ELA VOLTA?</h3>
              <p className="p2">ANNA MUYLAERT BRASIL 2015</p>
            </section>

            <section className="brasilidade__conteudo__filmes-card">
              <img
                src="./img/film/a-vida-invisivel.png"
                alt="A Vida Invisível"
                draggable="false"
              />
              <h3 className="p1">A VIDA INVISÍVEL</h3>
              <p className="p2">KLEBER MENDONÇA FILHO BRASIL 2019</p>
            </section>

            <section className="brasilidade__conteudo__filmes-card">
              <img
                src="./img/film/bacurau.png"
                alt="Bacurau"
                draggable="false"
              />
              <h3 className="p1">BACURAU</h3>
              <p className="p2">
                KLEBER MENDONÇA FILHO E JULIANO DORNELLES BRASIL 2019
              </p>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
