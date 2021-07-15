import { AxiosResponse } from 'axios'
import { SpotifySearchMusicByNameFetchResponse } from './types'

export const greetingText = `Hello 👋
This is spotify search bot!
You can enter which song do you listen and bot will find this track on spotify.
After that it will give you a track\`s link.
Welcome.`

export const helpText = `This is spotify search bot!
You can enter which song do you listen and bot will find this track on spotify.
After that it will give you a track\`s link.`

export const answerText = (response: AxiosResponse<SpotifySearchMusicByNameFetchResponse>): string => {
  if (typeof response.data.Results === 'object') {
    const track = response.data.Results[0]
    
    const trackAnswer = `Исполнитель: <a href="https://open.spotify.com/artist/${track.artists[0].id}">${track.artists[0].name}</a>
Трек: <a href="https://open.spotify.com/track/${track.id}">${track.name}</a>`
    return trackAnswer
  } else {
    return 'Track not found('
  }
}
