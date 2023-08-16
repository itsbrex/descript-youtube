import Search from '../components/Search'
import Logo from './Logo'
import DescriptionIcons from './DescriptionIcons'
import { Typography } from '@mui/material'

const Heading = () => {
  return (
    <header style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      width: '100%',
      marginTop: 0
    }}
    >
      <Typography
        variant='h1'
        style={{ fontSize: 35, width: '100%', textAlign: 'center' }}
      >
        <Logo text='YouTube' /> Descript
      </Typography>
      <DescriptionIcons />
      <Search />
    </header>
  )
}

export default Heading
