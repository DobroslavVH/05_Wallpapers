import { TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { colors } from '../constants/layout'

const ActionButton = ({
  iconName,
  onPress
}: any) => {

  const [isPressed, setIsPressed] = useState(false)

  const handleOnPress = () => {
    setIsPressed(!isPressed)
    onPress()
    setTimeout(() => {
      setIsPressed(false)
    }, 500)
  }

  return (
    <TouchableOpacity
      onPress={handleOnPress}
    >
      <Icon
        name={iconName}
        color={isPressed ? colors.orange : colors.lightgray}
        size={isPressed ? 24 : 22} />
    </TouchableOpacity >
  )
}

export default ActionButton