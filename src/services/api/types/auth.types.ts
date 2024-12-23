export interface SignInData {
  email: string;
  password: string;
}

export interface SignInResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export interface User {
  id: number;
  nickname: string;
  image: string | null;
  createdAt: string;
  updatedAt: string;
  email: string;
}
