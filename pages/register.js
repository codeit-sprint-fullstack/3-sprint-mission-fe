import WebLogin from '@/components/loginpage/webLogin';
import IdInputRegister from '@/components/registerPage/IdInputRegister';
import NicknameInputRegister from '@/components/registerPage/NicknameInputRegister';
import PwInputRegister from '@/components/registerPage/PwInputRegister';
import RegisterButton from '@/components/registerPage/RegisterButton';
import styles from '@/css/register.module.css';
import Image from 'next/image';

export default function RegisterPage() {
    return (
        <div className={styles.registerMain}>
            <Image
                width={396}
                height={132}
                src="/images/PandaLogo.png"
                alt="PandaLogo"
            />
            <IdInputRegister />
            <NicknameInputRegister />
            <PwInputRegister />
            <RegisterButton />
            <WebLogin />
        </div>
    );
}