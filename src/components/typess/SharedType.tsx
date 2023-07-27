// shared type

import { PersonType } from "./Person.Types";
type SharedTypeProps = {
  person: PersonType,
  allPersons: PersonType[]
}

const SharedType = (props:  SharedTypeProps) => {
  return (
    <>
      <div> { props.person.first } - { props.person.last }</div>

      <ul>
        { props.allPersons.map(item => {
          return (
            <li key={item.last}>
              {item.first}   {item.last}
            </li>
              )
        })}
      </ul>
    </>
  )
}

export default SharedType