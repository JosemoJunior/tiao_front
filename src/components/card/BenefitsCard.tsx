import { CiCircleCheck } from "react-icons/ci";
import './BenefitsCard.css';


const BenefitsCard = () => {
  return (
    <div className="card">
      <h2 className="title">Benefícios para profissionais</h2>
      <ul className="list-none space-y-2">
        <BenefitItem text="Visibilidade ampliada em mercado online;" />
        <BenefitItem text="Acesso a oportunidades de trabalho;" />
        <BenefitItem text="Facilidade de gerenciamento de clientes;" />
        <BenefitItem text="Feedbacks e avaliações dos clientes;" />
        <BenefitItem text="Promoção da sua marca pessoal." />
      </ul>
    </div>
  );
};

const BenefitItem = ({ text }: { text: string }) => {
  return (
    <li className="list-item"> {/* Usando a classe CSS "list-item" */}
      <CiCircleCheck />
      <span className="text">{text}</span> {/* Usando a classe CSS "text" */}
    </li>
  );
};

export default BenefitsCard;