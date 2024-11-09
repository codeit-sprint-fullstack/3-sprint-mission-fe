import { useEffect, useState } from 'react';

type FormDataProps = {
  name: string;
  description: string;
  price: number;
  hashtagList?: string[];
};

type ErrorProps = {
  name: boolean;
  description: boolean;
  hashtag: boolean;
};

const useValidation = (formData: FormDataProps, hashtag: string) => {
  const [error, setError] = useState<ErrorProps>({
    name: false,
    description: false,
    // price: false, -> 숫자로만 입력받으면 되니 굳이 에러가 필요없다고 생각하여 제거함
    hashtag: false,
  });

  const [isActiveButton, setIsActiveButton] = useState<boolean>(false);

  useEffect(() => {
    const newError = {
      name: !(1 <= formData.name.length && formData.name.length <= 10),
      description: !(10 <= formData.description.length),
      hashtag: !(hashtag.length <= 5),
    };
    setError(newError);

    const isFormChanged =
      formData.name !== '' ||
      formData.description !== '' ||
      formData.price !== 0 ||
      (formData.hashtagList !== undefined && formData.hashtagList.length > 0);

    const isValid =
      !newError.name &&
      !newError.description &&
      !newError.hashtag &&
      isFormChanged;

    setIsActiveButton(isValid);
  }, [formData, hashtag]);

  return { error, isActiveButton };
};

export default useValidation;
