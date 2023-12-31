import { Database } from './database.js'
import { randomUUID } from 'node:crypto'
import { buildRoutePath } from './utils/build-route-paths.js'

const database = new Database()
export const routes = [
  {
    method: 'GET',
    path: buildRoutePath('/users'),
    handler: (req, res) => {
      console.log('req', req.query)
      const search = req.query.search

      const searchParams = search ? { name: search, email: search } : undefined
      const users = database.select('users', searchParams)
      return res.end(JSON.stringify(users))
    },
  },
  {
    method: 'POST',
    path: buildRoutePath('/users'),
    handler: (req, res) => {
      const { name, email } = req.body

      const user = { id: randomUUID(), name, email }

      database.insert('users', user)

      return res.writeHead(200).end()
    },
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/users/:id'),
    handler: (req, res) => {
      console.log('ddd', req.params)
      const id = req.params?.id

      if (!id) {
        return res.writeHead(400).end('UserId is required.')
      }

      database.delete('users', id)
      return res.writeHead(204).end()
    },
  },
  {
    method: 'PUT',
    path: buildRoutePath('/users/:id'),
    handler: (req, res) => {
      console.log('ddd', req.params)
      const id = req.params?.id

      if (!id) {
        return res.writeHead(400).end('UserId is required.')
      }

      const { name, email } = req.body

      database.update('users', id, { name, email })
      return res.writeHead(204).end()
    },
  },
]
