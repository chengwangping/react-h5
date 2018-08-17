import {asyncComponent} from './AsyncComponent'

export const a = asyncComponent(() => {
  return import(/* webpackChunkName: "a" */ '@/pages/a/a')
})
export const b = asyncComponent(() => {
  return import(/* webpackChunkName: "b" */ '@/pages/b/b')
})

export const routes = [
  {
    path: '/a',
    component: a,
    exact: true
  },
  {
    path: '/b',
    component: b,
    exact: true
  }
]
