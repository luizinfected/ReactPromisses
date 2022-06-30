import { useEffect, useState } from "react"
// https://sujeitoprogramador.com/rn-api/?api=posts

export default (props) => {

    const [nutri, setNutri] = useState([])
    
    useEffect(() => {
        function loadAPI() {
            let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
            fetch(url)
            .then((r) => r.json())
                .then((json) => {
                setNutri(json)
            })
        }
        loadAPI()
    },[])
    return (
        <>
            <div className="container">
                <header>
                    <strong>React Nutri</strong>
                </header>

                {nutri.map((item) => {
                    return (
                        <article key={item.id} className="post">
                            <strong className="titulo">{item.titulo}</strong>
                            <p>Categoria: {item.categoria}</p> 
                            <img className="capa" src={item.capa} alt="capa" />
                            <p className="subtitulo">{item.subtitulo}</p>
                            <a className="botao">Acessar</a>
                        </article>
                    )
                })}
        </div>
        </>
    )
}