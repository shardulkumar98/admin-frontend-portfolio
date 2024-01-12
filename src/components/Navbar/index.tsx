import { useNavigate } from 'react-router-dom'
import { LoginRoute, DashboardRoute, UploadsRoute, CategoryUploadsRoute } from 'constant/routes'
import LogOutSvg from 'assets/svg/logout'
import { MainContianer, Heading, NavItems, LogoutButton, NavItem } from 'styles/components/Navbar'

const Navbar = () => {
  const navigate = useNavigate()

  const handleLogOut = () => {
    localStorage.removeItem('token')
    navigate(`${LoginRoute.path}`)
  }

  const navbarList = [
    {
      label: 'Home',
      path: `${DashboardRoute.path}`,
    },
    {
      label: 'Uploads',
      path: `${UploadsRoute.path}`,
    },
    {
      label: 'Category',
      path: `${CategoryUploadsRoute.path}`,
    },
  ]

  return (
    <MainContianer>
      <Heading>Admin Portal</Heading>
      <NavItems>
        {navbarList.map((item, index) => {
          return (
            <NavItem key={index} onClick={() => navigate(item?.path)}>
              {item?.label}
            </NavItem>
          )
        })}
      </NavItems>
      <LogoutButton onClick={handleLogOut}>
        <LogOutSvg />
      </LogoutButton>
    </MainContianer>
  )
}

export default Navbar
