import React from 'react';
import styles from './SocialLinks.module.scss';
import { RiFacebookFill, RiTwitterFill, RiInstagramLine } from 'react-icons/ri';

interface SocialLink {
  url: string;
  component: JSX.Element;
}

const socialLinks: SocialLink[] = [
  { url: 'https://www.linkedin.com/in/rian-marlon-beckert-0952511b6/', component: <RiFacebookFill /> },
  { url: 'https://www.linkedin.com/in/rian-marlon-beckert-0952511b6/', component: <RiTwitterFill /> },
  { url: 'https://www.linkedin.com/in/rian-marlon-beckert-0952511b6/', component: <RiInstagramLine /> },
];

export function SocialLinks(): JSX.Element {
  const renderLinks = socialLinks.map((link, i) => (
    <li key={i}>
      <a href={link.url}>{link.component}</a>
    </li>
  ));
  return <ul className={styles.media}>{renderLinks}</ul>;
}


