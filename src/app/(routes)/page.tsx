import CommonBtn from '@/components/common/commonBtn/commonBtn';
import Banner from '@/components/home/banner';
import TopBannerImage from '@/public/images/home/Img_home_top.png';
import BottomBannerImage from '@/public/images/home/Img_home_bottom.png';
import ContentSection from '@/components/home/contentSection';
import PopularProduct from '@/public/images/home/2.popular_product.jpg';
import SearchProduct from '@/public/images/home/3.search_product.jpg';
import RegisterProduct from '@/public/images/home/4.register_product.jpg';
import TextContent from '@/components/home/textContent';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='w-full'>
      <Banner image={TopBannerImage}>
        <div className='text-[32px] md:text-[40px] xl:text-[40px] font-bold flex items-center mb-8 break-keep text-center md:text-center xl:text-left'>
          일상의 모든 물건을 거래해보세요
        </div>
        <Link href='items'>
          <CommonBtn className='rounded-full text-lg md:text-xl xl:text-xl h-[48px] md:h-[56px] xl:h-[56px] w-[240px] md:w-[357px] xl:w-[357px]'>
            구경하러 가기
          </CommonBtn>
        </Link>
      </Banner>
      <ContentSection
        align='left'
        image={PopularProduct}
      >
        <TextContent
          subTitle='Hot item'
          title='인기 상품을 확인해보세요'
          description='가장 HOT한 중고거래 물품을 판다 마켓에서 확인해 보세요'
          align='left'
        />
      </ContentSection>
      <ContentSection
        align='right'
        image={SearchProduct}
      >
        <TextContent
          subTitle='Search'
          title='구매를 원하는 상품을 검색하세요'
          description='구매하고 싶은 물품은 검색해서 쉽게 찾아보세요'
          align='right'
        />
      </ContentSection>
      <ContentSection
        align='left'
        image={RegisterProduct}
      >
        <TextContent
          subTitle='Register'
          title='판매를 원하는 상품을 등록하세요'
          description='어떤 물건이든 판매하고 싶은 상품을 쉽게 등록하세요'
          align='left'
        />
      </ContentSection>
      <Banner image={BottomBannerImage}>
        <div className='text-[32px] md:text-[40px] xl:text-[40px] font-bold flex items-center mb-8 break-keep text-center md:text-center xl:text-left w-[300px]'>
          믿을 수 있는 판다마켓 중고 거래
        </div>
      </Banner>
    </div>
  );
}
