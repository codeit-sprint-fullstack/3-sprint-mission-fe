import IdInput from '@/components/loginpage/IdInput';
import LoginButton from '@/components/loginpage/LoginButton';
import PwInput from '@/components/loginpage/PwInput';
import RegisterLinkButton from '@/components/loginpage/RegisterLinkButton';
import WebLogin from '@/components/loginpage/webLogin';
import styles from '@/css/login.module.css';
import Image from 'next/image';

export default function LoginPage() {
    return (
        <div className={styles.loginMain}>
            <Image
                width={396}
                height={132}
                src="/images/PandaLogo.png"
                alt="PandaLogo"
            />
            <IdInput />
            <PwInput />
            <LoginButton />
            <WebLogin />
            <RegisterLinkButton />
        </div>
    );
}