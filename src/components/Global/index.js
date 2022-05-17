const { css, Global } = require("@emotion/react");

const styles = css`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  img {
    display: block;
    max-width: 100%;
  }

  body {
    font-family: "Montserrat", sans-serif;
    color: #073b4c;
  }

  h1 {
    font-size: 3.052rem;
  }

  h2 {
    font-size: 2.441rem;
  }

  h3 {
    font-size: 1.953rem;
  }

  h4 {
    font-size: 1.563rem;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;

export default function GlobalStyle() {
  return <Global styles={styles} />;
}
