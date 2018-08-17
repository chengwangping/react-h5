import React from 'react'
import { Button, Icon } from 'antd-mobile'
import styles from './c.less'
import(/* webpackChunkName: "city" */ './city.json').then((data) => {
  console.log(data)
})

const C = () => <div className={styles.warp}>
  <Button type="primary">primary</Button>
  <Icon type="search" size={'md'} />
</div>
export default C
