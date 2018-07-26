import React from 'react';
import { Menu, Responsive } from 'semantic-ui-react';
import { formatPrice } from '../helpers';

const Footer = () => (
  <Menu fluid widths={1} fixed='bottom' id='footer'>
    <Menu.Item>
      <p>© 2018 Slices Pizza<span role='img' aria-label='pizza'> 🍕🍕🍕 Built by <a href='http://pamela.io' target="_blank">pamela.io</a></span></p>
    </Menu.Item>
  </Menu>
);

export default Footer;
