import "./App.css";
import Navbar from "./components/Navbar"; 
import Header from "./components/Header";
function App() {

  return (
    <div>
      

      <header className="header-app">
        <h1>Energia Solar 365</h1>
        <p>Economize com o sol. Invista no seu Futuro!</p>
      </header>

    <Navbar />
      
      <main>
        <section id="Sobre">
          <h2>Sobre Nós</h2>
          <p>Somos uma empresa dedicada a fornecer soluções de energia solar para residências e empresas.</p>
        </section>

        <section id="Benefícios">
          <h2>Benefícios</h2>
          <ul>
            <li>Redução de custos com energia</li>
            <li>Sustentabilidade</li>
            <li>Valorização do imóvel</li>
          </ul>
        </section>

        <section id="Produtos">
          <h2>Nossos Produtos</h2>
          <p>Oferecemos uma variedade de produtos, incluindo painéis solares, inversores e sistemas de armazenamento de energia.</p>
        </section>

        <section id="Orçamento">
          <h2>Solicite um Orçamento</h2>
          <p>Entre em contato conosco para receber um orçamento personalizado.</p>
        </section>
      </main>

      <footer className="footer-app">
        <p>&copy; 2023 Energia Solar 365. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}

export default App;
