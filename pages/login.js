import { useState } from 'react';
import { useRouter } from 'next/router';
import IdInput from '@/components/loginpage/IdInput';
import LoginButton from '@/components/loginpage/LoginButton';
import PwInput from '@/components/loginpage/PwInput';
import RegisterLinkButton from '@/components/loginpage/RegisterLinkButton';
import WebLogin from '@/components/loginpage/webLogin';
import styles from '@/css/login.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useMutation } from '@tanstack/react-query';
import instance from '@/lib/instance';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAlertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const router = useRouter();

    const mutation = useMutation({
        mutationFn: async ({ email, password }) => {
            try {
                const response = await instance.post('/auth/signIn', {
                    email,
                    password,
                });

                // 토큰과 사용자 정보를 localStorage에 저장
                localStorage.setItem('accessToken', response.data.accessToken);
                localStorage.setItem('refreshToken', response.data.refreshToken);
                localStorage.setItem('user', JSON.stringify(response.data.user));  // 사용자 정보 저장

                return response.data;
            } catch (error) {
                console.error('Axios 요청 실패:', error.response?.data || error.message);
                throw error;
            }
        },
        onSuccess: (data) => {
            setAlertMessage('로그인 성공!');
            setAlertVisible(true);

            // 로그인 성공 후, 원하는 페이지로 리다이렉션
            router.push('/');  // 예시로 홈 페이지로 리다이렉션
        },
        onError: (error) => {
            setAlertMessage('로그인 실패. 다시 시도해주세요.');
            setAlertVisible(true);
        },
    });

    const handleLogin = () => {
        if (!email || !password) {
            alert('이메일과 비밀번호를 입력해주세요.');
            setAlertVisible(true);
            return;
        }
        mutation.mutate({ email, password });
    };

    return (
        <div className={styles.loginMain}>
            <Link href="/">
                <Image
                    width={396}
                    height={132}
                    src="/images/PandaLogo.png"
                    alt="PandaLogo"
                />
            </Link>
            <IdInput value={email} setValue={setEmail} />
            <PwInput value={password} setValue={setPassword} />
            <LoginButton
                handleLogin={handleLogin}
                isAlertVisible={isAlertVisible}
                alertMessage={alertMessage}
                setAlertVisible={setAlertVisible} />
            <WebLogin />
            <RegisterLinkButton />
        </div>
    );
}
