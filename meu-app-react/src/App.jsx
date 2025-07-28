import "./App.css";
import Navbar from "./components/Navbar"; 
import Header from "./components/Header";
import SobreNos from "./components/SobreNos";
import PorQueInvestir from "./components/PorQueInvestir";
import Produtos from "./components/Produtos";
import Orcamento from "./components/Orcamento"; 
function App() {

  return (
    <div>

      <header className="header-app">
        <h1>Energia Solar 365</h1>
        <p>Economize com o sol. Invista no seu Futuro!</p>
      </header>

      <Navbar className="navbar-app"/>  
      
         
      
      <SobreNos className="sobre-nos"/>

      <PorQueInvestir className="porque-investir" />

      <Produtos className="produtos" />

      <Orcamento className="orcamento" />

      <footer className="footer-app">
        <p>&copy; 2023 Energia Solar 365. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}

export default App;
