import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title:       string
  description: string
  image?:      string
  url?:        string
}

export function SEO({ title, description, image, url }: SEOProps) {
  const siteName = 'Jonad — Creative Developer & Designer'
  const fullTitle = `${title} | ${siteName}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image"       content={image || '/og-image.png'} />
      <meta property="og:url"         content={url || '/'} />
      <meta property="og:type"        content="website" />
      <meta name="twitter:card"       content="summary_large_image" />
      <meta name="twitter:title"      content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"      content={image || '/og-image.png'} />
    </Helmet>
  )
}
