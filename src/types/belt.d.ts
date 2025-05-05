export type BeltColor = 'white' | 'blue' | 'purple' | 'brown' | 'black'
export type BeltLevel = 0 | 1 | 2 | 3 | 4 


export interface BeltEntry {
  date: string
  belt: BeltColor
  level : BeltLevel
  imageUrl?: string
}
