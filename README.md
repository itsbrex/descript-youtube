# 📺 Descript-YouTube: Your Ultimate YouTube Media Extractor! 🚀

<img src="https://github.com/itsbrex/descript-youtube/assets/9772694/bf7f7981-8102-481a-96a5-ae77485eb788" align="center" hspace="10" />

<br>

Welcome to Descript-Extractor! It's a powerful tool that provides a seamless and efficient experience for importing and managing media from YouTube. It gives you instant access to YouTube's videos, audio tracks, transcripts/subtitles, and video thumbnails.

Here's what you can do with Descript-YouTube for now:

-  `Video`: Extract YouTube videos in mp4 format
-  `Audio`: Extract and download audio-only
-  `Transcripts/Subtitles`: Get hold of both English or foreign language subtitles in .vtt format (With timestamps or without timestamps)
-  `Thumbnails`: Download thumbnails as jpg images using custom API route to bypass CORS restrictions

---

This project uses [Next.js](https://nextjs.org/), [React.js](https://reactjs.org/), [Material-UI](https://material-ui.com/), and [Node-Ytdl-Core](https://github.com/fent/node-ytdl-core) and is deployed on [Vercel](https://vercel.com/) and is in the process of being migrated to use TypeScript + Tailwind + Shadcn UI + Next.js 13 app router structure.

---
## 🛠️ Installation

Descript-YouTube is a project built using Next.js. To get started, run the development server using the following command:

```bash
npm i
# or 
yarn
# or
pnpm i
```

Then run:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

And then open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<br>

##  Routes

The app has the 4 routes:

-  `/api/all-info/videoId`
-  `/api/video/videoId`
-  `/api/get-local-images` - This is a custom API route to bypass CORS restrictions and allow downloading thumbnails as jpg images
-  `/video/videoId`

## 📝 Notes

-  The app is currently in the process of being migrated to use TypeScript + Tailwind + Shadcn UI + Next.js 13 app router structure

## 📜 License
MIT License

<br>

## Credits
This project is a fork of [direct-link](https://github.com/ApayRus/direct-link) that I am revamping to use a different approach and to add more features. Feature requests are welcome!

<br>

---
##  🎁 Default Next.js README
## Getting Started

Start by running the development server:

```bash
npm run dev
# or
yarn dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

Feel free to start editing the page by tweaking `pages/index.js`. The page auto-refreshes as you make changes.

## 📚 Learn More

Ready to dive deeper into the realm of Next.js? Here are some resources:

-  [Next.js Documentation](https://nextjs.org/docs) - Master Next.js features and API
-  [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorials await

Don't hesitate to visit [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcomed!

## 🚀 Deploy on Vercel

[Vercel Platform](https://vercel.com/import) offers the smoothest experience to deploy your Next.js app. It's from the same talented team who brought you Next.js!

Check out the comprehensive [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more insights.