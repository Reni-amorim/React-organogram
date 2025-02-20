import './CampoTexto.css'
const CampoTexto = (props) => {
    
    const placeholderModificada = `${props.placeholder}...`
    
    const digitado = (e) => {
        props.alterar(e.target.value)
    }

    //const [valor, setValor] = useState('')
    //
    //const digitado = (e) => {
    //    setValor(e.target.value)
    //    console.log(valor)
    //}
    
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={digitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto