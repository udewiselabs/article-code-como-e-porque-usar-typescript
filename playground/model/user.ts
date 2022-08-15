interface User {
  id: string,
  name: string,
  email: string,
  password: string,
  admin: boolean
}

export const user: User = {
  id: 'a1',
  name: 'User Test',
  email: 'usertest@test.com',
  password: '$123@123',
  admin: false
}