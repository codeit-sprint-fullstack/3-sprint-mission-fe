import styled from 'styled-components';
import HashtagList from '../../shared/HashtagList';
import { useState } from 'react';
import useValidation from '../../hooks/useValidation';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

type FormDataProps = {
  name: string;
  description: string;
  price: number;
  hashtagList?: string[];
};

const defaultFormData: FormDataProps = {
  name: '',
  description: '',
  price: 0,
  hashtagList: [],
};

const ProductRegistration = () => {
  const [formData, setFormData] = useState<FormDataProps>(defaultFormData);
  const [hashtag, setHashtag] = useState<string>('');

  const { error, isActiveButton } = useValidation(formData, hashtag);

  const navigate = useNavigate();

  const onHashTagRemove = (hashtag: string) => {
    if (formData.hashtagList === undefined) return;
    setFormData((prevData) => ({
      ...prevData,
      hashtagList: (prevData.hashtagList ?? []).filter(
        (tag) => tag !== hashtag
      ),
    }));
  };

  const handleFormButtonSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (error.name || error.description || error.hashtag) return;

    // 서버로 데이터 전송
    const data = {
      name: formData.name,
      description: formData.description,
      price: formData.price,
      tags: formData.hashtagList,
    };

    const postRegisterProduct = async (data: FormDataProps) => {
      try {
        const response = await axios.post(
          'http://localhost:8000/products ',
          data
        );

        const id = response.data._id;

        if (response.status === 201) {
          alert('상품이 등록되었습니다');
          setFormData(defaultFormData);
          setHashtag('');
          navigate(`/products/${id}`);
        }
      } catch (error) {
        console.error(error);
      }
    };
    postRegisterProduct(data);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setFormData({ ...formData, price: Number(value) });
  };

  const handleHashTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHashtag(e.target.value);
  };

  const handleHashTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      setHashtag((prev) => prev.slice(0, prev.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();

      if (hashtag.length > 5 || hashtag.length === 0) return;

      // 이미 해시태그 목록에 없다면 추가
      if (!formData.hashtagList?.includes(hashtag)) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          hashtagList: [...(prevFormData.hashtagList ?? []), hashtag],
        }));
      }
      setHashtag(''); // 추가 후 입력 필드 비우기
    }
  };

  return (
    <Main>
      <Form>
        <FormHeader>
          <Title>상품 등록하기</Title>
          {/* 버튼 컴포넌트를 활용해서 색상, 이벤트를 전달하면서 활용하고 싶은데 타입에서 이벤트의 종류가 많아서 오류가 많이뜨는데 어떻게 해소하지? */}
          <FormButton
            $isActive={isActiveButton}
            disabled={!isActiveButton}
            onClick={handleFormButtonSubmit}
          >
            등록
          </FormButton>
        </FormHeader>

        <FormField>
          <Label htmlFor="name">상품명</Label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="상품명을 입력해주세요"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            value={formData.name}
          />
          {error.name && <ErrorMessage>10자 이내로 입력해주세요</ErrorMessage>}
        </FormField>
        <FormField>
          <Label htmlFor="description">상품 소개</Label>
          <Textarea
            name="description"
            id="description"
            placeholder="상품 소개를 입력해주세요"
            minLength={10}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            value={formData.description}
          />
          {error.description && (
            <ErrorMessage>10자 이상 입력해주세요</ErrorMessage>
          )}
        </FormField>
        <FormField>
          <Label htmlFor="price">판매가격</Label>
          <Input
            type="text"
            id="price"
            name="price"
            placeholder="판매 가격을 입력해주세요"
            value={formData.price.toLocaleString()}
            onChange={handlePriceChange}
          />
          {/* {error.price && <ErrorMessage>숫자로 입력해주세요</ErrorMessage>} */}
        </FormField>

        {/* 엔터를 치면 hashtags 배열에 추가됨 */}
        <FormField>
          <Label htmlFor="tag">태그</Label>
          <Input
            type="text"
            id="tag"
            name="tag"
            placeholder="태그를 입력해주세요"
            onChange={handleHashTagChange}
            onKeyDown={handleHashTagKeyDown}
            value={hashtag}
          />
          {error.hashtag && (
            <ErrorMessage>5자 이내로 입력해주세요</ErrorMessage>
          )}
          <HashtagList
            hashtags={formData.hashtagList}
            onRemove={onHashTagRemove}
          />
        </FormField>
      </Form>
    </Main>
  );
};

export default ProductRegistration;

const Main = styled.main`
  box-sizing: border-box;
  margin-top: 7rem;
  width: 100%;
  padding: 2.4rem 2.4rem 16rem;
`;

const Form = styled.form`
  max-width: 120rem;
  margin: 0 auto;
`;

const FormButton = styled.button<{ $isActive: boolean }>`
  background-color: ${({ $isActive }) =>
    $isActive
      ? 'var(--button-active-bg-color)'
      : 'var(--button-inactive-bg-color)'};

  color: white;
  border-radius: 0.8rem;
  border: none;
  padding: 1.2rem 2.3rem;
  font-family: 'Pretendard';
  font-size: 1.6rem;
  font-weight: 500;
  white-space: nowrap;
  cursor: ${({ $isActive }) => ($isActive ? 'pointer' : 'not-allowed')};
`;

const FormHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.4rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

const Label = styled.label`
  font-size: 1.8rem;
  font-weight: 700;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-bottom: 3.2rem;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 5.6rem;
  padding: 1.6rem 2.4rem;
  border: none;
  border-radius: 1.2rem;
  background: var(--input-background-color);
  font-size: 1.6rem;

  &::placeholder {
    color: var(--input-placeholder-font-color);
  }
`;

const Textarea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 28rem;
  padding: 1.6rem 2.4rem;
  border: none;
  border-radius: 1.2rem;
  background: var(--input-background-color);
  font-size: 1.6rem;
  resize: none;

  &::placeholder {
    color: var(--input-placeholder-font-color);
  }
`;

const ErrorMessage = styled.div`
  color: var(--error-font-color);
  font-size: 1.4rem;
  font-weight: 600;
  margin-left: 1.4rem;
`;
