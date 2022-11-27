import React, { memo, useCallback, useRef, useState } from 'react'
import {
  Keyboard,
  LayoutChangeEvent,
  NativeSyntheticEvent,
  Pressable,
  Text,
  TextInput,
  TextInputChangeEventData,
  TextStyle,
  View,
  ViewStyle
} from 'react-native'
import { ClearIcon, SearchIcon } from './icons'
import { SearchBarProps } from './types'
import { logInfo } from './utils/logger'

const THEME_SETTING = {
  colors: {
    brand: '#007AFF',
    grey: '#999999',
    darkGrey: '#666666'
  },
  spacing: {
    tiny: 4
  }
}

const SearchBarComponent = ({
  searchToolContainerStyle,
  onActiveSearch,
  onSubmitSearch,
  clearButton = true,
  customIcon,
  iconStyle,
  inputProps,
  inputTextStyle,
  buttonStyle,
  buttonText = 'Search',
  buttonTextStyle,
  inputContainerStyle,
  inputActiveColor,
  inputInactiveColor
}: SearchBarProps) => {
  const [inputTextActive, setInputTextActive] = useState(false)
  const [inputValue, setInputValue] = useState('')
  let textInputRef = useRef<TextInput>()
  let shouldClearButtonShow = useRef(false)

  const onSubmit = () => {
    logInfo('onSubmit')
    shouldClearButtonShow.current = false

    onSubmitSearch(inputValue)
    // dissmiss keyboard
    Keyboard.dismiss()
    textInputRef.current?.blur()
  }
  const onChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    logInfo('onChange')
    setInputValue(e.nativeEvent.text)
  }
  const onLayout = (e: LayoutChangeEvent) => {
    logInfo('onLayout', e)
  }
  const onFocus = useCallback(() => {
    shouldClearButtonShow.current = true
    setInputTextActive(true)
    onActiveSearch(true)
  }, [])
  const onBlur = useCallback(() => {
    shouldClearButtonShow.current = false
    setInputTextActive(false)
    onActiveSearch(false)
  }, [])
  return (
    <View style={[styles.searchToolContainer(), searchToolContainerStyle]}>
      <View
        style={[
          styles.inputContainerStyle(),
          {
            borderColor: inputTextActive
              ? inputActiveColor ?? THEME_SETTING.colors.brand
              : inputInactiveColor ?? THEME_SETTING.colors.grey
          },
          inputContainerStyle
        ]}>
        {customIcon ? (
          customIcon
        ) : (
          <SearchIcon
            width={20}
            height={20}
            stroke={THEME_SETTING.colors.grey}
            strokeWidth={1.8}
            style={[styles.iconStyle(), iconStyle]}
          />
        )}
        <TextInput
          style={[
            styles.searchBarInput(),
            inputTextStyle,
            {
              // marginRight: layout && activeSearchBar ? layout.width + 10 : 0
            }
          ]}
          value={inputValue}
          onSubmitEditing={onSubmit}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder="Please enter your search"
          placeholderTextColor={THEME_SETTING.colors.grey}
          ref={(ref: any) => (textInputRef = ref)}
          {...inputProps}
        />
        {clearButton && shouldClearButtonShow.current && (
          <Pressable onPress={() => setInputValue('')}>
            <ClearIcon
              style={{
                marginHorizontal: 5
              }}
              width={15}
              height={15}
              stroke={THEME_SETTING.colors.grey}
              strokeWidth={1.8}
            />
          </Pressable>
        )}
      </View>
      <Pressable onLayout={onLayout} onPress={onSubmit} style={[styles.searchButton(), buttonStyle]}>
        <Text style={[styles.searchButtonText(), buttonTextStyle]}>{buttonText}</Text>
      </Pressable>
    </View>
  )
}

const SearchBar = memo(SearchBarComponent)

const styles = {
  searchToolContainer: (): ViewStyle => ({
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 30
  }),
  inputContainerStyle: (): ViewStyle => ({
    height: '100%',
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }),
  searchBarInput: (): TextStyle => ({
    fontSize: 16,
    height: '100%',
    lineHeight: 22,
    fontWeight: 'normal',
    color: THEME_SETTING.colors.darkGrey,
    padding: THEME_SETTING.spacing.tiny,
    flex: 1
  }),
  searchButton: (): ViewStyle => ({
    borderRadius: 5,
    marginLeft: THEME_SETTING.spacing.tiny,
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: THEME_SETTING.colors.brand
  }),
  searchButtonText: (): TextStyle => ({
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
    color: '#f5f3ff'
  }),
  iconStyle: (): ViewStyle => ({
    marginRight: 10,
    marginLeft: 5
  })
}

export default SearchBar
