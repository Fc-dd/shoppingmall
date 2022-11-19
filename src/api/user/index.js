import request from '@/uitls/request'

export const fruitsList = () => request('/fruits')

// 用户登录接口
export const login = () => request('/users')

// 获取用户信息
export const userInfo = (token) => {
  return request(`/users?token=${ token }`)
}