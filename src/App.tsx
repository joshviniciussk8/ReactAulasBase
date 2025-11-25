import { use, useState } from 'react';

export function App() {
  const [hide, setHide] = useState(false);  
  return (
  <>
    {hide && <p>teste 1</p>}
    {!hide && <p>teste 2</p>}
    <button onClick={() => setHide(!hide)}>{hide ? 'Mostrar teste 2' : 'Mostrar teste 1'}</button>
  </>
    
  )
}


export function Listas(){
  const [value, setValue] = useState('');
  const [list, setList] = useState([
    {id: 1, label: 'Item 1'},
    {id: 2, label: 'Item 2'},
    {id: 3, label: 'Item 2'},
    {id: 4, label: 'Item 3'}
    ]);
  return(
    <div>
      <br />
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={() => 
          {
            setList([
            ...list,
            {id: list.length + 1, label: value}
          ])
          setValue('');
        } 
      }>Adicionar</button>
      <br />
      <ol>
        {list.map((item) => (
          <li key={item.id}>{item.label}</li>
        ))}
      </ol>
    </div>
  )
}

