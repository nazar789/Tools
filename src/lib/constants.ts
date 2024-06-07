import {
  ImageIcon,
  KeyIcon,
  KeyboardIcon,
  PipetteIcon,
  TextIcon
} from 'lucide-react'

export const SITE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://tools-online.vercel.app'
    : 'http://localhost:3000'

export const SITE_NAME = 'Tools Online'
export const SITE_TITLE = 'Tools Online'
export const SITE_DESCRIPTION =
  'A collection of free tools created by Atuandev.'

export const TOOLS = [
  {
    label: 'Converter',
    links: [
      {
        label: 'Color Converter',
        link: '/convertor/color-converter',
        keywords: ['Convertor', 'Color', 'Hex', 'RGB', 'HSL', 'CSS', 'Picker'],
        color: '#fd7e14',
        icon: PipetteIcon
      },
      {
        label: 'Image Converter',
        link: '/convertor/image-converter',
        keywords: ['Convertor', 'Image', 'Format', 'Extension'],
        color: '#40c057',
        icon: ImageIcon
      }
    ]
  },
  {
    label: 'Calculator',
    links: [
      {
        label: 'Word Counter',
        link: '/calculator/word-counter',
        keywords: ['Word', 'Counter', 'Calculator', 'Text'],
        color: '#4c6ef5',
        icon: TextIcon
      }
    ]
  },
  {
    label: 'Generator',
    links: [
      {
        label: 'Password Generator',
        link: '/generator/password-generator',
        keywords: ['Generator', 'Password', 'Random'],
        color: '#f783ac',
        icon: KeyIcon
      }
    ]
  },
  {
    label: 'Tester',
    links: [
      {
        label: 'Keyboard Tester',
        link: '/tester/keyboard-tester',
        keywords: ['Tester', 'Keyboard', 'Test'],
        color: '#be4bdb',
        icon: KeyboardIcon
      }
    ]
  }
]
