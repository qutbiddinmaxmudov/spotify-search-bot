export interface SpotifySearchMusicByNameFetchResponse {
  AMsg: string
  Query: string
  Results: Track[]
}

export interface Track {
  artists: Artist[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  href: string
  id: string
  is_local: boolean
  name: string
  popularity: number
  preview_url: string
  track_number: number
  type: string
  uri: string
}

export interface Artist {
  href: string
  id: string
  name: string
  type: string
  uri: string
}
