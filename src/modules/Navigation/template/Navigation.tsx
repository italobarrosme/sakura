'use client'

import { MenuAuth } from '@/modules/Authentication'
import { Navbar } from '../components/Navbar'
import { useMenuNav } from '../hooks'

export const Navigation = () => {
  const { isMenuOpen, menus, toggleMenu, signIn, data } = useMenuNav()
  const isAuth = data?.user

  return (
    <Navbar logo="/logo.png" menus={menus} isMenuOpen={isMenuOpen}>
      <MenuAuth
        icon={isMenuOpen ? 'lucide:x' : 'quill:hamburger'}
        onClick={isAuth ? toggleMenu : () => signIn()}
        data={data}
      />
    </Navbar>
  )
}
