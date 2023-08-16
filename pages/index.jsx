import Layout from '../components/Layout'

export default function Home() {
  const headProps = {
    title:
      'YouTube video info importer for Descript users',
    description:
      'Paste a YouTube link to automatically get transcripts and other video info. Save time and move faster with Descript.',
    keywords: ['Descript', 'YouTube', 'import', 'transcription', 'video', 'subtitle', 'audio', 'clip', 'downloader', 'efficiency', 'content creation'],
    image:
      ''
  }

  return <Layout headProps={headProps}></Layout>
}
