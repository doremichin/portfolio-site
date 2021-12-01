import '../styles/globals.css'
import Header from '../src/views/shared/header';
import Footer from '../src/views/shared/footer';
import BackTop from '../src/views/shared/backTop';
import { GlobalStyle } from '../src/style/GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
      <BackTop />
    </div>
  )
}

export default MyApp
