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
  return (
    <article className="mt-8">
      <h1 className="text-4xl text-center">
        {title}
      </h1>
      <div className="my-3" />
      <Keywords keywords={keywords} />
      <div className="my-3" />
      <Video
        captionTracks={captionTracks}
        urlVideo={urlVideo}
        poster={poster}
      />
      <div className="my-3" />
      <audio controls src={urlAudio} className="w-full" />
      <div className="my-3" />
      <h3 className="text-2xl">
        Captions/Subtitles:
      </h3>
      <SubtitleFileLinks captionTracks={captionTracks} />
      <div className="my-3" />
      <h3 className="text-2xl">
        Thumbnails:
      </h3>
      <div className="my-3" />
      <Thumbnails thumbnails={thumbnails} />
      <div className="my-3" />
      <h3 className="text-2xl">
        Description:
      </h3>
      <div className="my-3" />

      <p className="whitespace-pre-line break-words">
        {description}
      </p>
      <div className="my-3" />
    </article>
  )
}

export default VideoArticle
