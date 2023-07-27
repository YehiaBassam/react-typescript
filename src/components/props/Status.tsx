// pass props options using "|" , and pass optional props 

type StatusProps = {
  type: 'loading' | 'success' | 'error' , 
  count?: 20
}

function Status( props: StatusProps) {
  const { count = 0 } = props // this means if count comming from props => keep it , if not assign 0 to count

  let message;
  if (props.type === 'loading'){
    message = 'loading data ...'
  } else if (props.type === 'success'){
    message = 'fetch data success'
  } else {
    message = 'there was an error'
  }
  
  return (
    <>
      <div>{message}</div>
      <div>{count}</div>
    </>
  )
}

export default Status