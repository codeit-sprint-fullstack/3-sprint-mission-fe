import Footer from '@/components/layout/Footer';
import GNB from '@/components/layout/GNB';
import ModalsContainer from '@/components/modal/modalsContainer';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <GNB />
      <main className='flex-1 w-full flex flex-col items-center'>
        {children}
      </main>
      <ModalsContainer />
      <Footer />
    </>
  );
}
