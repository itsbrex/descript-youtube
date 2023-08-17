import { GitHub as GitHubIcon } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 h-24 bg-gray-100 flex items-center justify-center">
      <div className="flex items-center space-x-3">
        <a 
          href='https://github.com/itsbrex/descript-youtube' 
          target='_blank' 
          rel='noopener noreferrer' 
          className="p-3"
        >
          <GitHubIcon />
        </a>
        <p className="text-sm text-gray-500 flex items-center space-x-1">
            <span>Made with</span> 
            <span className="text-red-500"> ❤️ </span> 
            <span>by </span>
            <a 
              href="https://twitter.com/itsbrex" 
              className="text-blue-600 no-underline"
              style={{ color: '#004ecc' }}
            >
              itsbrex
            </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
