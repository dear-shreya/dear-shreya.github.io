// This is the only file you need to edit to personalize the words, photos, and music.
const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`

export const siteContent = {
  girlfriend: {
    name: 'Shreya',
    role: 'Doctor',
    place: 'Gujarat',
  },
  boyfriend: {
    name: 'Aditya',
    role: 'Engineer',
    place: 'Haryana',
  },
  favoriteSong: 'Ek Din Aap',
  story: [
    { label: 'The day we met', detail: '14 September 2025. One unexpected meeting on OmeTV that became the beginning of us.', icon: '01' },
    { label: 'Our first conversation', detail: 'That same night, when my laptop battery died, I called you on Instagram right away. I am still so proud of, and thankful for, that little decision.', icon: '02' },
    { label: 'Your last birthday', detail: 'Remember your last birthday? We had only been talking for 14 days, and I wished you on Twitter. Lowkey still ashamed of that fact 🤦🏻‍♂️', icon: '03' },
    { label: 'The difficult chapters', detail: 'Along the way, there were rough patches and times when we stopped talking. Things were not always easy, but we made it through by standing strong and supporting each other.', icon: '04' },
    { label: 'The way you support me', detail: 'Your support has played such an important role in my life. You were there when my grandmother had a heart attack, and you prayed for my promotion, which actually happened. “tum utho siya shringaar karo, ab dhanush raam ne toda hai” You are so considerate. Whenever I do not feel good, you are always there to console me and take care of me. Thank you for everything, Shreya.', icon: '05' },
    { label: '9 February', detail: 'The day I decided I would never back away from us. I was leaving Hyderabad for home for Maa’s operation, and we were having a fight about phool and “will you marrow me.” Everything felt messy and emotional, but somewhere in the middle of it, I realised that I love you so much and would never be able to stop loving you. I promised myself that, whatever the situation, I would never back away from us. And right now, I think you are saying “I love you, Adi,” so of course, I love you too, meri jaan.', icon: '06' },
    { label: '10 September 2026, the day we actually met', detail: 'After so many lovely moments online and so many promises, this was the day I finally got to know that you are actually real. I had a lotttttt of fun with you during those five days. You had your first drink too, and now I can surely say that drunk Shreya is my favourite genre. Of course, she also kisses me in public when she is drunk. You are the absolute best company, and I would be so fortunate to have you beside me for my entire life (obviously, only if you want that too). I will never forget our airport hug. One lovely side effect is that you now know exactly how comfortable I am with you. I do not even think twice before saying every stupid thing that crosses my mind.', icon: '07' },
  ],
  photos: [
    { src: assetPath('assets/photos/shreya-at-dinner.jpg?v=2'), alt: 'Shreya smiling across a candlelit dinner table', caption: 'Our official first date. Drunk Shreya: officially my fav genre.' },
    { src: assetPath('assets/photos/us-at-the-view.jpg?v=2'), alt: 'Shreya and Aditya standing together in front of a beautiful city view', caption: 'You, me, and a view I barely noticed.' },
    { src: assetPath('assets/photos/cafe-selfie.jpg'), alt: 'Shreya and Aditya smiling together across a cafe table', caption: 'Us. Finally.' },
    { src: assetPath('assets/photos/first-selfie.jpg'), alt: 'Shreya and Aditya smiling together among the greenery', caption: 'Our first airport goodbye.' },
    { src: assetPath('assets/photos/retro-us.jpg'), alt: 'A colorful retro portrait of Shreya and Aditya in matching sunglasses', caption: 'Good vibes, but better because it is us. #80svibes' },
    { src: assetPath('assets/photos/future-us.jpg'), alt: 'A dreamy portrait of Shreya and Aditya smiling at each other in the mountains', caption: 'Manifesting a million more moments with you.' },
    { src: assetPath('assets/photos/shreya-became-a-doctor.jpg'), alt: 'A celebration poster congratulating Shreya on becoming a doctor', caption: 'Remember the day you became a doctor.' },
  ],
  loveNotes: [
    'When you say “Kya karu bhai mai tera?” (and of course, touch yourself at the same time while thinking about me).',
    'Those legendary “Adeeeeeee” and “Theeeeek haiiiii.”',
    'How incredibly cute you look.',
    'How brave, intelligent, confident, and smart you are. Of course, you do not have to be any of these in front of me. I can be your chhat wala kamra.',
    'I know you love me and want to marry me, hehe.',
    'Bonus: Ye kisi ke aage mat padhiyo agar tune sabke saamne khol rakha ho toh, “I also love the way you kiss me and jis tarah se tu mujhpar haq jatati hai” hehe <3',
  ],
  musicFile: import.meta.env.VITE_MUSIC_FILE || '',
  musicVideoId: 'mIycZ8tPAWc',
}
