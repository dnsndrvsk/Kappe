import React from 'react'
import socialLinksData from '../data/socialLinksData'
import '../styles/components/SocialLinks.scss'

const SocialLinks = () => {
  return (
    <div className="social-links">
      {socialLinksData.map((item, i) => {
        const linkClass=`social-links__link ${item.linkClass}`
        const iconClass=`fa ${item.iconClass}`

        return (
          <a
            className={linkClass}
            href={item.linkTo}
            key={i}
          >
            <i className={iconClass}></i>
          </a>
        )
      })}
    </div>
  )
}

export default SocialLinks