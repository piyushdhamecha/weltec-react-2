import { MessageErrorStyle, MessageStyle } from './Message.styled'

const Message = (props) => {
  console.log(props)
  if(props.variant === "error") {
    return <MessageErrorStyle>{props.children}</MessageErrorStyle>
  }
  
  return <MessageStyle>{props.children}</MessageStyle>
}

export default Message