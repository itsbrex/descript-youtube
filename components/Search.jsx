import React, { useState, useEffect, Fragment } from 'react'
import makeStyles from '@mui/styles/makeStyles';
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import ClearIcon from '@mui/icons-material/Clear'
import EnterIcon from '@mui/icons-material/ChangeHistory'
import LinearProgress from '@mui/material/LinearProgress'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box'; 
import ytdl from 'ytdl-core'
import { useRouter } from 'next/router'

const useStyles = makeStyles(theme => ({
  form: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 15,
    marginTop: 5,
    minHeight: 48
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  },
  loadingProgressContainer: {
    textAlign: 'center',
    width: '100%'
  }
}))

export default function CustomizedInputBase() {
  const classes = useStyles()
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState()
  const router = useRouter()

  const onSearchChange = event => {
    setUrl(event.target.value)
  }

  const onSearchClear = () => {
    setUrl('')
  }

  const onSubmit = e => {
    e.preventDefault()
    try {
      const videoId = ytdl.getVideoID(url)
      router.push(`/video/[videoId]`, `/video/${videoId}`)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    //possible params: (url, { shallow })
    const handleRouteChangeStart = () => setIsLoading(true)
    const handleRouteChangeComplete = () => setIsLoading(false)

    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [])

  const LoadingIndicator = () => (
    <div className={classes.loadingProgressContainer}>
      <LinearProgress />
    </div>
  )

  const EnterButton = () => (
    <IconButton aria-label='search' type='submit' size="large">
      <EnterIcon color='primary' style={{ transform: 'rotate(90deg)' }} />
    </IconButton>
  )

  const ClearButton = () => (
    <IconButton aria-label='clear' onClick={onSearchClear} size="large">
      <ClearIcon style={{ fontSize: 18 }} />
    </IconButton>
  )

  const SearchInput = () => (
    <>
      <InputBase
        className={classes.input}
        placeholder='Paste YouTube URL or video ID here'
        inputProps={{ 'aria-label': 'get video id' }}
        onChange={onSearchChange}
        value={url}
      />
      <ClearButton />
      <EnterButton />
    </>
  )

  return (
    <Container maxWidth="sm">
      <Box className={classes.boxContainer} mt={2}>
    <form onSubmit={onSubmit} className={classes.form}>
      {isLoading ? <LoadingIndicator /> : <SearchInput />}
    </form>
    </Box>
    </Container>
  )
}
