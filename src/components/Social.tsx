import React from 'react'
import Styled from 'styled-components/macro'
import Link from '../components/Link'

const socials = [
  { className: 'github', name: 'My code', url: 'https://github.com/cjpatoilo' },
  {
    className: 'twitter',
    name: 'My thought',
    url: 'https://twitter.com/cjpatoilo',
  },
  {
    className: 'linkedin',
    name: 'My skill',
    url: 'https://linkedin.com/in/cjpatoilo',
  },
  {
    className: 'medium',
    name: 'My writing',
    url: 'https://medium.com/@cjpatoilo',
  },
  {
    className: 'envelope',
    name: 'My contact',
    url: 'mailto:cjpatoilo@gmail.com?subject=Hi',
  },
  // { className: 'instagram', name: 'My photo', url: 'https://instagram.com/cjpatoilo' },
  // { className: 'behance', name: 'My design', url: 'https://behance.net/cjpatoilo' },
]

const Social = Styled.nav`
  bottom: 20px;
  display: block;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 82.5%;
  z-index: 0;
`
const SocialList = Styled.ul`
  list-style: none;
  margin: 0;
`
const SocialItem = Styled.li`
  display: inline-block;
  margin: 0;
  padding: 5px 20px;
`
const SocialLink = Styled(Link)`
  text-decoration: none;

  &:before {
    font-size: 20px;
  }

  &.fa-medium,
  &.fa-envelope {
    &:before {
      font-size: 18px;
    }
  }
`

export default (): JSX.Element => (
  <Social>
    <SocialList>
      {socials.map(
        ({ className, name, url }, index): JSX.Element => (
          <SocialItem key={index}>
            <SocialLink
              className={`fa fa-${className}`.trim()}
              href={url}
              title={name}
            />
          </SocialItem>
        ),
      )}
    </SocialList>
  </Social>
)
