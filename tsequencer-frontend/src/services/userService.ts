interface BaseUserType {
  username: string;
  password: string;
}

interface createUserType extends BaseUserType {
  confPassword: string;
}

interface updatePasswordType extends BaseUserType {
  newPassword: string;
}

const baseUrl = "/api/user";

export const createUserAsync = async (userObj: createUserType) => {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...userObj,
        username: userObj.username.toLowerCase().trim(),
      }),
    });

    if (response.ok) {
      return response.json();
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    let errorMessage = "";
    if (error instanceof Error) {
      errorMessage += error.message;
    }
    throw new Error(`${errorMessage}`);
  }
};
