import "./App.css";
import Navbar from "./components/Navbar"; 
import Header from "./components/Header";
import SobreNos from "./components/SobreNos";
function App() {

  return (
    <div>

      <header className="header-app">
        <h1>Energia Solar 365</h1>
        <p>Economize com o sol. Invista no seu Futuro!</p>
      </header>

      <Navbar className="navbar-app"/>  
      
         
      
      <SobreNos />

      <footer className="footer-app">
        <p>&copy; 2023 Energia Solar 365. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}

export default App;
