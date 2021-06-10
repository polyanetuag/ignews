import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Maria' },
    { id: 2, name: 'Tiago' },
    { id: 3, name: 'Lucy' },
  ]

  return response.json(users)
}