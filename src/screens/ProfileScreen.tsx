import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import BeltCard from '../components/BeltCard/BeltCard'
import { BeltEntry } from '../types/belt'

const mockData: BeltEntry[] = [
  { date: '2020.01.14', belt: 'white', level: 0 }, // 무그랄
  { date: '2020.06.01', belt: 'white', level: 1 },
  { date: '2020.11.20', belt: 'white', level: 2 },
  { date: '2021.03.21', belt: 'blue', level: 0 },
  { date: '2022.07.10', belt: 'purple', level: 3 },
  { date: '2023.12.01', belt: 'brown', level: 2 },
  { date: '2024.11.23', belt: 'black', level: 1 },
]

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView className="flex-1 bg-blue-50 px-4 pt-10">
        <Text className="text-lg font-bold text-gray-600 mb-4">🏠 HomeScreen</Text>
        {mockData.map((item, index) => (
          <BeltCard key={index} {...item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}
