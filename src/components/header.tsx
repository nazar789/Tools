import Link from 'next/link'
import Logo from './logo'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { ModeToggle } from './mode-toggle'

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-40 bg-background/20 backdrop-blur-[10px] shadow-sm saturate-100'>
      <div className='mx-auto max-w-6xl flex items-center justify-between px-8 h-14'>
        <Link href='/' aria-label='Home' title='Home'>
          <Logo />
        </Link>

        <div className='flex items-center gap-3'>
          <ModeToggle />
          <a
            href='https://github.com/atuandev'
            target='_blank'
            rel='noreferrer noopener'
            aria-label='GitHub'
          >
            <SiGithub />
          </a>
        </div>
      </div>
    </header>
  )
}
