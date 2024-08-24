import { Text, Button } from 'react-native'

import { navigate } from '@/router/root-navigation'

const Setting: React.FC = () => {
  return (
    <>
      <Text>Setting</Text>
      <Button
        title="跳转测试页面"
        onPress={() => {
          navigate('TEST')
        }}
      />
    </>
  )
}

export default Setting
