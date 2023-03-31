/** Simple comp */
import React, { useState } from 'react'
import { View, Text } from 'react-native'

const index = () => {
  const [mystate, setmyState] = useState()
  return (
    <View>
      <Text>index</Text>
    </View>
  )
}

export default index
