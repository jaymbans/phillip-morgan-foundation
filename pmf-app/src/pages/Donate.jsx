import { HeartHandshakeIcon } from 'lucide-react'
import { useSeo } from '@/hooks/useSeo'
import pmfQrDonate from '@/assets/media/pmf-qr-donate.png'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

function Donate() {
  useSeo({
    title: 'Donate',
    description:
      'Support families facing the hardships of terminal illness. Donate to the Philip Morgan Foundation by QR code or secure online form.',
  })

  return (
    <div className="flex flex-col">
      <section className="px-6 py-16 text-center md:px-12">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-phil-blue/10">
          <HeartHandshakeIcon className="size-7 text-phil-blue" />
        </div>
        <h1 className="mt-6 text-4xl leading-tight font-medium text-phil-blue md:text-5xl">
          Thank You for Your Support
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Every gift helps us support families facing the hardships of a terminal or devastating
          illness. Scan the QR code or use the form below — both are quick ways to give.
        </p>
      </section>

      <section className="bg-phil-blue/5 px-6 py-16 md:px-12">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-3">
            <img
              src={pmfQrDonate}
              alt="QR code to donate to the Philip Morgan Foundation"
              className="size-56 rounded-xl bg-background object-contain p-4 shadow"
            />
            <Badge variant="secondary" className="bg-phil-blue text-white">
              Donation QR Code
            </Badge>
          </div>

          <div className="flex w-full items-center gap-4">
            <Separator className="flex-1" />
            <span className="shrink-0 text-sm font-medium text-muted-foreground">OR</span>
            <Separator className="flex-1" />
          </div>

          <iframe
            title="Donation form powered by Zeffy"
            src="https://www.zeffy.com/en-US/embed/donation-form/324a1727-cb81-4b10-ba06-4e0d68fdf08c"
            allow="payment"
            allowPaymentRequest
            allowTransparency="true"
            className="h-[700px] w-full rounded-xl border-0 shadow"
          />
        </div>
      </section>
    </div>
  )
}

export default Donate
