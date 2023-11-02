import PropTypes from 'prop-types';

const SelectElement = ({ label, fieldName, register, errors, options }) => {
  const selectElRegister = register(fieldName);
  return (
    <div className="flex flex-row items-center gap-2 w-full my-6">
      <label
        htmlFor="selectInput"
        className="text-md tex-gray-500 font-semibold"
      >
        {label}
      </label>
      <select
        id="selectInput"
        className={`border border-gray-500 rounded shadow p-1 text-sm focus:border-violet-500 hover:border-violet-500`}
        {...selectElRegister}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors[fieldName]?.type && (
        <p className="text-red-600 font-semibold text-xs" role="alert">
          {errors[fieldName].message}
        </p>
      )}
    </div>
  );
};

SelectElement.propTypes = {
  label: PropTypes.string,
  fieldName: PropTypes.string,
  register: PropTypes.func,
  errors: PropTypes.object,
  options: PropTypes.array.isRequired,
};

export default SelectElement;
