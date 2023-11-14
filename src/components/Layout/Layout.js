import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet';

const Layout = ({ children, title, description, author, keywords }) => {
  return (
    <div className='main'>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
        

        </Helmet>
      <Header />
      <main style={{ minHeight: '73.9vh' }}>
          {children}
          <p className='accountArea'></p>
        </main>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'TokenEats',
  description:'Website for Mess management',
  keywords:'Mess management',
  author:'technobuilders'
}

export default Layout