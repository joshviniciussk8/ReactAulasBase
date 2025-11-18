interface ICardProps {
  title: string;
  // React.ReactNode é um tipo especial do React que representa qualquer coisa que pode ser renderizada pelo React
  children: React.ReactNode;
  
}

const Card = (props: ICardProps) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', width: '200px' }}>
        <br/>
        <span>{props.title} </span>
        <br/>
        <div>{props.children}</div>       
        <br/>
        <div>Footer</div>
    </div>
  )
}











export function App() {
  
  return (
    <>
      olá
      <p>Card:</p>
      <Card title="Card 1" >Conteúdo do Card 1</Card>
      <Card title="Card 2" >Conteúdo do Card 2</Card>
      <Card title="Card 3" >Conteúdo do Card 3</Card>
      <Card title="Card 4" >Conteúdo do Card 4</Card>
    </>
  )
}


