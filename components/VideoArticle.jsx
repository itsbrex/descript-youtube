import React from 'react'
import { Typography } from '@mui/material'
import SubtitleFileLinks from './video/SubtitleFileLinks'
import Keywords from './video/Keywords'
import Video from './video/Video'
import Thumbnails from './video/Thumbnails'

const VideoArticle = props => {
	const {
		title,
		keywords,
		captionTracks,
		urlVideo,
		urlAudio,
		thumbnails,
		description,
		image: poster
	} = props

	const descriptionWithLinks = React.useMemo(() => {
		return description.split('\n').map((line, index) => {
			const match = line.match(/(\d+:\d+)/);
			if (match) {
				const time = match[1].split(':').reduce((acc, time) => (60 * acc) + +time);
				return <p key={index}><a href={`${urlVideo}?t=${time}`}>{line}</a></p>;
			} else {
				return <p key={index}>{line}</p>;
			}
		});
	}, [description, urlVideo]);

	return (
		<article style={{ marginTop: 30 }}>
			<Typography style={{ fontSize: 40, textAlign: 'center' }} variant='h1'>
				{title}
			</Typography>
			<p />
			<Keywords keywords={keywords} />
			<p />
			<Video
				captionTracks={captionTracks}
				urlVideo={urlVideo}
				poster={poster}
			/>
			<p />
			<audio controls src={urlAudio} style={{ width: '100%' }} />
			<p />
			<Typography style={{ fontSize: 20 }} variant='h3'>
				Captions/Subtitles:
			</Typography>
			<SubtitleFileLinks captionTracks={captionTracks} />
			<p />
			<Typography style={{ fontSize: 20 }} variant='h3'>
				Thumbnails:
			</Typography>
			<p />
			<Thumbnails thumbnails={thumbnails} />
			<p />
			<Typography style={{ fontSize: 20 }} variant='h3'>
				Description:
			</Typography>
			<p />
			<div
				style={{ whiteSpace: 'pre-line', overflowWrap: 'break-word' }}
			>
				{descriptionWithLinks}
			</div>
			<p />
		</article>
	)
}

export default VideoArticle
