import Setting from '@/pages/setting'
import Test from '@/pages/test'
import type { IRouteConfig } from '@/router/typing'

export type OtherStackParamList = {
  SETTING: undefined
  TEST: undefined
}

type OtherStackName = keyof OtherStackParamList

const routes: IRouteConfig<OtherStackName>[] = [
  {
    name: 'SETTING',
    component: Setting,
    options: {
      title: '设置',
    },
  },
  {
    name: 'TEST',
    component: Test,
    options: {
      title: '测试',
    },
  },
]

export default routes
