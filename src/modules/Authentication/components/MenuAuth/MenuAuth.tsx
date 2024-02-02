'use client'

import { cn } from '@/utils'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { ButtonHTMLAttributes } from 'react'

type MenuAuthAuthProps = {
  icon?: string
  data: any
} & ButtonHTMLAttributes<HTMLButtonElement>

export const MenuAuth = ({
  icon = '',
  data,
  onClick,
  ...props
}: MenuAuthAuthProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'cursor-pointer appearance-none',
        data
          ? 'flex items-center gap-4 rounded-3xl border p-2 border-brand-light'
          : 'p-2 font-bold text-brand-secondary'
      )}
      {...props}
    >
      {data?.user ? (
        <>
          <Icon icon={icon} width={32} className="text-brand-light" />
          <Image
            src={data.user?.image || ''}
            alt="image user"
            width={32}
            height={32}
            className="rounded-full"
          />
        </>
      ) : (
        'Login'
      )}
    </button>
  )
}
