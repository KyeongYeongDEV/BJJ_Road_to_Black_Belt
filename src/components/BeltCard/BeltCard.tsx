import React from 'react'
import { View, Text, Image } from 'react-native'
import { BeltEntry } from '../../types/belt'
import { beltImageMap } from './beltImages'

export default function BeltCard({ date, belt, level }: BeltEntry) {
  const clampedLevel = Math.min(Math.max(level ?? 0, 0), 4)
  const imageKey = `${belt}_${clampedLevel}` as keyof typeof beltImageMap
  const imageSource = beltImageMap[imageKey]

  return (
    <View className="items-start my-1">
      <Text className="text-xs text-black mb-1">{date}</Text>
      {imageSource ? (
        <Image
          source={imageSource}
          className="w-full h-6"
          resizeMode="contain"
          style={{ minWidth: 60 }}
        />
      ) : (
        <Text className="text-red-500">이미지 없음</Text>
      )}
    </View>
  )
}
