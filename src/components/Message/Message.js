import {  MessageStyle } from './Message.styled'

const Message = (props) => {
  return <MessageStyle>{props.children}</MessageStyle>
}

export default Message