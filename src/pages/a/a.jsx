import React from 'react'
import C from './c'
import classnames from 'classnames'
import styles from './a.less'
import {Home} from '../../axios/sever'
class A extends React.Component {
  componentWillMount () {
    Home().then((data) => {
      console.log(data, 111)
    })
  }
  render () {
    return <div className={styles.warp}>
      <C />
      <div className={classnames('iconfont', {
        'icon-add-account': false
      })}>aaa</div>
    </div>
  }
}
export default A
