import { CalendarIcon, ClockIcon, FileTextIcon, MapPinIcon } from 'lucide-react'
import { FEATURED_EVENT } from '@/data/event'
import { Button } from '@/components/ui/button'
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'

// Shared "Upcoming Events" block used on both the Home and Events pages.
// Renders the featured event pane, or an empty state when there is none.
function UpcomingEvents({ emptyClassName = 'border' }) {
  if (!FEATURED_EVENT) {
    return (
      <Empty className={emptyClassName}>
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
    )
  }

  const { name, date, time, location, learnMoreUrl, flyerUrl, hostNote } =
    FEATURED_EVENT

  return (
    <div className="rounded-xl border bg-background p-6 shadow-sm md:p-8">
      <h3 className="text-xl leading-snug font-medium text-phil-blue md:text-2xl">
        {name}
      </h3>

      <ul className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
        <li className="flex items-center gap-2">
          <CalendarIcon className="size-4 shrink-0 text-phil-blue" />
          {date}
        </li>
        <li className="flex items-center gap-2">
          <ClockIcon className="size-4 shrink-0 text-phil-blue" />
          {time}
        </li>
        <li className="flex items-center gap-2">
          <MapPinIcon className="size-4 shrink-0 text-phil-blue" />
          {location}
        </li>
      </ul>

      {hostNote ? (
        <p className="mt-4 text-sm text-muted-foreground italic">{hostNote}</p>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-3">
        <Button
          render={
            <a href={learnMoreUrl} target="_blank" rel="noopener noreferrer" />
          }
          nativeButton={false}
          size="lg"
          className="rounded-full bg-phil-blue px-6 text-white hover:bg-phil-blue/90"
        >
          Learn More
        </Button>
        <Button
          render={
            <a href={flyerUrl} target="_blank" rel="noopener noreferrer" />
          }
          nativeButton={false}
          variant="outline"
          size="lg"
          className="rounded-full border-phil-blue px-6 text-phil-blue hover:bg-phil-blue/5 hover:text-phil-blue"
        >
          <FileTextIcon />
          Open Flyer
        </Button>
      </div>
    </div>
  )
}

export default UpcomingEvents
