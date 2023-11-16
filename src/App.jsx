import { MathJaxContext } from "better-react-mathjax";
import AusmittigeLaengsdruckKraft from "./page/ausmittige-längsdruckkraft/AusmittigeLaengsdruckKraft";
import Header from "./components/header/Header";

const config = {
  "fast-preview": {
    disabled: true,
  },
  tex2jax: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
  },
  messageStyle: "none",
};

function App() {
  return (
    <MathJaxContext
      version={2}
      config={config}
      onStartup={(mathJax) => (mathJax.Hub.processSectionDelay = 0)}
    >
      <Header />
      <AusmittigeLaengsdruckKraft />
    </MathJaxContext>
  );
}

export default App;
