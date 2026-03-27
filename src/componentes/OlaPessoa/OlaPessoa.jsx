import './OlaPessoa.css';

function OlaPessoa(props) {
    const nome = props.nome || 'Everton';
    return (
        <div className="ola-pessoa">
            <h1>Olá, {nome}!</h1>
        </div>
    );
        
}

export default OlaPessoa;   