import { FieldValues } from 'react-hook-form';
import { CommonInputSectionProps } from '../../sign/types';
import cn from '@/lib/cn';
import { useState } from 'react';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CommonInputSection<T extends FieldValues>({
  register,
  errors,
  label,
  name,
  placeholder,
  type = 'text',
  validation,
  inputType = 'input',
  rows = 5,
}: CommonInputSectionProps<T>) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  const inputProps = {
    type: isPassword ? (showPassword ? 'text' : 'password') : type,
    className: cn('input-base', errors[name] && 'error-input'),
    placeholder,
    ...register(name, validation),
  };

  return (
    <div className='input-section'>
      <label className='input-label'>{label}</label>
      <div className='relative'>
        {inputType === 'textarea' ? (
          <textarea
            rows={rows}
            {...inputProps}
          />
        ) : (
          <input {...inputProps} />
        )}
        {isPassword && (
          <FontAwesomeIcon
            icon={showPassword ? faEye : faEyeSlash}
            onClick={() => setShowPassword(!showPassword)}
            className='absolute right-[25px] top-[20px] text-text-gray-primary cursor-pointer'
          />
        )}
      </div>
      {errors[name]?.message && (
        <span className='error-message'>{String(errors[name]?.message)}</span>
      )}
    </div>
  );
}
