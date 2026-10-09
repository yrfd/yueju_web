export interface TimelineItem {
  year: string
  event: string
}

export interface LineageRelation {
  name: string
  relation: string
}

export interface Master {
  id: string
  name: string
  role: string
  birthYear: number
  deathYear: number | null
  photoUrl?: string
  troupe: string
  signaturePlays: string[]
  description: string
  timeline: TimelineItem[]
  lineage: LineageRelation[]
}

export interface LyricLine {
  text: string
  note?: string
}

export interface Play {
  id: string
  title: string
  playwright: string
  premiereYear: string
  photoUrl?: string
  mainRoles: string[]
  synopsis: string
  lyrics: LyricLine[]
}

export type Difficulty = '入门' | '进阶'

export interface GuideLyric {
  text: string
  jyutping: string
  mandarin: string
}

export interface GuideClip {
  id: string
  playTitle: string
  ariaTitle: string
  performer: string
  duration: string
  difficulty: Difficulty
  videoUrl?: string
  lyrics: GuideLyric[]
  notes: string
  background: string
}

export interface HistoryNode {
  id: string
  era: string
  year: string
  title: string
  description: string
}

export interface GlossaryTerm {
  term: string
  category: string
  definition: string
}

export interface WatchItem {
  title: string
  tier: string
  note: string
}

export interface ReadingItem {
  title: string
  author?: string
  note: string
}

export interface Inheritor {
  name: string
  years?: string
  note: string
}

export interface HeritageItem {
  title: string
  note: string
}

export interface Mask {
  name: string
  color: string
  meaning: string
  example: string
}

export interface Costume {
  name: string
  category: string
  description: string
}
