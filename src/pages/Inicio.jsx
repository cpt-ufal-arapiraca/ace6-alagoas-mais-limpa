import { useNavigate } from 'react-router-dom';

export default function Inicio() {
    const navigate = useNavigate();

    const redirecionarParaRota = (rota) => {
        navigate(rota);
    };

    return (
        <>
            <h1>Bem vindo(a) ao Alagoas Mais Limpa!</h1>
            <button onClick={() => redirecionarParaRota('/visitante')}>Sou visitante</button>
            <button onClick={() => redirecionarParaRota('/login')}>Sou Administrador</button>
        </>
    );
}
