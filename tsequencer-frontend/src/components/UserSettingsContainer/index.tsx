import { Route } from "@/routes/user/$userId";

const UserSettingsContainer = () => {
  const { userId } = Route.useParams();
  return <div>{userId}</div>;
};

export default UserSettingsContainer;
