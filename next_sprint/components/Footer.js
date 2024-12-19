export default function Footer() {
  return (
    <footer className="flex bg-custom_coolGray900 h-40 mt-auto justify-around">
      <p className="text-gray-400 mt-8">©codeit - 2024</p>
      <div className="flex space-x-6 mt-8">
        <p className="text-gray-200">Privacy Policy</p>
        <p className="text-gray-200">FAQ</p>
      </div>
      <div className="flex gap-3 mt-8">
        <a href="http://facebook.com" rel="noopener noreferrer" target="_blank" className="social_box">
          <img src="/img/facebook.png" alt="facebook" />
        </a>

        <a href="http://twitter.com" rel="noopener noreferrer" target="_blank" className="social_box">
          <img src="/img/twitter.png" alt="twitter" />
        </a>

        <a href="http://youtube.com" rel="noopener noreferrer" target="_blank" className="social_box">
          <img src="/img/youtube.png" alt="youtube" />
        </a>
        
        <a href="http://instagram.com" rel="noopener noreferrer" target="_blank" className="social_box">
          <img src="/img/insta.png" alt="instagram" />
        </a>
      </div>
    </footer>
  );
}
