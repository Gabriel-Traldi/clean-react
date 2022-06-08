import axios from 'axios'
import faker from '@faker-js/faker'

type HttpResponse = {
  data: object
  status: number
}

export const mockHttpResponse = (): HttpResponse => ({
  data: faker.helpers.objectValue({}),
  status: faker.datatype.number()
})

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.post.mockResolvedValue(mockHttpResponse())
  return mockedAxios
}
