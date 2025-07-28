import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css'; // Você pode ajustar os estilos aqui

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>Minha Empresa LTDA</h3>
          <p>CNPJ: 00.000.000/0001-00</p>
          <p>Email: contato@minhaempresa.com</p>
          <p>Endereço: Rua Getulio Vargas, 123 - Joinville/SC</p>
        </div>

        <div className="footer-social">
          <h4>Siga-nos</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Minha Empresa LTDA. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
