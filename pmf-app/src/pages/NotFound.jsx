import { Link } from 'react-router-dom'
import { CompassIcon } from 'lucide-react'
import { useSeo } from '@/hooks/useSeo'
import { Button } from '@/components/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'

function NotFound() {
  useSeo({
    title: 'Page Not Found',
    description: "The page you're looking for doesn't exist or may have been moved.",
    noindex: true,
  })

  return (
    <section className="flex min-h-[60vh] items-center justify-center px-6 py-16 md:px-12">
      <Empty className="max-w-md border-none">
        <EmptyHeader>
          <EmptyMedia className="mb-0 size-14 rounded-full bg-phil-blue/10">
            <CompassIcon className="size-7 text-phil-blue" />
          </EmptyMedia>
          <EmptyTitle className="text-2xl font-medium text-phil-blue">
            404 - Page Not Found
          </EmptyTitle>
          <EmptyDescription>
            The page you're looking for doesn't exist or may have been moved.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button
            render={<Link to="/" />}
            nativeButton={false}
            className="rounded-full bg-phil-blue px-6 text-white hover:bg-phil-blue/90"
          >
            Back to Home
          </Button>
        </EmptyContent>
      </Empty>
    </section>
  )
}

export default NotFound
