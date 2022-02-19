import Head from 'next/head'
import Baner from '../components/Baner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Practice from '../components/Practice'
import Provide from '../components/Provide'
import Solutions from '../components/Solutions'
import Testmonials from '../components/Testmonials'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Law | Criminal law, bankruptcy law, family law, immigration law, civil rights & business law</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen overflow-x-hidden">
        <Header />
        <Baner />
        <Practice />
        <Provide />
        <Testmonials />
        <Solutions />
        <Footer />
      </main>
    </div>
  )
}
// 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