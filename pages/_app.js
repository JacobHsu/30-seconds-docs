import Script from 'next/script'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src='https://embed.runkit.com' />
      <Component {...pageProps} />
    </>
  )
}