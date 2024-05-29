import { userData } from "../../interface/userData";
import "./GenericCard.css";

export function Card({ name, email, phone, phone2, birthday, cpf, bio, profissoes }: userData){
    return(
        <div className="card">
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
            {phone2 && <p>{phone2}</p>}
            <p>{birthday}</p>
            <p>{cpf}</p>
            {bio && <p>{bio}</p>}
            {profissoes && profissoes.length > 0 && (
                profissoes?.map(profissao =>
                    <ul>
                        <li>Profissão: {profissao.nome}</li>
                        <li>Data de Inicio: {profissao.dataInicio}</li>
                    </ul>
                )
            )}
        </div>
    )
}