// Generic Type
type ListProps<T> = {
  // items: string[] | number[] | {}[]
  items: T[] // here T means any type 
  // onClick: (value: string | number | {}) => void
  onClick: (value: T) => void
}

const genaricLists = < T extends {} >({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
        { items.map((item, index) => {
          return (
            <div key={index} onClick={() => onClick(item)}>
              {JSON.stringify(item)}
            </div>
          )
        })
      }
    </div>
  )
}

export default genaricLists