const cheerio = require('cheerio')
const axios = require('axios')

const lirikLagu = async (query) => {
const res = await axios.get(`https://www.musixmatch.com/search/${query}`)
const sup = cheerio.load(res.data)
const hasil = []
const b = sup('#site').find('div > div > div > div > ul > li:nth-child(1) > div > div > div')
let link = `https://www.musixmatch.com` + sup(b).find('h2 > a').attr('href')

const des = await axios.get(link)

const soup = cheerio.load(des.data)

const result = soup('#site').find('.mxm-lyrics__content > .lyrics__content__ok').text()
const artis = soup('#site').find('.mxm-track-title__artist mxm-track-title__artist-link').text()
const lirik = soup('#site').find('.mxm-lyrics__content ').text()
const judul = soup('#site').find('.mxm-track-title__track').text()



hasil.push({ judul, lirik, artis})
return hasil
}

module.exports = { lirikLagu }