// import buttonCss from './Button.module.css'

import { ButtonStyled } from './Button.styled'

const Button = () => {
  // console.log({ buttonCss })
  return (
    <ButtonStyled variant="primary">Submit</ButtonStyled>
    // <button 
    //   style={{
    //     fontSize: "20px"
    //   }}
    //   className={`${buttonCss.btn} ${buttonCss.primary}`}
    // >
    //   Submit
    // </button>
  )
}

export default Button