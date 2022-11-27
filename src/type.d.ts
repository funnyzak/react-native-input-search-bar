import { StyleProp, ViewStyle, TextStyle, TextInputProps, ColorValue } from 'react-native'
import { ReactNode } from 'react'

export declare interface SearchBarProps {
  searchToolContainerStyle?: StyleProp<ViewStyle>
  clearButton?: boolean
  onActiveSearch: (val: boolean) => void
  onSubmitSearch: (val: string) => void
  inputActiveColor?: ColorValue
  inputInactiveColor?: ColorValue
  inputContainerStyle?: StyleProp<ViewStyle>
  inputTextStyle?: StyleProp<TextStyle>
  inputProps?: TextInputProps
  customIcon?: ReactNode
  iconStyle?: StyleProp<ViewStyle>
  buttonStyle?: StyleProp<ViewStyle>
  buttonText?: string
  buttonTextStyle?: StyleProp<TextStyle>
}
