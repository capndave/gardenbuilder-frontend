import { graphql } from "msw"

export const handlers = [
  /*************************
      QUERY MOCKS
  ***************************/

  //Example query mock formatting, with data
  graphql.query("MOCK_QUERY", (req, res, ctx) => {
    return res(
      ctx.data({
        fake: {
          id: 'abc123'
        }
      })
    )
  }),

  // //Example query mock formatting, with error
  // graphql.query("EXAMPLE_USER_QUERY", (req, res, ctx) => {
  //   return res(
  //     ctx.errors([
  //       {
  //         status: 400,
  //         message: 'OOPS'
  //       }
  //     ]))
  // }),

  graphql.query("GET_USER_GARDENS", (req, res, ctx) => {
    return res(
      ctx.data({
        gardens: {
          gardens: [
            {
              id: "1",
              name: "Garden One",
              ownerId: 1,
              endedAt: "2021-02-13T18:58:58.125Z",
              isActive: false,
              ownerId: 1,
              createdAt: "2021-02-13T18:58:58.125Z",
              updatedAt: "2021-02-13T18:58:58.125Z"
            },
            {
              id: "2",
              name: "Garden Two",
              endedAt: "2021-02-13T18:58:58.125Z",
              ownerId: 1,
              isActive: true,
              createdAt: "2021-02-13T18:58:58.125Z",
              updatedAt: "2021-02-13T18:58:58.125Z"
            }
          ],
          errors: []
      }
      })
    )
  }),

  graphql.query("CURRENT_USER_QUERY", (req, res, ctx) => {
    return res(
      ctx.data({
        currentUser: {
          id: 'abc123',
          email: 'test@test.com',
        }
      })
    )
  }),

  /*************************
      MUTATION MOCKS
  ***************************/

  graphql.mutation("SIGNUP_MUTATION", (req, res, ctx) => {
    const { email, password } = req.variables;
    return res(
      ctx.data({
        createUser: {
          user: {
            id: '1',
            email,
            password,
          },
          token: 'sometoken123'
        }
      })
    )
  }),

  graphql.mutation("SIGNIN_MUTATION", (req, res, ctx) => {
    const { email, password } = req.variables;
    if (email === "test@test.com" && password === "testing!123") {
      return res(
        ctx.data({
          tokenAuth: {
            token: 'sometoken123'
          }
        })
      )
    } else {
      return res(
        ctx.errors([
          {
            status:400,
            message: 'whoops'
          }
        ])
      )
    }
  }),

  graphql.mutation("CREATE_GARDEN_MUTATION", (req, res, ctx) => {
    return res(
      ctx.data({
        createGarden: {
          id,
          name
        }
      })
    )
  }),

  graphql.mutation("MOCK_MUTATION", (req, res, ctx) => {
    const {id} = req.variables
    if (id === 'abc123') {
      return res(
        ctx.data({
          makeThing: {
            id: 'abc123'
          }
        })
      )
    } else {
      return res(
        ctx.errors([
          {
            status: 400,
            message: 'Not a valid id'
          }
        ])
      )
    }
  }),

//   //Example mutation mock formatting, with result
//   graphql.mutation("EXAMPLE_LOGIN_MUTATION", (req, res, ctx) => {
//     return res(
//       ctx.data({
//         login: {
//           username,
//         },
//       })
//     )
//   }),
]