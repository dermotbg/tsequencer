const baseUrl = '/api/login'

interface LoginData {
  username: string
  password: string
}

export const loginRequest = async (loginObj: LoginData) => {
  try {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...loginObj, 
        username: loginObj.username.toLowerCase().trim()
      }),
    })

    if(response.ok){
      return response.json()
    }
    else {
      throw new Error(await response.text())
    }
  } 
  catch (error) {
    let errorMessage = ""
    if (error instanceof Error){
      errorMessage += error.message
    }
    throw new Error(`${errorMessage}`)
  }
}

export const validateTokenAsync = async () => {
  try{
    const response = await fetch(`${baseUrl}/validate-token`, {
      method: 'POST'
    })
    const respObject = {
      status: response.status,
      username: await response.text()
    }
    return respObject
  }
  catch(err){
    console.error(err)
  }
} 

export const logoutRequest = async () => {
  try{
    const response = await fetch(`${baseUrl}/logout`, {
      method: 'POST'
    })
    return response.status
  }
  catch (error) {
    let errorMessage = ""
    if (error instanceof Error){
      errorMessage += error.message
    }
    throw new Error(`${errorMessage}`)
  }
}