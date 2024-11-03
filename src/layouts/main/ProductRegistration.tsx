import styled from 'styled-components';
import Button from '../../shared/Button';
import HashtagList from '../../shared/HashtagList';
import { useState } from 'react';

const ProductRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    tag: '',
  });

  const [error, setError] = useState({
    name: '',
    description: '',
    price: '',
    tag: '',
  });

  const [hashtags, setHashtags] = useState<string[]>([]);

  const onRemove = (hashtag: string) => {
    console.log(hashtag);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <Main>
      <Form>
        <FormHeader>
          <Title>상품 등록하기</Title>
          <FormButton onClick={handleSubmit}>등록</FormButton>
          {/* 색상 적용 */}
        </FormHeader>

        <FormField>
          <Label htmlFor="name">상품명</Label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="상품명을 입력해주세요"
          />
          <ErrorMessage>10자 이내로 입력해주세요</ErrorMessage>
        </FormField>
        <FormField>
          <Label htmlFor="description">상품 소개</Label>
          <Textarea
            name="description"
            id="description"
            placeholder="상품 소개를 입력해주세요"
            minLength={10}
          />
          <ErrorMessage>10자 이상 입력해주세요</ErrorMessage>
        </FormField>
        <FormField>
          <Label htmlFor="price">판매가격</Label>
          <Input
            type="number"
            id="price"
            name="price"
            placeholder="판매 가격을 입력해주세요"
          />
          <ErrorMessage>숫자로 입력해주세요</ErrorMessage>
        </FormField>
        <FormField>
          <Label htmlFor="tag">태그</Label>
          <Input
            type="text"
            id="tag"
            name="tag"
            placeholder="태그를 입력해주세요"
          />
          <ErrorMessage>5자 이내로 입력해주세요</ErrorMessage>
          <HashtagList hashtags={hashtags} onRemove={onRemove} />
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

const FormButton = styled.button`
  background-color: var(--primary-blue-color);
  color: white;
  border-radius: 0.8rem;
  border: none;
  padding: 1.2rem 2.3rem;
  font-family: 'Pretendard';
  font-size: 1.6rem;
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;
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
