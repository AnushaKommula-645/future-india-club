import Header from "./components/Header";
import Section from "./components/Section";
import { storyTemplates, postTemplates } from "./data/templates";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <Section title="📖 Story Templates" templates={storyTemplates} />
      <Section title="🖼️ Post Templates" templates={postTemplates} />
    </div>
  );
}

export default App;
