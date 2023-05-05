import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import type { LayoutProps } from '@vercel/examples-ui/layout';
import '../styles/global.css';

import '@vercel/examples-ui/globals.css';

function App({ Component, pageProps }: AppProps) {

	return (
      <div className='main-container'>
        <Component {...pageProps} />      
      </div>
	);
}

export default App;
