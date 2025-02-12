import './Colab.css'

// Other form to pass props is select field - like { nome, imagem, cargo} in props
const Colab = (props) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{ backgroundColor: props.corDeFundo }}>
                <img src={props.imagem} alt={props.nome}/>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}

export default Colab