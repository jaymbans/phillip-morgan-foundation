import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_NAME = 'Philip Morgan Foundation'
const SITE_URL = 'https://philipmorganfoundation.org'

function upsertTag(selector, tagName, attrs) {
  let tag = document.head.querySelector(selector)

  if (!tag) {
    tag = document.createElement(tagName)
    document.head.appendChild(tag)
  }

  for (const [name, value] of Object.entries(attrs)) {
    tag.setAttribute(name, value)
  }
}

function removeTag(selector) {
  document.head.querySelector(selector)?.remove()
}

export function useSeo({ title, description, noindex = false }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`
    const canonicalUrl = `${SITE_URL}${pathname}`

    document.title = fullTitle

    upsertTag('meta[name="description"]', 'meta', {
      name: 'description',
      content: description ?? '',
    })

    upsertTag('link[rel="canonical"]', 'link', {
      rel: 'canonical',
      href: canonicalUrl,
    })

    upsertTag('meta[property="og:title"]', 'meta', {
      property: 'og:title',
      content: fullTitle,
    })

    upsertTag('meta[property="og:description"]', 'meta', {
      property: 'og:description',
      content: description ?? '',
    })

    upsertTag('meta[property="og:url"]', 'meta', {
      property: 'og:url',
      content: canonicalUrl,
    })

    upsertTag('meta[property="og:type"]', 'meta', {
      property: 'og:type',
      content: 'website',
    })

    if (noindex) {
      upsertTag('meta[name="robots"]', 'meta', {
        name: 'robots',
        content: 'noindex',
      })
    } else {
      removeTag('meta[name="robots"]')
    }
  }, [title, description, noindex, pathname])
}
