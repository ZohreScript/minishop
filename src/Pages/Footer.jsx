import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import links from '../data/footerLinks.json';

function Footer() {
  return (
    <footer className="bg-purple-950 text-white flex flex-col md:flex-row  bottom-0 justify-between p-8 mt-20">
      <a className='text-2xl text-yellow-300 font-Krona'> shop coding</a>

      <div className="flex flex-col md:flex-row justify-between md:mx-auto space-x-0 md:space-x-8 space-y-8 md:space-y-0 order-3 md:order-2">
        {links.map(item => (
          <div className="flex flex-col flex-wrap" key={item.title}>
            <h6 className="font-Krona text-sm">{item.title}</h6>
            <div>
              {item.links.map(link => (
                <Link to={link.path} key={link.name} className="lowercase text-sm block hover:text-yellow">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-yellow space-x-4 md:space-x-0 order-2 md:order-3 flex md:block mb-6 md:mb-0">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-light-grey block mb-4"
        >
          <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-light-grey block mb-4">
          <FontAwesomeIcon icon="fa-brands fa-twitter" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-light-grey block mb-4"
        >
          <FontAwesomeIcon icon="fa-solid fa-hashtag" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;