import axios from 'axios';

export default async (req, res) => {
    try {
        const imageUrl = req.body.imageUrl;
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(response.data, 'binary').toString('base64');
        const encodedImage = `data:${response.headers['content-type']};base64,${imageBuffer}`;
        
        res.statusCode = 200;
        res.json({ success: true, imageSrc: encodedImage });
    } catch (error) {
        console.error(error);
        res.statusCode = 500;
        res.json({ success: false, message: 'Error fetching image' });
    }
};
