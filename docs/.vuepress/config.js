import { defaultTheme } from 'vuepress';
import vuepressPluginAnchorRight from 'vuepress-plugin-anchor-right';

export default  {
  title: 'MVM User Handbook',
  description: 'A handbook for users to transfer asset with MVM Bridge',
  head: [['link', { rel: 'icon', href: '/images/favicon.png' }]],

  theme: defaultTheme({
    logo: '/images/logo.svg',
    lastUpdated: false,
    contributors: false,

    // default theme config
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'MVM Bridge',
        link: 'https://bridge.mvm.app'
      }
    ],

    sidebarDepth: 0,
    sidebar: [
      {
        text: 'Preparation',
        link: '/preparation'
      },
      {
        text: 'Connect Wallet',
        link: '/connectwallet'
      },
      {
        text: 'Deposit',
        link: '/deposit'
      },
      {
        text: 'Swap',
        link: '/swap'
      },
      {
        text: 'Withdraw',
        link: '/withdraw'
      },
    ]
  }),
  plugins: [
    [vuepressPluginAnchorRight()],
  ]
}
