interface BaseUserType {
  username: string;
  password: string;
}

interface CreateUserType extends BaseUserType {
  confPassword: string;
}

interface UpdatePasswordType extends BaseUserType {
  id: string;
  newPassword: string;
}

interface UpdateUsernameType extends BaseUserType {
  id: string;
  newUsername: string;
}

const baseUrl = "/api/user";

export const createUserAsync = async (userObj: CreateUserType) => {
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

export const updatePasswordAsync = async (userObj: UpdatePasswordType) => {
  try {
    const response = await fetch(`${baseUrl}/pw/${userObj.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj),
    });
    if (response.ok) {
      return response;
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

export const updateUsernameAsync = async (userObj: UpdateUsernameType) => {
  try {
    const response = await fetch(`${baseUrl}/un/${userObj.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj),
    });
    if (response.ok) {
      return response;
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
