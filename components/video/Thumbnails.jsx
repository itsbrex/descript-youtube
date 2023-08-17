import React from 'react';
import axios from 'axios';
import '../../app/Thumbnails.css';

function Thumbnails({ thumbnails }) {

   const downloadImage = async (imageUrl, width, height) => {
       try {
           const { data } = await axios.post('/api/get-local-images', { imageUrl });
           if (data && data.success) {
               const a = document.createElement('a');
               const fileName = `image_${width}x${height}.jpg`;
               a.href = data.imageSrc;
               a.download = fileName;
               a.click();
           } else {
               console.log('Error fetching image:', data.message);
           }
       } catch (error) {
           console.log('Failed to download image:', error.message);
       }
   }

   return (
    <div className="thumbnails-container">
        {thumbnails.map((elem, index) => {
            const { width, height, url } = elem;
            return (
                <div className="thumbnail-item" key={`thumbnail-${index}`}>
                    <div className="thumbnail-dimension">{width}x{height}</div>
                    <div className="thumbnail-image-container">
                        <img className="thumbnail-image" src={url} alt='thumbnail' />
                        <div className="download-overlay" onClick={() => downloadImage(url, width, height)}></div>
                    </div>
                </div>
            )
        })}
    </div>
)
}

export default Thumbnails;
