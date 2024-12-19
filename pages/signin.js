
import WebLogin from '@/components/loginpage/WebLogin';
import IdInputRegister from '@/components/registerPage/IdInputRegister';
import NicknameInputRegister from '@/components/registerPage/NicknameInputRegister';
import PwInputRegister from '@/components/registerPage/PwInputRegister';
import RegisterButton from '@/components/registerPage/RegisterButton';
import styles from '@/css/register.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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
                confirmValue={confirmPassword} setConfirmValue={setConfirmPassword} />
            <RegisterButton />
            <WebLogin />
        </div>
    );
}