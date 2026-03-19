import { useEffect } from 'react'

interface SEOHeadProps {
  title: string
  description: string
  url?: string
  image?: string
  type?: 'website' | 'article'
  keywords?: string
}

const SITE_NAME = 'Medicacom'
const SITE_URL = 'https://www.medicacom.tn'
const DEFAULT_IMAGE = `${SITE_URL}/assets/logo.webp`

/**
 * Sets document head meta tags for SEO, Open Graph, and Twitter Cards.
 * This approach directly mutates <head> without requiring react-helmet.
 */
export function SEOHead({
  title,
  description,
  url = SITE_URL,
  image = DEFAULT_IMAGE,
  type = 'website',
  keywords = '',
}: SEOHeadProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`

    // -- Core --
    document.title = fullTitle
    setMeta('description', description)
    if (keywords) setMeta('keywords', keywords)

    // -- Canonical --
    setLink('canonical', url)

    // -- Open Graph (Facebook, LinkedIn, WhatsApp, etc.) --
    setOgMeta('og:type', type)
    setOgMeta('og:site_name', SITE_NAME)
    setOgMeta('og:title', fullTitle)
    setOgMeta('og:description', description)
    setOgMeta('og:url', url)
    setOgMeta('og:image', image)
    setOgMeta('og:image:width', '1200')
    setOgMeta('og:image:height', '630')
    setOgMeta('og:locale', 'fr_TN')

    // -- Twitter Cards --
    setTwitterMeta('twitter:card', 'summary_large_image')
    setTwitterMeta('twitter:title', fullTitle)
    setTwitterMeta('twitter:description', description)
    setTwitterMeta('twitter:image', image)

    // -- Cleanup: restore default title on unmount --
    return () => {
      document.title = `${SITE_NAME} - Intelligence Pharmaceutique`
    }
  }, [title, description, url, image, type, keywords])

  return null
}

// ── helpers ──────────────────────────────────────────────────────────────────

function setMeta(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.name = name
    document.head.appendChild(el)
  }
  el.content = content
}

function setOgMeta(property: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.content = content
}

function setTwitterMeta(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.name = name
    document.head.appendChild(el)
  }
  el.content = content
}

function setLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
}
