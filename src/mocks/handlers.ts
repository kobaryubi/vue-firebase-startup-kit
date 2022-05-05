import { rest } from 'msw'

export const handlers = [
  rest.get('/api/posts', (req, res, ctx) => {
    return res(
      ctx.delay(3000),
      ctx.status(202, 'Mocked status'),
      ctx.json([
        {
          'userId': 1,
          'id': 1,
          'title': 'mock response',
          'completed': false
        },
        {
          'userId': 2,
          'id': 2,
          'title': 'mock response 2',
          'completed': true
        },
        {
          'userId': 3,
          'id': 3,
          'title': 'mock response 3',
          'completed': false
        },
      ]),
    )
  }),
]
