import { useState } from 'react';

const useValidate = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!values.email) {
      newErrors.email = '이메일을 입력해 주세요.';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = '잘못된 이메일입니다.';
    }

    if (!values.password) {
      newErrors.password = '비밀번호를 입력해 주세요.';
    } else if (values.password.length < 8) {
      newErrors.password = '비밀번호는 최소 8자 이상이어야 합니다.';
    }

    if (!values.passwordConfirmation) {
      newErrors.passwordConfirmation = '비밀번호 확인을 입력해 주세요.';
    } else if (values.password !== values.passwordConfirmation && values.password.length !== values.passwordConfirmation.length) {
      newErrors.passwordConfirmation = '비밀번호가 일치하지 않습니다.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return { values, setValues, errors, validate, handleChange };
};

export default useValidate;
