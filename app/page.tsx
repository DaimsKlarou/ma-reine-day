'use client'

import { useState } from 'react'
import { ChevronDown, Heart, ImagePlus, Stethoscope } from 'lucide-react'

const photos = [
  '/melissa/WhatsApp Image 2026-10-02 at 8.04.02 PM.jpeg',
  '/melissa/WhatsApp Image 2026-10-02 at 8.04.02 PM (1).jpeg',
  '/melissa/WhatsApp Image 2026-10-02 at 8.04.02 PM (2).jpeg',
  '/melissa/WhatsApp Image 2026-10-02 at 8.04.03 PM.jpeg',
  '/melissa/WhatsApp Image 2026-10-02 at 8.04.03 PM (1).jpeg',
  '/melissa/WhatsApp Image 2026-10-02 at 8.04.03 PM (2).jpeg',
  '/melissa/WhatsApp Image 2026-10-02 at 8.04.04 PM.jpeg',
  '/melissa/WhatsApp Image 2026-10-02 at 8.04.04 PM (1).jpeg',
  '/melissa/WhatsApp Image 2026-10-02 at 8.04.04 PM (2).jpeg',
  '/melissa/WhatsApp Image 2026-10-02 at 8.04.04 PM (3).jpeg',
  '/melissa/WhatsApp Image 2026-10-02 at 8.04.05 PM.jpeg',
  '/melissa/WhatsApp Image 2026-10-02 at 8.04.05 PM (1).jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p30zg1aWYXm31yrQVhjmHD2XmK5l95.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8PurKjyk5PJOWrGeB8oXChRsBEpSnv.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oDu1n3EyXGnFUduKRm4xZ0NdpQIWQ3.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-j51XjvGeKBZK5pM2AOq2AmImV3ZOvc.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-snkAyzmLgxhzpHAuNHAg3bkHxDMd6O.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4w7yONaq58DHkmcblHhd49p4RpmZvJ.png',
]

const captions = [
  'Neuf années à choisir ton sourire, encore et encore.',
  'Ma plus belle histoire porte ton prénom.',
  'Dans chaque instant simple, je retrouve notre bonheur.',
  'Une femme de cœur, une présence qui apaise.',
  'Tu prends soin du monde avec une douceur rare.',
  'Mon endroit préféré sera toujours près de toi.',
  'Les souvenirs deviennent précieux quand ils sont partagés.',
  'Ta lumière accompagne chacun de mes jours.',
  'Pour tous les moments de qualité à venir.',
  'Une nouvelle page, la même merveilleuse aventure.',
  'Je t’aime pour tout ce que tu es et tout ce que tu deviens.',
  'Joyeux anniversaire, mon amour.',
  'Les racines d’une femme magnifique, déjà pleine de lumière.',
  'La famille, les liens qui rendent chaque bonheur plus grand.',
  'Avant nous, il y avait déjà ce sourire qui illuminait tout.',
  'Une enfance tendre, et le début d’une belle histoire.',
  'La femme que j’aime, dans son quotidien, avec sa douceur.',
  'Notre petit trésor, la plus belle preuve de notre amour.',
]

export default function Page() {
  const [customImages, setCustomImages] = useState<Record<number, string>>({})

  function changeCardImage(index: number, file?: File) {
    if (!file || !file.type.startsWith('image/')) return
    const reader = new FileReader()
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setCustomImages((current) => ({ ...current, [index]: reader.result as string }))
      }
    }
    reader.readAsDataURL(file)
  }

  return (
    <main className="tribute-page">
      <section className="hero-panel snap-section">
        <div className="hero-copy">
          <p className="eyebrow"><Heart aria-hidden="true" fill="currentColor" /> 02 octobre · notre histoire</p>
          <h1>Pour toi,<br /><em>Melissa.</em></h1>
          <p className="hero-intro">Une petite galerie de nos grands moments, pour célébrer la femme extraordinaire que tu es.</p>
          <a className="scroll-cue" href="#memories"><span>Faire défiler</span><ChevronDown aria-hidden="true" /></a>
        </div>
        <div className="hero-photo-wrap">
          <div className="hero-photo-frame">
            <img src={photos[0]} alt="Melissa souriante" />
          </div>
          <span className="photo-note">la plus belle<br />de mes habitudes</span>
        </div>
        <div className="hero-mark">M <span>×</span> A</div>
      </section>

      <section className="story-panel snap-section" id="memories">
        <div className="section-heading">
          <div><p className="eyebrow">Notre chapitre préféré</p><h2>Des souvenirs<br /><em>à l’infini.</em></h2></div>
          <p className="section-intro">9 ans de complicité,<br />de rires et de rêves<br />construits à deux.</p>
        </div>
        <div className="vertical-gallery" aria-label="Galerie de souvenirs">
          {photos.slice(1, 7).map((photo, index) => (
            <figure className={`memory-card ${index % 3 === 1 ? 'memory-card-offset' : ''}`} key={photo}>
              <img src={photo} alt={captions[index + 1]} loading="lazy" />
              <figcaption><span>0{index + 1}</span>{captions[index + 1]}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="doctor-panel snap-section">
        <div className="doctor-image"><img src={photos[7]} alt="Melissa, médecin" loading="lazy" /><span className="doctor-stamp"><Stethoscope aria-hidden="true" /> soigner · aimer · transmettre</span></div>
        <div className="doctor-copy"><p className="eyebrow">Ce que j’admire chez toi</p><h2>Un cœur<br /><em>qui soigne.</em></h2><p>Tu as choisi de prendre soin des autres. De ta famille, de tes amis, de tes patients. Ta vocation est belle parce qu’elle te ressemble : généreuse, attentive et profondément humaine.</p><div className="rule" /><p className="small-note">À la femme, à la médecin,<br />à la maman et à mon amour.</p></div>
      </section>

      <section className="film-panel snap-section" id="film">
        <div className="film-heading"><p className="eyebrow">Nos souvenirs précieux</p><h2>Des images<br /><em>qui restent.</em></h2><p>Quelques instants choisis pour raconter la femme, la maman et l’amour de ma vie.</p></div>
        <div className="memory-frame-grid" aria-label="Sélection de souvenirs de Melissa">
          {[{ photo: '/melissa/WhatsApp Image 2026-10-02 at 8.04.05 PM (2).jpeg', caption: 'Nous deux, dans notre plus belle complicité.' }, { photo: photos[13], caption: 'Entourés de ceux qui nous aiment.' }, { photo: photos[14], caption: 'Petite déjà, avec ce sourire unique.' }, { photo: photos[15], caption: 'Une enfance pleine de malice.' }, { photo: photos[16], caption: 'La médecin au grand cœur.' }, { photo: photos[17], caption: 'Notre petit trésor.' }].map((memory, index) => (
            <figure className={`framed-memory framed-memory-${index + 1}`} key={memory.caption}>
              <div className="frame-image"><img src={customImages[index] ?? memory.photo} alt={memory.caption} loading="lazy" /></div>
              <figcaption>{memory.caption}</figcaption>
              <label className="image-picker">
                <ImagePlus aria-hidden="true" />
                <span>Changer la photo</span>
                <input type="file" accept="image/*" onChange={(event) => changeCardImage(index, event.target.files?.[0])} />
              </label>
            </figure>
          ))}
        </div>
      </section>

      <section className="final-panel snap-section" id="letter">
        <div className="final-content"><div className="heart-orbit"><Heart aria-hidden="true" fill="currentColor" /></div><p className="eyebrow">Depuis 9 ans</p><h2>Joyeux<br /><em>anniversaire.</em></h2><p className="final-message">Que cette nouvelle année t’offre autant de bonheur, de douceur et de lumière que tu en donnes autour de toi. Je serai là pour chaque prochaine aventure.</p><p className="signature">Pour toujours, <span>ton amour</span></p></div>
        <div className="final-photo"><img src={photos[11]} alt="Un souvenir heureux de Melissa" loading="lazy" /><span>avec tout mon amour</span></div>
        <p className="footer-mark">M × M · 2017 — ∞</p>
      </section>
    </main>
  )
}
