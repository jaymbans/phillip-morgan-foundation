import { useState } from 'react'
import { toast } from 'sonner'
import { HeartHandshakeIcon } from 'lucide-react'
import { useSeo } from '@/hooks/useSeo'
import philSlide2 from '@/assets/media/phil-slide-2.jpg'
import philSlide3 from '@/assets/media/phil-slide3.jpg'
import philSlide4 from '@/assets/media/phil-slide-4.JPG'
import philSlide5 from '@/assets/media/phil-slide-5.jpg'
import philAndFam from '@/assets/media/phil-and-fam.jpg'
import philWithFish from '@/assets/media/phil-with-fish.png'
import cornholeEvent from '@/assets/media/cht2024-2.jpg'
import footerFb from '@/assets/media/footer-fb.png'
import footerIg from '@/assets/media/footer-ig.png'
import footerMail from '@/assets/media/footer-mail.png'
import ImageCycler from '@/components/ImageCycler'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'

const SLIDES = [
  { src: philSlide2, position: '80% center' },
  philSlide3,
  philSlide4,
  { src: philSlide5, position: '65% 10%' },
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

function About() {
  useSeo({
    title: 'About Philip Morgan',
    description:
      "Learn about Philip Morgan — Navy veteran, father, and friend — and the mission behind the Philip Morgan Foundation's support for families facing terminal illness.",
  })

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  function handleSignUp(event) {
    event.preventDefault()

    if (!firstName.trim() || !lastName.trim() || !email.trim()) {
      toast.error('Please fill out your first name, last name, and email.')
      return
    }

    const subject = encodeURIComponent('Sign Up for Updates')
    const body = encodeURIComponent(
      `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}`
    )
    window.location.href = `mailto:pmfoundationorg@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="grid items-center gap-10 px-6 py-16 md:grid-cols-[1fr_1.3fr] md:px-12">
        <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
          <h1 className="text-4xl leading-tight font-medium text-phil-blue md:text-5xl md:leading-tight">
            Philip Morgan
          </h1>
          <p className="text-xl font-medium text-phil-blue md:text-2xl">
            A Fighter, a Father, a Friend
          </p>
        </div>
        <ImageCycler images={SLIDES} alt="Philip Morgan" />
      </section>

      {/* Who is Philip Morgan */}
      <section className="bg-phil-blue/5 px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <img
            src={philAndFam}
            alt="Philip Morgan with family"
            className="aspect-[4/3] w-full rounded-xl object-cover shadow"
          />
          <div>
            <h2 className="text-2xl leading-snug font-medium text-phil-blue">
              Who is Philip Morgan
            </h2>
            <p className="mt-6 text-left text-base leading-relaxed text-muted-foreground">
              At the age of 56, Philip Morgan, a devoted family man, businessman, Navy Veteran,
              funny, no-nonsense, Yankee and Giants-loving, wonderful person, succumbed to the
              effects of a hard battle with cancer.
            </p>
            <p className="mt-4 text-left text-base leading-relaxed text-muted-foreground">
              Philip was diagnosed in August, 2020 with esophageal cancer. He bravely endured
              chemotherapy, hospitalizations, 32 blood transfusions, immunotherapy and embraced
              every available procedure/medication that could beat this disease. His suffering
              and war with this monster were shared by his family. He passed away peacefully at
              home on April 14, 2021, just 8 months after being diagnosed. He was adamant that
              no family should ever experience such a horrific ordeal and if they face this
              fight, they do not do it alone.
            </p>
          </div>
        </div>
      </section>

      {/* Phil's Mission */}
      <section className="bg-phil-blue px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="flex size-14 items-center justify-center rounded-full bg-white/10">
              <HeartHandshakeIcon className="size-7 text-white" />
            </div>
            <h2 className="mt-6 text-3xl leading-snug font-medium text-white md:text-4xl">
              Phil's Mission
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-white/90 md:text-2xl">
              The mission of our organization is to provide support and assistance to families
              experiencing the hardships associated with the terminal or devastating illness of
              a loved one.
            </p>
          </div>
          <img
            src={philWithFish}
            alt="Philip Morgan fishing"
            style={{ objectPosition: 'center 15%' }}
            className="aspect-[4/3] w-full rounded-xl object-cover shadow"
          />
        </div>
      </section>

      {/* Join Us */}
      <section className="bg-muted px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <div className="md:order-2">
            <h2 className="text-2xl leading-snug font-medium text-phil-blue">Join Us</h2>
            <p className="mt-6 text-left text-base leading-relaxed text-muted-foreground">
              Join us at our upcoming events, lend a helping hand, and experience the joy of
              giving back. Whether you're passionate about making a difference or simply want
              to connect with like-minded individuals, we welcome you with open arms. Your
              involvement matters, and together, we can create positive change.
            </p>
          </div>
          <img
            src={cornholeEvent}
            alt="Philip Morgan Foundation event"
            className="aspect-[4/3] w-full rounded-xl object-cover shadow md:order-1"
          />
        </div>
      </section>

      {/* Keep in touch + Social */}
      <section className="px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-5xl items-center gap-16 md:grid-cols-2">
          <div>
            <h2 className="text-2xl leading-snug font-medium text-phil-blue">Keep in Touch</h2>
            <p className="mt-2 text-base text-muted-foreground">
              Sign up to hear about updates and upcoming events.
            </p>

            <form onSubmit={handleSignUp} className="mt-8">
              <FieldGroup>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field>
                    <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                    <Input
                      id="firstName"
                      value={firstName}
                      onChange={(event) => setFirstName(event.target.value)}
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                    <Input
                      id="lastName"
                      value={lastName}
                      onChange={(event) => setLastName(event.target.value)}
                    />
                  </Field>
                </div>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </Field>
                <Button
                  type="submit"
                  className="rounded-full bg-phil-blue text-white hover:bg-phil-blue/90"
                >
                  Sign Up for Updates
                </Button>
              </FieldGroup>
            </form>
          </div>

          <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
            <h2 className="text-2xl leading-snug font-medium text-phil-blue">Follow Along</h2>
            <p className="text-base text-muted-foreground">
              Follow the Philip Morgan Foundation for updates, event announcements, and stories
              from the families we support.
            </p>
            <div className="flex gap-6">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-11 items-center justify-center rounded-full bg-phil-blue transition-colors hover:bg-phil-blue/90"
                >
                  <img src={icon} alt="" className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
