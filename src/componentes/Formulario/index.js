import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {
    
    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

const aoSalvar = (evento) => {
    evento.preventDefault()
//    console.log('Salvando card =>', nome, cargo, imagem, time)
    // Adicione a lógica para salvar o card no banco de dados
    props.colabCadastrado({
        nome,
        cargo,
        imagem,
        time
    })
}

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2> Prencha os dados para criar o card do colaborador </h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nome} alterar={valor => setNome(valor)}/>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" valor={cargo} alterar={valor => setCargo(valor)}/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} alterar={valor => setImagem(valor)}/>
                <ListaSuspensa obrigatorio={true} label="Time" itens={times} valor={time} alterar ={valor => setTime(valor)}/>
                <Botao> Criar Card </Botao> 
            </form>
        </section>
    )
}

export default Formulario