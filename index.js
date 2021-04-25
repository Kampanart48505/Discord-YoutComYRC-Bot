const Discord = require('discord.js')
const client = new Discord.Client();

const config  = require('./config.json')
const command = require('./command')

client.on('ready' , () =>{
    console.log("Ready to Run!")
    command(client, 'botinfo', message =>{
        message.channel.send('ยินดีต้อนรับเข้าสู่ YRC คอมพิ้ววว Bot ⚡ \n List bot in channel \n 1.บอทเปิดเพลง (Hydra) 🚀 \n .play ตามด้วยชื่อเพลง, Link from Youtube เพื่อเปิดเพลง  \n .skip เพื่อเลื่อนไปเพลงต่อไป \n .help ดู log บอท \n 2.บอทน้าค่อม 🚀 \n !nacom เรียกน้าค่อมเข้าช่องพูด (ด่า ไอ่สัส) \n 3.บอทลุงโทนี่ 🚀 \n !nahee เรียกลุงโทนี่เข้าช่องพูด(ด่า ไอ่หน้าหี)')
        
    });
    command(client, 'botdev', message =>{
        message.channel.send('Open source available on Github : https://github.com/Kampanart48505/Discord-YouthComYRC-Bot ')
        
    });
})

client.login(config.token)