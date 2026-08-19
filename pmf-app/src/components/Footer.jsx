import { Link } from 'react-router-dom'
import { PhoneIcon } from 'lucide-react'
import pmfLogo from '@/assets/media/white-logo.png'
import footerFb from '@/assets/media/footer-fb.png'
import footerIg from '@/assets/media/footer-ig.png'
import footerMail from '@/assets/media/footer-mail.png'
import { Separator } from '@/components/ui/separator'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Events', to: '/events' },
  { label: 'Contact', to: '/contact' },
]

const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/PhilipMorganFoundation/',
    icon: footerFb,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/philipmorganfoundation/',
    icon: footerIg,
  },
  {
    label: 'Email',
    href: 'mailto:pmfoundationorg@gmail.com',
    icon: footerMail,
  },
]

function Footer() {
  return (
    <footer className="bg-phil-blue px-6 py-8 md:px-12">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center gap-6">
        <img src={pmfLogo} alt="The Philip Morgan Foundation" className="h-20 w-auto" />

        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <div className="flex gap-6">
            {SOCIAL_LINKS.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <img src={icon} alt="" className="size-5" />
              </a>
            ))}
          </div>

          <a
            href="tel:+12018151537"
            className="flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            <PhoneIcon className="size-4" />
            +1 (201) 815-1537
          </a>
        </div>

        <Separator className="bg-white/10" />

        <p className="text-center text-xs text-white/60">
          PHILIP MORGAN FOUNDATION, INC | 501 (c) (3)
        </p>
      </div>
    </footer>
  )
}

export default Footer
