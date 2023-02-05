import request from '@/uitls/request'

// 获取所有商品
export const goodsListAll = () => request('/goods')
export const goodsList = (page, limit) => request(`/goods?_page=${page}&_limit=${limit}`)

// 获取home主页精选列表
export const choicenessList = () => request('/choicenessList')

// 热门商品
export const hotGoods = () => request('/hotgoods')