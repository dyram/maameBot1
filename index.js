const Discord = require('discord.js')
const bot = new Discord.Client()

const cheerio = require("cheerio")
const request = require("request")
const dotenv = require('dotenv').config()

const token = process.env.TOKEN


bot.on('ready', () => {
    console.log("Maame Bot is Online Mofos...")
})

bot.on('message', (msg) => {
    if (msg.content === ";help") {
        msg.reply("\n\nI am your sex slave for the following commands,\n\n1. ;santhosh\n2. ;zehran\n3. ;azeem\n4. ;idris\n5. ;gokul\n6. ;israel\n7. ;cursed\n8. ;ramislam")
    }
    if (msg.content === ";santhosh") {
        msg.reply("Poda thayoli kotta")
    }
    if (msg.content === ";zehran") {
        msg.reply(",zehran wants you to cum on his face", { files: ["./images/zehran.jpg"] })
    }
    if (msg.content === ";azeem") {
        msg.channel.send("MOO MOO Azeem", { files: ["./images/cow.jpg"] })
    }
    if (msg.content === ";idris") {
        msg.channel.send("I am gay with idris sheriff", { files: ["./images/idris.gif"] })
    }
    if (msg.content === ";gokul") {
        msg.channel.send("I am gokul, a fat bastard", { files: ["./images/gokul.gif"] })
    }
    if (msg.content === ";israel") {
        msg.channel.send("I am Israel, simp and bosedk bastard", { files: ["./images/israel.jpeg"] })
    }
    if (msg.content === ";cursed") {
        image(msg)
    }
    if (msg.content === ";ramislam") {
        ram(msg)
    }
})

function image(message) {
    let options = {
        url: "http://results.dogpile.com/serp?qc=image&q=" + "cursed image" + "&sc=j2dSJARimc1O20",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    }

    request(options, function (error, response, responseBody) {
        if (error)
            return
        $ = cheerio.load(responseBody)

        let links = $(".image a.link");

        let urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"))
        console.log(urls)

        if (!urls.length)
            return

        message.channel.send(urls[Math.floor(Math.random() * urls.length)] + " \ntake a cursed image yo..")
    })
}

function ram(message) {
    let options = {
        url: "https://results.dogpile.com/serp?q=gay+kiss&sc=bmMetBnu1XMz20",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    }

    request(options, function (error, response, responseBody) {
        if (error)
            return
        $ = cheerio.load(responseBody)

        let links = $(".image a.link");

        let urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"))
        console.log(urls)

        if (!urls.length)
            return

        message.channel.send(urls[Math.floor(Math.random() * urls.length)] + " \nI am Ram Islam 21st century gay..")
    })
}

bot.login(token)