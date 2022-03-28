import '../styles/globals.css'
import App from 'next/app'
import React from 'react'
import { PageTransition } from 'next-page-transitions'

const MyApp = ({ Component, pageProps, router }) => {
	return (
		<>
			<PageTransition timeout={50} classNames="page-transition">
				<Component {...pageProps} key={router.route} />
			</PageTransition>
			<style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 100ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 100ms;
          }
        `}</style>
		</>
	)
}

App.getInitialProps = async ({ Component, router, ctx }) => {
	let pageProps = {}

	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx)
	}

	return { pageProps }
}

export default MyApp;