import { v4 as uuidv4 } from 'uuid'
export const get_token = () => {
  return localStorage.getItem('USER_TOKEN')
}
export const set_token = (token) => {
  localStorage.setItem('USER_TOKEN', token)
}
export const remove_token = () => {
  localStorage.removeItem('USER_TOKEN')
}

export const uu_token = () => uuidv4()