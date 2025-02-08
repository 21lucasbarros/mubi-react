import "./Header.css";

export default function Header() {
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
            <input type="text" name="buscar" id="buscar" placeholder="Buscar" />
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
          </ul>

          <button className="cabecalho__menu__botao">
            <i className="ri-menu-line"></i>
          </button>
        </section>
      </header>
    </>
  );
}
