import Head from 'next/head'

const Seo = ({
  pageTitle,
  pageDescription,
  pagePath,
  pageImg,
  pageImgWidth,
  pageImgHeight
}) => {
  const defaultTitle = '豊田高専吹奏楽部'
  const defaultDescription = '豊田高専吹奏楽部です'
  const defaultImg = "https://nittc-windor.web.app/eye_catch.jpg"

  const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle
  const description = pageDescription ? pageDescription : defaultDescription
  const url = pagePath
  const imgUrl = pageImg ? pageImg : defaultImg
  const imgWidth = pageImgWidth ? pageImgWidth : 1280
  const imgHeight = pageImgHeight ? pageImgHeight : 640

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={String(imgWidth)} />
      <meta property="og:image:height" content={String(imgHeight)} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name="twitter:site" content="@NittcWind" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imgUrl} />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="canonical" href={url} />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}

export default Seo
