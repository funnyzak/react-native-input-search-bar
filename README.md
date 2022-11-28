# React-Native-Input-Search-Bar

A simple search bar component for React Native.

[![Build Status][build-status-image]][build-status]
[![license][license-image]][repository-url]
[![NPM version][npm-image]][npm-url]
[![Release Date][rle-image]][rle-url]
[![npm download][download-image]][download-url]

<!--[![GitHub repo size][repo-size-image]][repository-url]-->
<!-- [![Sourcegraph][sg-image]][sg-url] -->

[repo-size-image]: https://img.shields.io/github/repo-size/funnyzak/react-native-input-search-bar
[build-status-image]: https://github.com/funnyzak/react-native-input-search-bar/actions/workflows/ci.yml/badge.svg
[build-status]: https://github.com/funnyzak/react-native-input-search-bar/actions
[license-image]: https://img.shields.io/github/license/funnyzak/react-native-input-search-bar.svg?style=flat-square
[repository-url]: https://github.com/funnyzak/react-native-input-search-bar
[npm-image]: https://img.shields.io/npm/v/react-native-input-search-bar.svg?style=flat-square
[npm-url]: https://npmjs.org/package/react-native-input-search-bar
[download-image]: https://img.shields.io/npm/dm/react-native-input-search-bar.svg?style=flat-square
[download-url]: https://npmjs.org/package/react-native-input-search-bar
[sg-image]: https://img.shields.io/badge/view%20on-Sourcegraph-brightgreen.svg?style=flat-square
[sg-url]: https://sourcegraph.com/github.com/funnyzak/react-native-input-search-bar
[rle-image]: https://img.shields.io/github/release-date/funnyzak/react-native-input-search-bar.svg
[rle-url]: https://github.com/funnyzak/react-native-input-search-bar/releases/latest

## Installation

[![NPM](https://nodei.co/npm/react-native-input-search-bar.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-native-input-search-bar/)

- 1.Run `npm i react-native-svg react-native-input-search-bar --save`
  - or `yarn add react-native-svg react-native-input-search-bar`
- 2.`import ReactNativeInputSearchBar from 'react-native-input-search-bar'`
- 3. Run `npx pod-install` if you are using iOS, and `react-native link` if you are using Android. (this step is for `react-native-svg`)

**Notes:** You need to install `react-native-svg` first, because this component depends on it to render the search icon.

## Getting Started

Add `react-native-input-search-bar` to your js file.

`import ReactNativeInputSearchBar from 'react-native-input-search-bar'`

Inside your component's render method, use ReactNativeInputSearchBar:

```javascript
 render() {
     return (
         <View>
          <ReactNativeInputSearchBar
            onSubmitSearch={(_val) => {
              console.log(_val);
            }}
            ...
            buttonText="Search"
          />
         </View>
     );
 }
```

### Basic usage

```javascript
import ReactNativeInputSearchBar from 'react-native-input-search-bar'
import { useState } from 'react'

const SearchBar = () => {
  const [query, setQuery] = useState<string>('')
  const [activeSearch, setActiveSearch] = useState<boolean>(false)

  const onSubmitSearch = (val: string) => {
    setQuery(val)
  }

  return (
    <ReactNativeInputSearchBar
      onSubmitSearch={onSubmitSearch}
      onActiveSearch={setActiveSearch}
      inputTextStyle={{}}
      buttonStyle={{
        paddingHorizontal: 20
      }}
      buttonTextStyle={{}}
      searchToolContainerStyle={{ height: 40 }}
      inputContainerStyle={{
        backgroundColor: '#ffffff',
        borderWidth: 0.3,
        borderRadius: 20
      }}
      inputProps={{
        placeholder: 'Please enter your search query'
      }}
      buttonText="Search"
    />
  )
}

export default SearchBar
```

## Props

### Props for ReactNativeInputSearchBar

| Prop                     | Type     | Default | Description                                          |
| ------------------------ | -------- | ------- | ---------------------------------------------------- |
| onSubmitSearch           | function |         | Callback function when the search button is pressed. |
| onActiveSearch           | function |         | Callback function when the search bar is active.     |
| inputTextStyle           | object   |         | Style for the input text.                            |
| buttonStyle              | object   |         | Style for the search button.                         |
| buttonTextStyle          | object   |         | Style for the search button text.                    |
| searchToolContainerStyle | object   |         | Style for the search tool container.                 |
| inputContainerStyle      | object   |         | Style for the input container.                       |
| inputProps               | object   |         | Props for the input.                                 |
| buttonText               | string   |         | Text for the search button.                          |
| clearButton              | boolean  | true    | Whether to show the clear button.                    |
| inputActiveColor         | string   |         | Color for the input when active.                     |
| inputInactiveColor       | string   |         | Color for the input when inactive.                   |
| iconStyle                | object   |         | Style for the search icon.                           |
| customIcon               | element  |         | Custom icon for the search input icon.               |

### TypeDefine for ReactNativeInputSearchBar

```typescript
interface RNInputSearchBarProps {
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
```

## Reference

- [React Native](https://facebook.github.io/react-native/) is a JavaScript framework for writing real, natively rendering mobile applications for iOS and Android.

## Contribution

If you have any questions or suggestions, please feel free to open an issue or pull request.

<a href="https://github.com/funnyzak/react-native-input-search-bar/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=funnyzak/react-native-input-search-bar" />
</a>

## License

MIT License © 2022 [funnyzak](https://github.com/funnyzak)
