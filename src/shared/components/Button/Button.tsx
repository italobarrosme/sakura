'use client'
import { cn } from '@/utils'
import { Icon } from '@iconify/react'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const buttonVariantStyle = tv({
  base: 'flex justify-center gap-4 whitespace-nowrap rounded-2xl bg-brand-primary font-bold text-white hover:bg-brand-secondary',
  variants: {
    color: {
      primary: 'bg-brand-primary hover:bg-brand-primary/80',
      secondary: 'bg-brand-secondary hover:bg-brand-secondary/30',
      danger: 'bg-red-500 hover:bg-red-600',
    },
    size: {
      sm: 'px-2 py-1 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
})

type ButtonVariantsProps = VariantProps<typeof buttonVariantStyle>

export type ButtonProps = {
  className?: string
  icon?: string
  children: ReactNode
  variant?: ButtonVariantsProps
  isLoading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  className,
  type,
  icon = '',
  children,
  isLoading,
  variant,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(buttonVariantStyle(variant), className)}
      {...props}
    >
      {icon ? <Icon icon={icon} width={24} /> : null}
      {isLoading ? 'Carregando...' : children}
    </button>
  )
}
