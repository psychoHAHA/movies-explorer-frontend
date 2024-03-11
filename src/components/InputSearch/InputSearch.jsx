import './InputSearch.css'

export default function MyInput({
  register,
  name,
  registerOptions,
  ...props
}) {
  return (
    <input
      {...register(name, registerOptions)}
      className="search__input"
      {...props}
    />
  )
}
