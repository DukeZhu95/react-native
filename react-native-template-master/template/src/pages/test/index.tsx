import { Text, Button } from 'react-native'

import { push } from '@/router/root-navigation'

const Test: React.FC = () => {
  return (
    <>
      <Text>Test</Text>
      <Button
        title="跳转首页"
        onPress={() => {
          push('HOME')
        }}
      />
    </>
  )
}

export default Test
