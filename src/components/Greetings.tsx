// choose props type : primitive value or object or array

type GreetingProps = {
  name: string,
  objTest: {
    first: string,
    last: string,
  },
  persons: {
    title: string,
    age: number
  }[]
}

const Greetings = (props:  GreetingProps) => {
  return (
    <>
      <div>Greetings: { props.name }</div>
      <div> { props.objTest.first } - { props.objTest.last }</div>

      <ul>
        { props.persons.map(item => {
          return (
            <li key={item.age}>
              {item.title} : {item.age}
            </li>
              )
        })}
      </ul>
    </>
  )
}

export default Greetings