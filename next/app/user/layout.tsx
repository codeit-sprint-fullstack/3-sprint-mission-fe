'use client';
import Layout from '../shared/components/layout';
import Image from 'next/image';
import Link from 'next/link';
export default function UserLayout({ children }: { children: any }) {
  return (
    <Layout maxWidth="640px" marginBottom="170px" paddingTop="50px">
      <Link href={'/'}>
        <Image
          src={'/img/logo.svg'}
          alt="로그"
          width={396}
          height={132}
          style={{ marginBottom: 40 }}
        />
      </Link>
      {children}
    </Layout>
  );
}
