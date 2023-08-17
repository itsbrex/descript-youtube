import React from 'react'
import '../../app/Thumbnails.css'

function Thumbnails({ thumbnails }) {
	return (
		<div className="thumbnails-container">
			{thumbnails.map((elem, index) => {
				const { width, height, url } = elem
				return (
					<div className="thumbnail-item" key={`thumbnail-${index}`}>
						<div className="thumbnail-dimension">
							{width}x{height}
						</div>
						<div className="thumbnail-image-container">
							<img className="thumbnail-image" src={url} alt='thumbnail' />
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Thumbnails
