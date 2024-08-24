import {
  StackActions,
  type NavigationContainerRef,
} from '@react-navigation/native'
import * as React from 'react'

import type { RootStackParamList } from './typing'

// NavigationContainerRef上可以操作所有的Actions，包含CommonActions，StackActions,DrawerActions,TabActions
// 只是NavigationContainerRef直接挂载的是CommonActions，其他的要用dispacth相应的Action
export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>()

export function navigate<RouteName extends keyof RootStackParamList>(
  name: RouteName,
  params?: RootStackParamList[RouteName],
) {
  // TODO fix type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigationRef.current?.navigate(name as any, params)
}

export function push<RouteName extends keyof RootStackParamList>(
  name: RouteName,
  params?: RootStackParamList[RouteName],
) {
  navigationRef.current?.dispatch(StackActions.push(name, params))
}
