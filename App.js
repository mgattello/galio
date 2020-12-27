import React from 'react'
import { ScrollView } from 'react-native'

import Introduction from './Introduction'

export default function App () {
  return (
    <ScrollView
      style={{ marginTop: 100 }}
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Introduction />
    </ScrollView>
  )
}
