import { StyleProp, ViewStyle } from 'react-native'
import { BeltColor } from '../types/belt'

export const getBeltColorStyle = (belt: BeltColor): StyleProp<ViewStyle> => {
  const colorMap: Record<BeltColor, string> = {
    white: '#FAF9F6#FAF9F6',
    blue: '#73B5F2',
    purple: '#D582F1',
    brown: '#CC8659',
    black: '#000000',
  }

  return { backgroundColor: colorMap[belt] }
}
