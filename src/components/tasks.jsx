import { useEffect, useState } from "react"


export default () => {
    const [input, setInput] = useState(null)
    const [tarefas, setTarefas] = useState([
        'Estudar React','Conseguir me mantar disciplinado'
    ])
        
  function send(e) {
      e.preventDefault()
      setTarefas([...tarefas, input])
      setInput('')
    }

    useEffect(() => {
        const tarefasStorage = localStorage.getItem('@tarefa')
        if (tarefasStorage) {
            setTarefas(JSON.parse(tarefasStorage))
        }
    }, [])
    
    useEffect(() => {
        localStorage.setItem('@tarefa', JSON.stringify(tarefas))
    },[tarefas])

    return (
      <>  
          <form onSubmit={send}>
          <label>Digite uma tarefa:</label>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="Digite uma tarefa"
            ></input><br />
            <button type="submit">Registrar</button>    
            </form>
            <hr />
            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa}>{tarefa}</li>
                ))}
            </ul>

      </>   
      
    )
}