
function Input({ 
  label,
  type = 'text', 
  onChange,
  value, 
  name, 
  placeholder, 
  error = false, 
  errorMessage = ''
}) {
  return (
    <>
      <label className="text-md font-semibold text-white">{label}</label>
      <input 
        className="p-2 border border-white w-full bg-transparent text-white" 
        type={type} 
        onChange={onChange}
        value={value}
        name={name}
        placeholder={placeholder}
      />
      {error ? <p className="text-yellow-500 text-sm mt-1">{errorMessage}</p> : null }
    </>
  )
}

export default Input