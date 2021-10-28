import {BrowserRouter} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const DefaultLayout = ({children}) => {
  return (
    <BrowserRouter>
      <Header />
      {children}
      <Footer />
    </BrowserRouter>
  )
}

export default DefaultLayout
