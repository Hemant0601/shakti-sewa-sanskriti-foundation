import { useInView } from '../hooks/useInView'

const variants = {
  fadeUp: {
    hidden: 'opacity-0 translate-y-8',
    visible: 'opacity-100 translate-y-0',
  },
  fadeDown: {
    hidden: 'opacity-0 -translate-y-8',
    visible: 'opacity-100 translate-y-0',
  },
  fadeLeft: {
    hidden: 'opacity-0 translate-x-12',
    visible: 'opacity-100 translate-x-0',
  },
  fadeRight: {
    hidden: 'opacity-0 -translate-x-12',
    visible: 'opacity-100 translate-x-0',
  },
  fadeIn: {
    hidden: 'opacity-0',
    visible: 'opacity-100',
  },
  scaleUp: {
    hidden: 'opacity-0 scale-90',
    visible: 'opacity-100 scale-100',
  },
  slideUp: {
    hidden: 'opacity-0 translate-y-16',
    visible: 'opacity-100 translate-y-0',
  },
}

export default function AnimateIn({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 700,
  className = '',
  as: Tag = 'div',
}) {
  const [ref, isInView] = useInView()
  const v = variants[variant] || variants.fadeUp

  return (
    <Tag
      ref={ref}
      className={`transition-all ease-out ${isInView ? v.visible : v.hidden} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Tag>
  )
}
