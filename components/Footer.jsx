import { IconButton, Typography, Box } from '@mui/material'
import { GitHub as GitHubIcon } from '@mui/icons-material'

const Footer = () => {
  return (
    <footer style={{ flex: 1, maxHeight: 100 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton
          href='https://github.com/itsbrex/descript-youtube'
          target='_blank'
          rel='noopener noreferrer'
          size="large"
        >
          <GitHubIcon />
        </IconButton>
        <Typography variant="body1" color="textSecondary" component="span" style={{ marginLeft: 5 }}>
          Made with <span style={{ color: 'red' }}>&#10084;</span> by {' '}
          <a href="https://twitter.com/itsbrex" style={{ color: 'inherit', textDecoration: 'none' }}>
            itsbrex
          </a>
        </Typography>
      </Box>
    </footer>
  );
}

export default Footer
