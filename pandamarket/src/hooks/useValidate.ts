
import { useState } from "react";

// 초기값과 에러 타입 정의
type ValidationValues = {
  nickname: string;
  email: string;
  password: string;
  passwordConfirmation?: string;
};

type ValidationErrors = Partial<ValidationValues>;

const useValidate = (initialValues: ValidationValues) => {
  const [values, setValues] = useState<ValidationValues>(initialValues);
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validate = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (!values.email) {
      newErrors.email = "이메일을 입력해 주세요.";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "잘못된 이메일입니다.";
    }

    if (!values.password) {
      newErrors.password = "비밀번호를 입력해 주세요.";
    } else if (values.password.length < 8) {
      newErrors.password = "비밀번호는 최소 8자 이상이어야 합니다.";
    }

    if (values.passwordConfirmation !== undefined) {
      if (!values.passwordConfirmation) {
        newErrors.passwordConfirmation = "비밀번호 확인을 입력해 주세요.";
      } else if (values.password !== values.passwordConfirmation) {
        newErrors.passwordConfirmation = "비밀번호가 일치하지 않습니다.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return { values, setValues, errors, validate, handleChange };
};

export default useValidate;