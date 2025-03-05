export const typeDef = gql`
type Query {
    usr: User
}
  type User {
    id: Int
    name: String
  }
`;