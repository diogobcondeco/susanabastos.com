import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialLink = ({ link, icon }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={icon} className='text-white mx-2 opacity-50 hover:opacity-100 transition-all' />
    </a>
  )
}

export default SocialLink;