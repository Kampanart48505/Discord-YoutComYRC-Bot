const Discord = require('discord.js')
const client = new Discord.Client();

const config  = require('./config.json')
const command = require('./command')

client.on('ready' , () =>{
    console.log("Ready to Run!")
    command(client, 'youthcomdetail', message =>{
        message.channel.send('ยินดีต้อนรับเข้าสู่ YRC คอมพิ้ววว Bot 🎉🎉 \n List bot in channel \n 1.บอทเปิดเพลง \n -P ตามด้วยชื่อเพลง, Link From Youtube เพื่อเปิดเพลง \n -skip เพื่อเลื่อนไปเพลงต่อไป \n 2.บอทน้าค่อม \n !nacom เรียกน้าค่อมเข้าช่องพูด(ด่า ไอ่สัส) \n 3.บอทลุงโทนี่ \n !nahee เรียกลุงโทนี่เข้าช่องพูด(ด่า ไอ่หน้าหี)')
        
    })
})

client.login(config.token)