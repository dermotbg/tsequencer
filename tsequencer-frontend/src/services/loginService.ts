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
  const response = await fetch(`${baseUrl}/validate-token`, {
    method: 'POST'
  })
  console.log(response)
 return response.status
} 