import useUserStore from "@/hooks/StateHooks/useUserStore";
import UserMenuIcon from "./components/UserMenuIcon";
import UserMenuLinks from "./components/UserMenuLinks";
import { useNavigate } from "@tanstack/react-router";

const UserMenuContainer = ({
  userMenuOpen,
  setUserMenuOpen,
  logoutHandler,
}: {
  userMenuOpen: boolean;
  setUserMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  logoutHandler: () => void;
}) => {
  const { userId } = useUserStore();
  const navigate = useNavigate({ from: "/" });
  if (!userId)
    return <UserMenuIcon userMenuOpen={userMenuOpen} setUserMenuOpen={setUserMenuOpen} />;
  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <div className="relative ml-3">
        <UserMenuIcon userMenuOpen={userMenuOpen} setUserMenuOpen={setUserMenuOpen} />
        {userMenuOpen ? (
          <UserMenuLinks userId={userId} navigate={navigate} logoutHandler={logoutHandler} />
        ) : null}
      </div>
    </div>
  );
};

export default UserMenuContainer;
