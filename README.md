# Shreya's Birthday Website

A personal interactive birthday journey from Aditya to Shreya.

## Run locally

1. Install Node.js 20.19+.
2. Open this folder in a terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL shown in the terminal.

## Add your photos

1. Put your images in `public/assets/photos/`.
2. Open `src/data/siteContent.js`.
3. In the `photos` list, replace each `src` with your filename, for example:
   `src: '/assets/photos/us-1.jpg'`
4. Edit the `alt`, `caption`, and `date` beside it.

You can add or remove photo objects in that same list. The gallery automatically adapts to 5–15 photos. Photos use `object-fit: contain`, so they are not stretched or aggressively cropped.

## Edit the words

Open `src/data/siteContent.js`:

- `story` controls the timeline memories.
- `photos` controls gallery captions and dates.
- `loveNotes` controls the reveal cards.

## Add music

1. Put an MP3 in `public/assets/music/`.
2. Create `.env.local` and set:
   `VITE_MUSIC_FILE=/assets/music/your-song.mp3`

Music never autoplays. Shreya must press the Music button. With no file configured, the rest of the website works normally.
The site is already labeled with her favorite song, “Ek Din Aap”; use an audio file you own or are licensed to use.

## Build and deploy

Run `npm run build` to create the production site in `dist/`.

### Netlify

Drag the `dist` folder into [Netlify Drop](https://app.netlify.com/drop), or connect the project and use:

- Build command: `npm run build`
- Publish directory: `dist`

### Vercel

Import the project at [Vercel](https://vercel.com/new). Vercel detects Vite automatically. Use `npm run build` and `dist` if asked.

After deployment, copy the generated public link and send it to Shreya.
