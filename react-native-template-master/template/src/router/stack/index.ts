import type { IRouteConfig } from '@/router/typing'

import type { LoginStackParamList } from './login'
import Login from './login'
import type { OtherStackParamList } from './other'
import Other from './other'

export type StackParamList = LoginStackParamList & OtherStackParamList

export type StackName = keyof StackParamList

const stackRoutes: IRouteConfig<StackName>[] = [...Login, ...Other]

export default stackRoutes
