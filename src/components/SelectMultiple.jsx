const SelectMultiple = ({ label, error, options = [], name, value, setValue, defaultValue = "Select One", ...rest }) => {
  return (
    <div className="grid w-full gap-2">
      <label>{label}</label>

      <div className="flex flex-wrap gap-2">
        {value && value.map((selectedValue, index) => {
          const val = options.find(e => e.value === selectedValue)

          return (
            <div key={index} className="bg-gray-200 rounded-md px-2 py-1 flex items-center">

              <span value={val?.value ?? val}>{val?.label ?? val}</span>
              <button
                type="button"
                className="ml-2 text-red-500"
                onClick={() => setValue(value.filter(v => v !== selectedValue))}
              >
                ×
              </button>
            </div>
          )
        })}
      </div>

      <select
        {...rest}
        name={name}
        value={value ?? []}
        onChange={(e) => setValue([...value, ...(Array.from(e.target.selectedOptions, option => option.value))])}
        className="grow rounded-md border-current border bg-inherit p-2 px-3 text-current outline-none capitalize"
      >
        <option >
          {defaultValue ?? 'Select One'}
        </option>
        {options.map((op, idx) => (
          typeof op === 'string' || typeof op === 'number' || typeof op === 'boolean' ? (
            !value.includes(op) && <option value={op} key={idx}>
              {op}
            </option>
          ) : (
            !value.includes(op.value) && <option value={op.value} key={idx}>
              {op.label}
            </option>
          )
        ))}
      </select>

      <span className="m-0 h-fit p-0 leading-none">
        {error && <span>{error}</span>}
      </span>
    </div>
  );
};

export default SelectMultiple;