import PropTypes from 'prop-types';

const TextAreaElement = ({
  label,
  placeholder,
  fieldName,
  register,
  errors,
}) => {
  const textAreaElRegister = register(fieldName);
  return (
    <div className="flex flex-col text-left gap-2 my-4 w-full">
      <label
        htmlFor="textAraeInput"
        className="text-md tex-gray-500 font-semibold"
      >
        {label}
      </label>
      <textarea
        id="textAraeInput"
        rows={8}
        className={`border w-80 border-gray-500 rounded shadow p-1 text-sm placeholder:font-semibold 
        placeholder:text-grey-500 focus:border-violet-500 hover:border-violet-500`}
        placeholder={placeholder}
        {...textAreaElRegister}
      />
      {errors[fieldName]?.type && (
        <p className="text-red-600 font-semibold text-xs" role="alert">
          {errors[fieldName].message}
        </p>
      )}
    </div>
  );
};

TextAreaElement.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  fieldName: PropTypes.string,
  register: PropTypes.func,
  errors: PropTypes.object,
};

export default TextAreaElement;
