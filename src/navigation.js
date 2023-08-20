import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    {
      text: 'Quiénes somos',
      href: getPermalink('/quienessomos/'),
    },
    {
      text: 'Bordados',
      href: getPermalink('/bordados/'),
    },
    {
      text: 'Corte y confección',
      href: getPermalink('/corteyconfeccion','page'),
    },
    {
      text: 'Trabajos',
      href: getPermalink('/trabajos/'),
    },
    {
      text: 'Contacto',
      href: getPermalink('/contactanos/'),
    },
  ],
  actions: [{ type: 'button', text: 'Download', href: 'https://github.com/onwidget/astrowind' }],
};

export const footerData = {
  links: [
    {
      title: 'Páginas',
      links: [
        { text: 'Inicio', href: '/' },
        { text: 'Quiénes somos', href: getPermalink('/quienessomos/') },
      ],
    },
    {
      title: 'Servicios',
      links: [
        { text: 'Bordados', href: getPermalink('/bordados/') },
        { text: 'Corte y confeccion', href: getPermalink('/corteyconfeccion') },
      ],
    },
    {
      title: 'Productos',
      links: [
        { text: 'Trabajos', href: getPermalink('/trabajos') },
      ],
    },
    {
      title: 'Contáctananos',
      links: [
        { text: 'Contacto', href: getPermalink('/contactanos') },
      ],
    },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
