// choose props type : primitive value or object or array

type PersonProps = {
  admin: string,
  name: {
    first: string,
    last: string,
  },
  persons: {
    title: string,
    age: number
  }[]
}

const Persons = (props:  PersonProps) => {
  return (
    <>
      <div>Persons: { props.admin }</div>
      <div> { props.name.first } - { props.name.last }</div>

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

export default Persons