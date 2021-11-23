import '../styles/globals.css'
import Header from '../src/views/shared/header';
import Footer from '../src/views/shared/footer';
import BackTop from '../src/views/shared/backTop';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <BackTop />
    </div>
  )
}

export default MyApp
