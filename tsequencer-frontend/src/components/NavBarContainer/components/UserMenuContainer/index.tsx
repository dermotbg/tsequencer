import UserMenuIcon from "./components/UserMenuIcon"
import UserMenuLinks from "./components/UserMenuLinks"

const UserMenuContainer = ({ userMenuOpen, setUserMenuOpen }: { userMenuOpen: boolean, setUserMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {

  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <div className="relative ml-3">
        <UserMenuIcon userMenuOpen={userMenuOpen} setUserMenuOpen={setUserMenuOpen} />
        {userMenuOpen
                ? <UserMenuLinks />
                : null
              }
      </div>
    </div>
  )

}

export default UserMenuContainer