import me from '~/me.profile'
import { BottomActionArea } from '../mobile/BottomActionArea'
import { useEffect, type FC } from 'react'
import { useStore } from '@nanostores/react'
import { $isMobileNavOpen } from '~/store'
import clsx from 'clsx'
import { Overlay } from '../mobile/Overlay'
import { useInView } from 'react-intersection-observer'

const navigation = {
  BLOG: '/blog',
  ARTWORKS: '/artworks',
  ENGINEERING: '/engineering',
  ...Object.entries(me.contacts).reduce(
    (accumulator: { [key: string]: string }, [key, value]) => {
      key === 'e-mail'
        ? (accumulator[key.toUpperCase()] = `mailto:${value}`)
        : (accumulator[key.toUpperCase()] = value)
      return accumulator
    },
    {},
  ),
}

export interface NavigationProps {
  currentRoute: string
}

export const Navigation: FC<NavigationProps> = (props) => {
  const isMobileNavOpen = useStore($isMobileNavOpen)
  const [overlayInViewRef, overlayInView] = useInView()

  useEffect(() => {
    $isMobileNavOpen.set(overlayInView)
  }, [overlayInView])

  return (
    <>
      <section
        className={clsx(
          'sm:flex flex-col gap-8 fixed left-6 bottom-36 sm:bottom-auto z-20',
          isMobileNavOpen ? 'flex' : 'hidden',
        )}
      >
        <a
          className="w-12 rounded-lg transition-all hover:mix-blend-luminosity"
          href="/"
        >
          <img
            className="border-2 border-[#85607a]/30 rounded-lg"
            src="/favicon.svg"
            alt="Logo"
            draggable="false"
          />
        </a>
        <aside className="flex flex-col gap-4 text-sm tracking-wider ml-1">
          {Object.entries(navigation).map(([title, route]) => {
            const isActive = route === props.currentRoute
            return (
              <a
                className={clsx(
                  'opacity-50',
                  isActive && 'font-bold opacity-100',
                )}
                href={route}
                key={title}
              >
                {title}
                {isActive && <i>*</i>}
              </a>
            )
          })}
        </aside>
        <a
          className="fixed bottom-16 text-xs animate-bounce"
          href="https://github.com/miyakoochi/escapeland"
        >
          <i> * かぼちゃの馬車 *</i>
        </a>
      </section>
      <Overlay className="z-10" show={isMobileNavOpen}>
        <div ref={overlayInViewRef} />
      </Overlay>
      <BottomActionArea className="z-30">
        {isMobileNavOpen ? '✕' : '+'}
      </BottomActionArea>
    </>
  )
}

export default Navigation
