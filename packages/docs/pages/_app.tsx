import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../styles/theme'
import { MenuProvider } from '../components/Menu/Context'

const MyApp: React.FunctionComponent<{
  Component: React.FunctionComponent
  pageProps: AppProps
}> = ({ Component, pageProps }) => {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <title>
          React Lists - Simple, virtualized, reverse and grouped lists
        </title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <meta
          name='description'
          content='Documentation and examples of how to create contact and message lists, and how to implement an infinite scroll.'
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MenuProvider>
          <Component {...pageProps} />
        </MenuProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
