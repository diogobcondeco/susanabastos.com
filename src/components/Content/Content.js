import React from 'react';
import SocialLink from './SocialLink/SocialLink';
import {
  faFacebook,
  faWhatsapp,
  faTelegram,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'

const Content = () => {
  return (
    <div className='relative z-10 text-center text-white'>
      <h1 className='text-4xl font-bold'>Susana Bastos</h1>
      <p className='mt-1'>Hipnoterapia • PNL</p>
      <div className='flex items-center justify-center gap-4 my-4 text-4xl'>
        <SocialLink link="https://www.facebook.com/susanabastoshipnose" icon={faFacebook} />
        <SocialLink link="https://wa.me/352691108813" icon={faWhatsapp} />
        <SocialLink link="https://t.me/susanabastos" icon={faTelegram} />
        <SocialLink link="https://www.instagram.com/susanabastoshipnose/" icon={faInstagram} />
      </div>
    </div>
  )
}

export default Content;