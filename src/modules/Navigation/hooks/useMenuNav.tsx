import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from 'next-auth/react'

export const useMenuNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const { data } = useSession()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menus = [
    {
      name: 'Logout',
      icon: 'bx:bx-home',
      onClick: () => {
        signOut()
        setIsMenuOpen(false)
      },
    },
    {
      name: 'Item',
      icon: 'bx:bx-home',
      onClick: () => {
        router.push('/')
        setIsMenuOpen(false)
      },
    },
  ]

  return {
    menus,
    isMenuOpen,
    signIn,
    toggleMenu,
    data,
  }
}
