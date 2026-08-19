import { Link } from 'react-router-dom'
import { CalendarIcon, HeartHandshakeIcon } from 'lucide-react'
import philFishing from '@/assets/media/phil-fishing.jpg'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'

function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="grid items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-4xl leading-tight font-medium text-phil-blue md:text-5xl md:leading-tight">
            Honoring Loved Ones, Supporting the Families Who Love Them
          </h1>
          <p className="max-w-xl text-sm text-muted-foreground">
            The Philip Morgan Foundation is a non-profit organization aimed at providing support
            and assistance to families experiencing the hardships associated with the terminal
            or devastating illness of a loved one.
          </p>
          <Button
            render={<Link to="/about" />}
            size="lg"
            className="rounded-full bg-phil-blue px-6 text-white hover:bg-phil-blue/90"
          >
            Learn More
          </Button>
        </div>
        <img
          src={philFishing}
          alt="Philip Morgan fishing"
          className="w-full rounded-xl object-cover shadow"
        />
      </section>

      {/* Mission / info */}
      <section className="bg-phil-blue px-6 py-16 md:px-12">
        <Card className="mx-auto max-w-3xl border-none bg-transparent text-center ring-0">
          <CardHeader>
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-white/10">
              <HeartHandshakeIcon className="size-7 text-white" />
            </div>
            <CardTitle className="mt-4 text-xl text-white">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base leading-relaxed text-white/80">
              Providing critical financial support to those in need, our organization helps
              alleviate the burden of expenses, ensuring individuals and families can access
              essential resources. We have donated over $55,000 to families in need to this
              date.
            </CardDescription>
          </CardContent>
        </Card>
      </section>

      {/* Upcoming events */}
      <section className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-14 text-2xl leading-snug font-medium text-phil-blue">
            Upcoming Events
          </h2>
          <Empty className="border">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <CalendarIcon />
              </EmptyMedia>
              <EmptyTitle>No Upcoming Events</EmptyTitle>
              <EmptyDescription>
                Check back soon — new events will be posted here.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        </div>
      </section>
    </div>
  )
}

export default Home
