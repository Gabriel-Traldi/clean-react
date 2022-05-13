import { RemoteAuthentication } from './remote-authentication'
import { HttpPostClient } from '../../protocols/http/http-post-client'

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string

      async post(url: string): Promise<void> {
        this.url = url
        return await Promise.resolve()
      }
    }

    const url = 'any_url'
    const httpPostClient = new HttpPostClientSpy()

    const sut = new RemoteAuthentication(url, httpPostClient)
    sut.auth()
    expect(httpPostClient.url).toBe(url)
  })
})
