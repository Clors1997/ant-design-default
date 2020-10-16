import request from '@/utils/request.js'
export function test() {
  return request({
    url: 'api/test',
    method: 'POST'
  })
}
