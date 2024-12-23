
import WebLogin from '@/components/loginpage/WebLogin';
import IdInputRegister from '@/components/registerPage/IdInputRegister';
import NicknameInputRegister from '@/components/registerPage/NicknameInputRegister';
import PwInputRegister from '@/components/registerPage/PwInputRegister';
import RegisterButton from '@/components/registerPage/RegisterButton';
import styles from '@/css/register.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery, useMutation } from '@tanstack/react-query';
import instance from '@/lib/instance';

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const router = useRouter();

    const mutation = useMutation({
        mutationFn: async ({ email, nickname, password, passwordConfirmation }) => {
            const response = await instance.post('/auth/signUp',
                { email, nickname, password, passwordConfirmation }
            );
            return response.data;
        },
        onSuccess: (data) => {
            console.log('회원가입 성공:', data);
            alert('회원가입 성공!');
            router.push('/');
        },
        onError: (error) => {
            console.error('회원가입 실패:', error);
            alert('회원가입 실패. 다시 시도해주세요.');
        },
    });

    const handleSignUp = () => {
        console.log(email);
        console.log(nickname);
        console.log(password);
        console.log(passwordConfirmation);
        if (!email || !password || !nickname || !passwordConfirmation) {
            alert('모든 필드를 입력해주세요.');
            return;
        }
        mutation.mutate({ email, nickname, password, passwordConfirmation });
    };

    return (
        <div className={styles.registerMain}>
            <Link href="/" >
                <Image
                    width={396}
                    height={132}
                    src="/images/PandaLogo.png"
                    alt="PandaLogo"
                />
            </Link>
            <IdInputRegister value={email} setValue={setEmail} />
            <NicknameInputRegister value={nickname} setValue={setNickname} />
            <PwInputRegister value={password} setValue={setPassword}
                confirmValue={passwordConfirmation} setConfirmValue={setPasswordConfirmation} />
            <RegisterButton handleSignUp={handleSignUp} />
            <WebLogin />
        </div>
    );
}