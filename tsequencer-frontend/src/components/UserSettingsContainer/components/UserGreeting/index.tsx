const UserGreeting = ({ username }: { username: string }) => {
  return (
    <div className="flex flex-col items-center p-10">
      <h1 className="border-b-2 pb-2 text-4xl font-bold shadow-stone-200">
        Hello {`${username.charAt(0).toUpperCase()}` + `${username.slice(1)}`}
      </h1>
      <h2 className="mt-10 font-bold shadow-stone-200">
        Here you can delete your saved sequences, or modify your username and password.
      </h2>
    </div>
  );
};

export default UserGreeting;
