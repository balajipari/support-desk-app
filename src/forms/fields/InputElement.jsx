import PropTypes from 'prop-types';

const InputElement = ({
  label,
  placeholder,
  fieldName,
  register,
  errors,
}) => {
  const registerOptions = { 
    required: 'Required field',
    maxLength: {
      value: 80,
      message: 'Should not exceed 80 characters'
    }
  }
  const inputElRegister = register(fieldName, registerOptions);
  return (
    <div className='flex flex-col items-start gap-2 w-full my-2'>
      <label htmlFor='textInput' className='text-md tex-gray-500 font-semibold'>{label}</label>
      <input
        id='textInput'
        className={`border w-80 border-gray-500 rounded shadow p-1 text-sm placeholder:font-semibold placeholder:text-grey-500 focus:border-violet-500 hover:border-violet-500`}
        placeholder={placeholder}
        type={'text'}
        {...inputElRegister}
      />
      {errors[fieldName]?.type && (
        <p className='text-red-600 font-semibold text-xs' role='alert'>
          {errors[fieldName].message}
        </p>
      )}
    </div>
  );
};

export default InputElement

InputElement.defaultProps = {
  type: 'text'
};

InputElement.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  fieldName: PropTypes.string,
  register: PropTypes.func,
  errors: PropTypes.object
};
