// Google tag (gtag.js)
(function () {
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-4F0RMGD7KM';
  document.head.appendChild(script);

  script.onload = function () {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-4F0RMGD7KM');
  };
})();

// Global Open Graph data
const ogData = {
  title: '판다마켓',
  type: 'website',
  image: '/images/home/bottom-banner-image.png',
  url: `${location.href}`,
  description: '일상에서 모든 물건을 거래해보세요',
  locale: 'ko_KR',
  site_name: '판다마켓',
};

document.addEventListener('DOMContentLoaded', () => {
  function createOrUpdateMetaTag(name, content, isProperty = false) {
    // 표준 메타태그인지 Open Graph 메타태그인지 구별하기 위해 Property 여부를 확인
    let metadata = document.querySelector(`meta[${isProperty ? 'property' : 'name'}="${name}"]`);
    if (!metadata) {
      metadata = document.createElement('meta');
      if (isProperty) {
        // Open Graph 메타태그는 property 속성을 사용
        metadata.setAttribute('property', name);
      } else {
        // 표준 메타태그는 name 속성을 사용
        metadata.name = name;
      }
      document.head.appendChild(metadata);
    }
    // 메타태그의 content 속성을 설정
    metadata.content = content;
  }

  // 표준 메타태그를 생성/수정
  createOrUpdateMetaTag('title', ogData.title);
  createOrUpdateMetaTag('description', ogData.description);

  // 오픈그래프 메타태그를 생성/수정
  for (const key in ogData) {
    createOrUpdateMetaTag(`og:${key}`, ogData[key], true);
  }
});
