const express = require('express')
var router = express.Router();
const { getBuffer } = require('../lib/function')
const axios = require('axios')
const fetch = require('node-fetch')
const textto = require('soundoftext-js')
const fs = require('fs')
const moment = require('moment-timezone')
const atime = moment.tz('Asia/Jakarta').format('YYYY-MM-DD')
__path = process.cwd()

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function apivisit() {
const birthday = new Date();
const date1 = birthday.getDate();
const date2 = birthday.getMonth();
const date3 = birthday.getFullYear(); axios.get(`https://api.countapi.xyz/hit/hint.api.akuari.my.id${date1}${date2}${date3}`);
axios.get(`https://api.countapi.xyz/hit/hint.api.akuari.my.id/94530655-f4fe-42c0-b4aa-665aa0e01467`);}

router.get('/texttosound_id', async(req, res) => {
  var query = req.query.query
	if (!query) return res.json({ message: 'Masukan parameter query?=hai akuari'})
	var waif = textto.sounds.create({ text: query, voice: `id-ID` }).then(soundUrl => {
		  
	res.json({
    creator: `akuari.my.id`,
		result: soundUrl
	})
})
.catch(e => {
	res.json(loghandler.error)
	
})
  await  apivisit()
})
router.get('/texttosound_english', async(req, res) => {
  var query = req.query.query
	if (!query) return res.json({ message: 'Masukan parameter query?=hai akuari'})
	var waif = textto.sounds.create({ text: query, voice: `en-US` }).then(soundUrl => {
		  
	res.json({
    creator: `akuari.my.id`,
		result: soundUrl
	})
})
.catch(e => {
	res.json(loghandler.error)
	
})
  await  apivisit()
})

router.get('/texttosound_japan', async(req, res) => {
  var query = req.query.query
	if (!query) return res.json({ message: 'Masukan parameter query?=hai akuari'})
var waif = textto.sounds.create({ text: query, voice: `ja-JP` }).then(soundUrl => {
		  
	res.json({
    creator: `akuari.my.id`,
		result: soundUrl
	})
})
.catch(e => {
	res.json(loghandler.error)
	
})
  await  apivisit()
})

router.get('/texttosound', async(req, res) => {
  var query = req.query.query
	if (!query) return res.json({ message: 'Masukan parameter query?=hai akuari'})
  var lang = req.query.lang
	if (!lang) return res.json({ message: 'Masukan parameter &lang=', lang: `untuk kode lang silahkan cari di website berikut: https://soundoftext.com/docs#voices`})
	var waif = textto.sounds.create({ text: query, voice: lang })

try {
		res.json({
      creator: `akuari.my.id`,
      respon: waif.soundUrl,
      lang: `untuk kode lang silahkan cari di website berikut: https://soundoftext.com/docs#voices`
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await  apivisit()
})







module.exports = router