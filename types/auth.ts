export type AuthSignUpRequest = {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
};

type User = {
  id: number;
  email: string;
  image: string | null;
  nickname: string;
  updatedAt: string;
  createdAt: string;
};

export type AuthSignUpResponse = {
  accessToken: string;
  refreshToken: string;
  user: User;
};

export type AuthSignInRequest = {
  email: string;
  password: string;
};

export type AuthSignInResponse = {
  accessToken: string;
  refreshToken: string;
  user: User;
};

export type AuthRefreshTokenRequest = string;
export type AuthRefreshTokenResponse = string;
