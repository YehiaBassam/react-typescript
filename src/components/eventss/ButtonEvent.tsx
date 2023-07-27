// pass event and parameters with events like onclick
import Button from "./Button"

const BuutonEvent = () => {
  return (
    <div>
      <Button handleClick={(event, id) => console.log('event + id', event, id)}></Button>
    </div>
  )
}

export default BuutonEvent