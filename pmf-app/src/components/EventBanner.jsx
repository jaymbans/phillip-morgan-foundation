import { useEffect, useState } from 'react'
import { FEATURED_EVENT } from '@/data/event'

function getRemaining(target) {
  const diff = target - Date.now()
  if (diff <= 0) return null

  const totalSeconds = Math.floor(diff / 1000)
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  }
}

// Live countdown to the event start. Renders nothing once the event has begun.
function Countdown({ startsAt }) {
  const target = new Date(startsAt).getTime()
  const [remaining, setRemaining] = useState(() => getRemaining(target))

  useEffect(() => {
    const id = setInterval(() => setRemaining(getRemaining(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  if (!remaining) return null

  const parts = [
    [remaining.days, 'd'],
    [remaining.hours, 'h'],
    [remaining.minutes, 'm'],
    [remaining.seconds, 's'],
  ]

  return (
    <span className="font-mono tabular-nums text-white/90">
      {parts.map(([value, label]) => `${value}${label}`).join(' ')}
    </span>
  )
}

// Site-wide announcement bar for the featured event. Sits above the header.
// A slow shimmer sweep and a soft pulse on the CTA draw the eye to it.
function EventBanner() {
  if (!FEATURED_EVENT) return null

  const { name, learnMoreUrl, startsAt } = FEATURED_EVENT

  return (
    <div className="relative overflow-hidden bg-phil-blue text-white">
      <div
        aria-hidden="true"
        className="event-banner-shimmer pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent"
      />
      <div className="relative mx-auto flex w-full max-w-[1600px] flex-wrap items-center justify-center gap-x-4 gap-y-1 px-6 py-2 text-center text-sm">
        <span>
          <span className="block text-white/80 sm:inline">
            Proud sponsor of the{' '}
          </span>
          <span className="font-medium">{name}</span>
        </span>
        {startsAt ? <Countdown startsAt={startsAt} /> : null}
        <a
          href={learnMoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="event-banner-cta rounded-full bg-white px-4 py-1 text-xs font-medium text-phil-blue transition-colors hover:bg-white/90"
        >
          Learn More
        </a>
      </div>
    </div>
  )
}

export default EventBanner
