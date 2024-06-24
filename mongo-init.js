try {
  print("CREATING USER")
  db.createUser(
    {
      user: "dev_user",
      pwd: "dev_password",
      roles: [{ role: "readWrite", db: "dev_db" }]
    }
  );
} catch (error) {
  print(`Failed to create developer db user:\n${error}`);
}