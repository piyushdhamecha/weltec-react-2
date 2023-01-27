import { MessageErrorStyle } from './MessageError.styled'

const MessageError = (props) => {
  return <MessageErrorStyle>{props.children}</MessageErrorStyle>
}

export default MessageError