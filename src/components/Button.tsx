// pass event and parameters with events like onclick

type ButtonProps = {
  handleClick: (event: React.MouseEvent, id: number) => void;
  // handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void; // you can add HTMLButtonElement or not
}

const Button = (props: ButtonProps) => {
  return (
    <button onClick={(event) => props.handleClick(event, 300)}>Button</button>
  )
}

export default Button