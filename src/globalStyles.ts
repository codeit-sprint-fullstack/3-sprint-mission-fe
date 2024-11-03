import { createGlobalStyle } from 'styled-components';
import './assets/fonts/fonts.css';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-blue-color: #3692FF;

    /* ----- '/' 페이지 ----- */
    --home-banner-bh-color: #cfe5ff;

    /* ----- '/items' 페이지 ----- */

    /* 네비게이션 관련 색상 */
    --nav-menu-gray-font-color: #4B5563;
    
    --navbar-border-color: #DFDFDF;

    /* 상품 관련 색상 */
    --product-title-font-color: #111827;
    --product-item-content-font-color: #1F2937;
    --like-count-font-color:#4B5563;

    /* 푸터 관련 색상 */
    --footer-font-color: #9CA3AF;
    --footer-bg-color: #111827;
    --mobile-footer-font-color: #9ca3af;

    /* 검색창 관련 색상 */
    --search-bar-bg-color: #F3F4F6;
    --search-bar-placeholder-color:#9ca3af;

    /* 상품 정렬 선택 관련 색상 */
    --select-border-color: #E5E7EB;

    /* 페이지네이션 관련 색상 */
    --pagination-active-bg-color: #2F80ED;
    --pagination-active-font-color: #F9FAFB;
    --pagination-inactive-border-color: #E5E7EB;
    --pagination-inactive-font-color: #6B7280;

    
    /* ----- '/registration' 페이지 ----- */
    
    /* 등록 버튼 관련 색상 */
    --button-active-bg-color: #3692FF;
    --button-inactive-bg-color: #9CA3AF;

    /* input 관련 색상 */
    --input-background-color: #F3F4F6;
    --input-placeholder-font-color: #9CA3AF;

    /*  hashTag 관련 색상 */

    --hashTag-bg-color: #F3F4F6;



  }
  html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		box-sizing: border-box;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	html {
        font-size: 62.5%;
		font-family: 'Pretendard';
		overflow-x: hidden;
	}
	img {
		width: 100%;
		height: 100%;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
`;
