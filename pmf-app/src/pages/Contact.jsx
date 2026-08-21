import { useState } from 'react'
import { toast } from 'sonner'
import { MailIcon } from 'lucide-react'
import { useSeo } from '@/hooks/useSeo'
import philAndMq from '@/assets/media/phil-and-mq.jpg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'

function Contact() {
  useSeo({
    title: 'Contact Us',
    description:
      'Get in touch with the Philip Morgan Foundation with questions, to get involved, or to learn how we support families in need.',
  })

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!firstName.trim() || !lastName.trim() || !email.trim() || !message.trim()) {
      toast.error('Please fill out your name, email, and message.')
      return
    }

    const subject = encodeURIComponent(`Message from ${firstName} ${lastName}`)
    const body = encodeURIComponent(
      `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\n\n${message}`
    )
    window.location.href = `mailto:pmfoundationorg@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="flex flex-col">
      <section className="px-6 py-16 text-center md:px-12">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-phil-blue/10">
          <MailIcon className="size-7 text-phil-blue" />
        </div>
        <h1 className="mt-6 text-4xl leading-tight font-medium text-phil-blue md:text-5xl">
          Get in Touch
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Have a question, want to get involved, or just want to say hello? We'd love to hear
          from you.
        </p>
      </section>

      <section className="bg-phil-blue/5 px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
          <img
            src={philAndMq}
            alt="Philip Morgan"
            className="aspect-[4/3] w-full rounded-xl object-cover shadow"
          />

          <div>
            <h2 className="text-center text-2xl leading-snug font-medium text-phil-blue">
              Send Us a Message
            </h2>
            <p className="mt-2 text-center text-base text-muted-foreground">
              Fill out the form below and we'll get back to you as soon as we can.
            </p>

            <form onSubmit={handleSubmit} className="mt-8">
              <FieldGroup>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field>
                    <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                    <Input
                      id="firstName"
                      value={firstName}
                      onChange={(event) => setFirstName(event.target.value)}
                      className="bg-background shadow-sm"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                    <Input
                      id="lastName"
                      value={lastName}
                      onChange={(event) => setLastName(event.target.value)}
                      className="bg-background shadow-sm"
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
                    className="bg-background shadow-sm"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="message">Message</FieldLabel>
                  <Textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className="bg-background shadow-sm"
                  />
                </Field>
                <Button
                  type="submit"
                  className="rounded-full bg-phil-blue text-white hover:bg-phil-blue/90"
                >
                  Send Message
                </Button>
              </FieldGroup>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
