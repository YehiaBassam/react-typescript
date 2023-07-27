// pass children data

type HaveChildrensProps = {
  children: string
}

const HaveChiildrens = (props: HaveChildrensProps) => {
  return (
    <div>{props.children}</div>
  )
}

export default HaveChiildrens