import * as pro from './type'

// 选择商品
export const togSelectPro = index => {
  return {type: pro.TOGGLESELECT, index}
}

// 编辑商品
export const editPro = (index, selectNum) => {
  return {type: pro.EDITPRODUCTION, index, selectNum}
}

// 清空选择
export const clearSelected = () => {
  return {type: pro.CLEARSELECTED}
}
