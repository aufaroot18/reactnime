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
  }
`;

export default function GlobalStyle() {
  return <Global styles={styles} />;
}
