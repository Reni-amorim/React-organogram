import Colab from '../Colab'
import './Time.css'

const Time = (props) => {

    // Alternativa para criar
    // const estilo = { backgroundColor: props.corSecundaria }
    // return <section className='time' style={estilo}>
    
    return (
        // props.colabs.length > 0 &&     possibilidade de "if"
        (props.colabs && props.colabs.length > 0) ? <section className='time' style={{ backgroundColor: props.corSecundaria}}>
            <h3 style={{ borderColor: props.corPrimaria}}>{props.nome}</h3>
                <div className='colabs'>
                    {props.colabs.map( colab => <Colab nome={colab.nome} cargo={colab.cargo} imagem={colab.imagem} />)}
                </div>
        </section>
        : '' 
    )
}

export default Time