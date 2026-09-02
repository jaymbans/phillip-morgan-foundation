import { useEffect, useState } from 'react'
import { HeartPulseIcon } from 'lucide-react'
import { useSeo } from '@/hooks/useSeo'
import UpcomingEvents from '@/components/UpcomingEvents'
import philAndFriends from '@/assets/media/phil-and-friends.jpg'
import cornholeImg from '@/assets/media/cornhole-img.svg'
import cht1 from '@/assets/media/cht2024-1.jpg'
import cht2 from '@/assets/media/cht2024-2.jpg'
import cht3 from '@/assets/media/cht2024-3.jpg'
import cht4 from '@/assets/media/cht2024-4.jpg'
import cht5 from '@/assets/media/cht2024-5.jpg'
import cht6 from '@/assets/media/cht2024-6.jpg'
import cht7 from '@/assets/media/cht2024-7.jpg'
import cht8 from '@/assets/media/cht2024-8.jpg'
import cht9 from '@/assets/media/cht2024-9.jpg'
import cht10 from '@/assets/media/cht2024-10.jpg'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const PAST_EVENT_PHOTOS = [cht1, cht2, cht3, cht4, cht5, cht6, cht7, cht8, cht9, cht10]

const CAROUSEL_ARROW_CLASS =
  'size-10 border-none bg-phil-blue text-white hover:bg-phil-blue/90 hover:text-white'

function Events() {
  useSeo({
    title: 'Events',
    description:
      'Join the Philip Morgan Foundation at fundraising events, including our annual Corn Hole Tournament and community blood drives.',
  })

  const [carouselApi, setCarouselApi] = useState(null)

  useEffect(() => {
    if (!carouselApi) return

    const id = setInterval(() => {
      carouselApi.scrollNext()
    }, 4000)

    return () => clearInterval(id)
  }, [carouselApi])

  return (
    <div className="flex flex-col">
      <section className="grid items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-4xl leading-tight font-medium text-phil-blue md:text-5xl md:leading-tight">
            Show Up for a Cause You Care About
          </h1>
          <p className="max-w-md text-base text-muted-foreground">
            Join us at our events, meet others who share the same passion for giving back, and
            help make a difference in the lives of families who need it most.
          </p>
        </div>
        <img
          src={philAndFriends}
          alt="Philip Morgan with friends"
          className="aspect-[4/3] w-full rounded-xl object-cover shadow"
        />
      </section>

      <section className="bg-phil-blue/5 px-6 py-16 md:px-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-14 text-2xl leading-snug font-medium text-phil-blue">
            Upcoming Events
          </h2>
          <UpcomingEvents emptyClassName="border bg-background" />
        </div>
      </section>

      <section className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl leading-snug font-medium text-phil-blue">
            Ways We Raise Funds
          </h2>

          <div className="mt-14 flex flex-col gap-16">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <img
                src={cornholeImg}
                alt="Philip Morgan Foundation cornhole board"
                className="mx-auto w-full max-w-xs md:max-w-sm"
              />
              <div>
                <h3 className="text-xl font-medium text-phil-blue">Corn Hole Tournaments</h3>
                <p className="mt-4 text-left text-base leading-relaxed text-muted-foreground">
                  We host corn hole tournaments as a fundraising initiative to support Phil's
                  mission. These tournaments serve as a fun and engaging way for our community
                  to come together and raise vital funds for our cause. By participating in our
                  tournaments, you're not only enjoying a day of friendly competition but also
                  contributing directly to a beautiful cause.
                </p>
              </div>
            </div>

            <div className="grid items-center gap-10 md:grid-cols-2">
              <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-phil-blue md:order-2">
                <HeartPulseIcon className="size-20 text-white" />
              </div>
              <div className="md:order-1">
                <h3 className="text-xl font-medium text-phil-blue">Blood Drives</h3>
                <p className="mt-4 text-left text-base leading-relaxed text-muted-foreground">
                  The PMF organizes blood drives to support local hospitals and patients in
                  need. These drives play a crucial role in maintaining an adequate blood supply
                  for emergency situations, surgeries, and ongoing medical treatments. By
                  donating blood at our drives, you're directly saving lives and providing hope
                  to those facing health challenges. Join us in making a life-saving impact in
                  our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted px-6 py-16 md:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
            Past Event
          </p>
          <h2 className="mt-2 text-2xl leading-snug font-medium text-phil-blue md:text-3xl">
            Third Annual Philip Morgan Foundation Corn Hole Tournament
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-12">
            <div>
              <p className="text-3xl font-medium text-phil-blue">125</p>
              <p className="text-sm text-muted-foreground">Attendees</p>
            </div>
            <div>
              <p className="text-3xl font-medium text-phil-blue">$15,000+</p>
              <p className="text-sm text-muted-foreground">Raised in donations</p>
            </div>
          </div>

          <div className="relative mt-12 px-8 sm:px-12">
            <Carousel setApi={setCarouselApi} opts={{ loop: true }}>
              <CarouselContent>
                {PAST_EVENT_PHOTOS.map((src, index) => (
                  <CarouselItem key={src}>
                    <img
                      src={src}
                      alt={`Third Annual Corn Hole Tournament photo ${index + 1}`}
                      className="aspect-[4/3] w-full rounded-xl object-cover shadow"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className={CAROUSEL_ARROW_CLASS} />
              <CarouselNext className={CAROUSEL_ARROW_CLASS} />
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Events
