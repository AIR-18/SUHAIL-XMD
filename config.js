const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_52_12_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDMyLFxuICAgICAgICAyNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg1LFxuICAgICAgICAxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDk3LFxuICAgICAgICAxNixcbiAgICAgICAgMTgzLFxuICAgICAgICA3MixcbiAgICAgICAgNjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxODUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDkxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDgsXG4gICAgICAgIDY5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDk0LFxuICAgICAgICA1MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDAsXG4gICAgICAgIDYyLFxuICAgICAgICAzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDczLFxuICAgICAgICA3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDcxLFxuICAgICAgICA5OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTkyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDkxLFxuICAgICAgICA4NixcbiAgICAgICAgMTQxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTgzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMixcbiAgICAgICAgNjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQwLFxuICAgICAgICA5NixcbiAgICAgICAgNzksXG4gICAgICAgIDc4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjMyLFxuICAgICAgICA1MixcbiAgICAgICAgMjgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDMyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDg5LFxuICAgICAgICA4NixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTYwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTU3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTksXG4gICAgICAgIDg1LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDY5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAzMyxcbiAgICAgICAgODYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDgzLFxuICAgICAgICAyNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwid1R2bmY3SEgyc2FtNmtIRnVDRzBIa3dKVWhnQXdSeTkyems5V0FWQnExbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQWExMHQyQkRTZU9mSzdzbVY2dFhaUVwiLFxuICBcInBob25lSWRcIjogXCI5MTk1Y2RjZC1jYjIzLTRhOTYtOGZjYS0xY2JmMGJjNzVlOTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA4LFxuICAgICAgNDYsXG4gICAgICAxNCxcbiAgICAgIDU5LFxuICAgICAgOTQsXG4gICAgICA4NyxcbiAgICAgIDE4MSxcbiAgICAgIDM5LFxuICAgICAgMTU1LFxuICAgICAgMTY3LFxuICAgICAgMTcyLFxuICAgICAgODMsXG4gICAgICAxMTYsXG4gICAgICAxOTksXG4gICAgICA1NSxcbiAgICAgIDExNCxcbiAgICAgIDE1MCxcbiAgICAgIDIwNixcbiAgICAgIDEyMixcbiAgICAgIDEyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOCxcbiAgICAgIDI0NyxcbiAgICAgIDcsXG4gICAgICAzMSxcbiAgICAgIDIyMixcbiAgICAgIDE2NCxcbiAgICAgIDc5LFxuICAgICAgMTExLFxuICAgICAgMjE3LFxuICAgICAgNjksXG4gICAgICAxNzIsXG4gICAgICA0NixcbiAgICAgIDE2OCxcbiAgICAgIDIyOSxcbiAgICAgIDI1MyxcbiAgICAgIDE0NCxcbiAgICAgIDIxOSxcbiAgICAgIDE3OSxcbiAgICAgIDIxLFxuICAgICAgMTgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5CRDg4VzJXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxODQ5NDQwOTE5NToyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTg4ODMwNDg4ODY0MTE6MjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXl4MEpnSEVNdlgvYm9HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDRGhWSEtZR3B4NGYydndSb0lnOURzSnVUU1FwekQ4a01KNkZ0RHJDTkFJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImpyMmpSQUFPN2ZRN20vZjBGTGVBVzZMcjVXRDZkS3pJaUNCV1pTUmhJanZ2L2N0M0pRNFN2NFdHMG94VVM2KzN5RWIxUldldURIcjVhZk5CQ0FGQkJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImdzakIvK2dBT0xnQ0s5RnRrSTU2SmRZd1NQYUJkSlAxaklyaFY1V0xCWjdRSG15bnFJLy9kYWdHTmlOYlZxeE5ZN0k1TGZUMGZjSXBWR1J3RlVoL2p3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjE4NDk0NDA5MTk1OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQzMDY3NjcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGRTlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZFOS5qc29uIjogIntcImtleURhdGFcIjpcIlU5RkZSZ1JRVFVOYitvTkw1c0xmRGVHZnM0aU9tNEFhZEFETjVhQzFBRTQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkzMDY5NjkwOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM0MzA1OTQ0MTc5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
