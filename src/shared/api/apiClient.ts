import ky, { HTTPError } from 'ky';
import { API_TIMEOUT, API_URL } from '@/shared/config/constants';

const apiClient = ky.create({
  prefixUrl: API_URL,
  timeout: API_TIMEOUT,
  hooks: {
    beforeRequest: [
      (request) => {
        // 공통 헤더 설정
        request.headers.set('Content-Type', 'application/json');
      },
    ],
    afterResponse: [
      async (request, options, response) => {
        if (!response.ok) {
          // 에러 처리 로직
          const error: HTTPError = await response.json();
          throw new Error(error.message);
        }
      },
    ],
  },
});

export default apiClient;
