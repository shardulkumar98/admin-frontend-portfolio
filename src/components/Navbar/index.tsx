import { useNavigate } from 'react-router-dom'
import { LoginRoute } from 'constant/routes'
import LogOutSvg from 'assets/svg/logout'
import { MainContianer, Heading, LogoutButton } from 'styles/components/Navbar'

const Navbar = () => {
  const navigate = useNavigate()

  const handleLogOut = () => {
    localStorage.removeItem('token')
    navigate(`${LoginRoute.path}`)
  }

  return (
    <MainContianer>
      <Heading>Admin Portal</Heading>
      <LogoutButton onClick={handleLogOut}>
        <LogOutSvg />
      </LogoutButton>
    </MainContianer>
  )
}

export default Navbar
