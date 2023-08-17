import Heading from './Heading'
import Footer from './Footer'
import Head from './Head'

const Layout = ({ children, headProps = {} }) => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      {/* meta props */}
      <Head {...headProps} />

      <div className="container mx-auto px-4 lg:px-4">
        <Heading />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
