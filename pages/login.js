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
import { useQuery, useMutation } from '@tanstack/react-query';
import { getPost } from '@/lib/api';
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
                    email: email.trim(),
                    password: password.trim(),
                });
                return response.data;
            } catch (error) {
                console.error('Axios 요청 실패:', error.response?.data || error.message);
                throw error;
            }
        },
        onSuccess: (data) => {
            setAlertMessage('로그인 성공!');
            setAlertVisible(true);
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
        console.log('email:', email, 'password:', password);
        mutation.mutate({ email, password });
    };

    return (
        <div className={styles.loginMain}>
            <Link href="/" >
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