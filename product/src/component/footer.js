import React from 'react';
import facebook from '../image/facebook.png';
import twitter from '../image/twitter.png';
import instagram from '../image/instagram.png';
import youtube from '../image/youtube.png';

function FooterPart () {
    return (
        <footer className='footer'>
            <div>©codeit - 2024 </div>
            <div className='footermenu'>
                <a className='fline' href="privacy/privacy.html">Privacy Policy</a>
                <a className='fline' href="faq/faq.html">FAQ</a>
            </div>
            <div className="sns">
                <a href="https://www.facebook.com/">< img src={facebook} alt='facebook' width="20" /></a>
                <a href="https://twitter.com/"><img src={twitter} alt='twitter' width="20" /></a>
                <a href="https://www.youtube.com/"> <img src={youtube} alt='youtube' width ="20" /></a>
                <a href="https://www.instagram.com/"><img  src={instagram} alt='instagram' width ="20" /></a>
            </div>
        </footer>    
    )
}

export default FooterPart;