import "./PorQueInvestir.css";

const beneficios = [
  {
    titulo: "Redução da Conta",
    descricao: "Economize até 90% na conta de energia elétrica.",
  },
  {
    titulo: "Sustentabilidade",
    descricao: "Energia limpa e renovável, ajudando o planeta.",
  },
  {
    titulo: "Valorização do Imóvel",
    descricao: "Residências com placas solares aumentam até 10% no valor de mercado.",
  },
  {
    titulo: "Retorno Garantido",
    descricao: "Payback em 4-6 anos e economia mensal garantida.",
  },
];

function PorQueInvestir() {
  return (
    <section id="porque-investir" className="porque-investir">
      <h2>Por que investir em Energia Solar?</h2>
      <div className="beneficios-container">
        {beneficios.map((item, index) => (
          <div className="card-beneficio" key={index}>
            <h3>{item.titulo}</h3>
            <p>{item.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PorQueInvestir;
