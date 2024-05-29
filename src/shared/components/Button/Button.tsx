import {
    TypeButton
} from './styles';

type ButtonProps = {
    type: 'button' | 'submit' | 'reset';
    value: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ type, value }) => {

    if(!type) throw new Error('Type is required');
    if(!value) throw new Error('Value is required');

    switch(value) {
        case 'Home':
            return (
                <TypeButton type={type} to='/'>{value}</TypeButton>
            );
        case 'submit':
        case 'reset':
            break;
        default:
            throw new Error('Invalid value');
    }

    return (
        <TypeButton type={type}>{value}</TypeButton>
    );
}

export default Button;