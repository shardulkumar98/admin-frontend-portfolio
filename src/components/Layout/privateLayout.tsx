import Navbar from 'components/Navbar'

const PrivateLayout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  )
}

export default PrivateLayout
