const Select = ({ label, error, options = [], name, value, setValue, defaultValue = "Select One" }) => {
  return (
    <div className="grid w-full gap-2">
      <label>{label}</label>

      <select
        name={name}
        value={value ?? defaultValue}
        onChange={(e) => setValue(e.target.value)}
        className="grow rounded-md border-current border bg-inherit p-2 px-3 text-current outline-none capitalize"
      >

        <option >
          {defaultValue}
        </option>
        {options.map((op, idx) => (
          typeof op === 'string' || typeof op === 'number' || typeof op === 'boolean' ? (
            <option value={op} key={idx}>
              {op}
            </option>
          ) : (
            <option value={op.value} key={idx}>
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

export default Select;
