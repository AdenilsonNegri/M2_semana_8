import "./Produtos.css";

import placa from "../assets/placa-solar.png";
import kit from "../assets/kit-solar.png";
import inversor from "../assets/inversor-solar.png";

const produtos = [
  {
    nome: "Placa Solar 400 W",
    imagem: placa,
    descricao: "Alta eficiência para uso residencial e comercial.",
  },
  {
    nome: "Kit Solar Completo",
    imagem: kit,
    descricao: "Inclui placas, inversor, estrutura, cabos e instalação profissional.",
  },
  {
    nome: "Inversor Solar",
    imagem: inversor,
    descricao: "Transforma energia solar em energia elétrica para sua casa.",
  },
];

const Produtos = () => {
  return (
    <section id="produtos" className="produtos">
      <h2>Nossos Produtos</h2>
      <div className="grid-produtos">
        {produtos.map((item, index) => (
          <div className="card-produto" key={index}>
            <img src={item.imagem} alt={item.nome} />
            <h3>{item.nome}</h3>
            <p>{item.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Produtos;
