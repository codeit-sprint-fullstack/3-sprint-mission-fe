import { useState } from 'react';
import IdInput from '@/components/loginpage/IdInput';
import LoginButton from '@/components/loginpage/LoginButton';
import PwInput from '@/components/loginpage/PwInput';
import RegisterLinkButton from '@/components/loginpage/RegisterLinkButton';
import WebLogin from '@/components/loginpage/webLogin';
import styles from '@/css/login.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { getPost } from '@/lib/api';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const result = useQuery({ queryKey: ['posts'], queryFn: getPost });
    console.log(result);


    const handleLogin = () => {
        if (!email || !password) {
            alert('이메일과 비밀번호를 입력해주세요.');
            return;
        }
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
            <LoginButton onLogin={handleLogin} />
            <WebLogin />
            <RegisterLinkButton />
        </div>
    );
}