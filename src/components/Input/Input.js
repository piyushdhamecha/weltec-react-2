import inputCss from './Input.module.css'

const Input = () => {
  console.log({ inputCss })
  return <input className={`${inputCss.input} ${inputCss.primary}`} type="text" />
}

export default Input