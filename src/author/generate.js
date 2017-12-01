import faker from 'faker'

faker.seed(12345)

export const newAuthorId = () => {
  return faker.random.alphaNumeric(4)
}

export const newBookId = () => {
  return faker.random.alphaNumeric(10)
}

const generate = {
  author: newAuthorId,
  book: newBookId
}

export default generate