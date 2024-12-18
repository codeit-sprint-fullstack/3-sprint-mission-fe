import WebLogin from '@/components/loginpage/webLogin';
import IdInputRegister from '@/components/registerPage/IdInputRegister';
import NicknameInputRegister from '@/components/registerPage/NicknameInputRegister';
import PwInputRegister from '@/components/registerPage/PwInputRegister';
import RegisterButton from '@/components/registerPage/RegisterButton';
import styles from '@/css/register.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function RegisterPage() {
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
            <IdInputRegister />
            <NicknameInputRegister />
            <PwInputRegister />
            <RegisterButton />
            <WebLogin />
        </div>
    );
}