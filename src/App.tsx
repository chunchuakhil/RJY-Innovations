import "./styles.css";

import { GlobalStyles } from "../styles/Global";
import { Header } from "../styles/Header.styled";
import { Footer } from "../styles/Footer.styled";

export default function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header>Game of Thrones Quotes</Header>

      <Footer>
        <p>Made in India</p>
      </Footer>
    </div>
  );
}
