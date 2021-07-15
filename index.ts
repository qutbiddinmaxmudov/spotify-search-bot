import { Telegraf } from 'telegraf'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import dotenv from 'dotenv'
import { SpotifySearchMusicByNameFetchResponse } from './types'
import { answerText } from './texts'

dotenv.config()
const BOT_TOKEN: string = process.env.BOT_TOKEN ?? ''
const bot = new Telegraf(BOT_TOKEN)

bot.start((ctx) => ctx.reply('Salom'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.on('message', (ctx) => {
  if (ctx.message) {
    const options: AxiosRequestConfig = {
      method: 'GET',
      url: 'https://unsa-unofficial-spotify-api.p.rapidapi.com/search',
      params: { query: ctx.message.text, count: '3', type: 'tracks' },
      headers: {
        'x-rapidapi-key': '45003564e1msh7d9cf50bf068e99p18184djsn26b64859fac9',
        'x-rapidapi-host': 'unsa-unofficial-spotify-api.p.rapidapi.com',
      },
    }

    axios
      .request(options)
      .then(function (response: AxiosResponse<SpotifySearchMusicByNameFetchResponse>) {
        ctx.replyWithHTML(answerText(response))
      })
      .catch(function (error) {
        console.error(error)
      })
  }
})

bot.launch()
