// normal rendring array of objects
const list_1 = [
  {
    name: 'person 1',
    age: 10,
  },
  {
    name: 'person 2',
    age: 20,
  },
  {
    name: 'person 3',
    age: 30,
  },
]

type list_1_type = {
  name: string,
  age: number
}


const Lists = () => {
  return (
    <div>
      {list_1.map((item: list_1_type) => {
        return (
          <div key={item.age}>
            {item.name + item.age}
          </div>
        )
      })}
    </div>
  )
}

export default Lists