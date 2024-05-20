const baseUrl = '/api/login'

interface LoginData {
  username: string
  password: string
}

export const loginRequest = async (loginObj: LoginData) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(loginObj),
  })
  const token = await response.text()
  return token
}

export const validateToken = async () => {
  try{
    const response = await fetch(`${baseUrl}/validate-token`, {
      method: 'POST'
    })
   return response.status
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
  catch(err){
    console.error(err)
  }
}