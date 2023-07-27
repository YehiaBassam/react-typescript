// import child component

type HocProps = {
  children: React.ReactNode // when insert component as child
}

const HOC = (props : HocProps) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default HOC