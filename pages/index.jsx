import Layout from '../components/Layout'

export default function Home() {
  const headProps = {
    title:
      'Descript - Seamless YouTube Video and Transcript Importing',
    description:
      'Paste a YouTube link to directly import videos and automatically transcribe them. Save time and increase efficiency with Descript.',
    keywords: ['Descript', 'YouTube', 'import', 'transcription', 'video', 'subtitle', 'audio', 'clip', 'downloader', 'efficiency', 'content creation'],
    image:
      'https://user-images.githubusercontent.com/1222611/92627876-a85ee000-f2d4-11ea-8dbb-14ab4eb0065a.png'
  }

  return <Layout headProps={headProps}></Layout>
}
