import { IconButton } from '@mui/material'
import { GitHub as GitHubIcon } from '@mui/icons-material'

const Footer = () => {
  return (
    <footer style={{ flex: 1, maxHeight: 100 }}>
      <IconButton
        href='https://github.com/itsbrex/DescriptTube'
        target='_blank'
        rel='noopener noreferrer'
        size="large">
        <GitHubIcon />{' '}
      </IconButton>
    </footer>
  );
}

export default Footer
