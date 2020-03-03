const Discord = require('discord.js')
const client = new Discord.Client()
var imaServer = null;
const http = require('http');



http.createServer((req, res) => {
res.writeHead(200, {
    'Content-type': 'text/plain'
});
    res.write('Hey');
    res.end();
}).listen(4000);



client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)

    //set bot status
    //client.user.setActivity("You", { type: "WATCHING" })

    /* get channels ID */
    //   client.guilds.forEach((guild) => {
    //       console.log(guild.name)
    //     guild.channels.forEach((channel) => {
    //       console.log(`-${channel.name}${channel.type}${channel.id}`)
    //   })  
    //     })

    let redsChannel = client.channels.get("672436408857919498")
    let announcementsChannel = client.channels.get("682167825640587264")
    let generalChannel = client.channels.get("672417849561841688")
    let askmeanythingChannel = client.channels.get("682558095565651979")

    //redsChannel.send("Be patient.")

    imaServer = client.guilds.get('672417849561841684')

    //Guild ID IMA Studio: 672417849561841684
    //Guild ID JT'S TEST Server: 682850823465992213
})


client.on("guildMemberAdd", member => {
    member.send("Welcome to the IMA Virtual Studio. I am the IMAbot. To help you get started, please tell me whether you are a student, a faculty member, a staff member or an alumnus.")
        .catch(console.error);
});




client.on('message', message => {

    //ignore other bots
    if (message.author.bot) return;

    //read messages: case insensitive
    var msg = message.content.toLowerCase();


    // kick start role assigner
    if (message => channel => guild_id === NULL) {
       console.log(message.channel.lastMessage.content)
        var messagerID = String(message.author.id);
        var thisMember = imaServer.members.get(messagerID)
        var studentRole = imaServer.roles.find(role => role.name === "Student")
        var alumniRole = imaServer.roles.find(role => role.name === "Alumni")
        var facultyRole = imaServer.roles.find(role => role.name === "Faculty")

        if (thisMember.roles.find(r => r.name === "Student") || thisMember.roles.find(r => r.name === "Faculty") || thisMember.roles.find(r => r.name === "Alumni") || thisMember.roles.find(r => r.name === "Fellows")) {
            //  message.reply("Seems your role has already been assigned by someone. Have fun in the Virtual Studio.")
        }
        else {
            if (msg.includes("student")) {
                thisMember.addRole(studentRole);
                message.reply("Your role has been successfully assigned as Student.")
            }

            if (msg.includes("alum")) {
                thisMember.addRole(alumniRole);
                message.reply("Your role has been successfully assigned as Alumni.")
            }

            if (msg.includes("faculty") || msg.includes("professor") || msg.includes("instructor") || msg.includes("staff")) {
                //thisMember.addRole(facultyRole);
                message.reply("Glad to have you here! The role Faculty/Staff can only be granted by fellows or another faculty member. Please find them in the Virtual Studio.")
            }
        }
    }



    /* SECTION 1. main message repliers */

    /* reply on all */
    if (msg.includes("hi imabot")) {
        message.reply("I'm here. How can I help?")
    }




    /* reply on mention, or when called by name, or in dm */
    if (message.isMentioned(client.user) || msg.includes("imabot") || (message => channel => guild_id === NULL)) {
        if (msg.includes("who's the best fellow") || msg.includes("who's the best ima fellow") || msg.includes("who is the best fellow") || msg.includes("who is the best ima fellow")) {
            message.reply("It's the IMAbot.")
        }

        if ((msg.includes("weather") || msg.includes("temperature")) && !msg.includes("sensor")) {
            message.reply("I'm not your Siri.")
        }

        if (msg.includes("thank")) {
            var npMessage = ["You are welcome.", "No problem.", "np", "Np", "np!", "Np.", ":)", "Keep up the good work!", "I'm always here in the Virual Studio."];
            var chosen = Math.floor(Math.random() * npMessage.length);
            message.reply(npMessage[chosen])
        }

        if (msg.includes("help") || msg.includes("doesn't work") || msg.includes("what should i do") || msg.includes("do you know how")) {
            message.reply("Maybe you are looking for a human fellow. Is there one in the 826 Studio?")
        }

        if (msg.includes("who are you") || msg.includes("what are you")) {
            message.reply("I am the IMAbot, the omniscient and the omnipotent.")
        }


        // provide reference
        if ((msg.includes("arc") || msg.includes("curve")) && msg.includes("how") && msg.includes("processing")) {
            message.reply("Have a look at: https://processing.org/reference/arc_.html")
        }
    }

    /* SECTION 2. need-to-update message repliers */
    /* these message repliers might need to be updated once in a while */

    if (msg.includes("fellow") && msg.includes("office hour") || msg.includes("fellow") && msg.includes("studio hour") || msg.includes("fellow schedule") || msg.includes("fellows schedule") || msg.includes("fellows' schedule")) {
        const fellowSchedule = new Discord.Attachment("https://gunn.pausd.org/sites/default/files/19-20_bell_schedule_-_color_0.jpg")
        message.reply("Are you looking for:" + fellowSchedule)
    }

    if (msg.includes("ixlab") && msg.includes("office hour") || msg.includes("interaction lab") && msg.includes("office hour") || msg.includes("ixlab schedule") || msg.includes("interaction lab schedule")) {
        const ixlabSchedule = new Discord.Attachment("ixlab_office_hour_sp2020.png")
        message.reply(ixlabSchedule)
    }




    /* SECTION 3. temporary message repliers */
    /* below are temporary message repliers (for event announcements etc.) that should be cleaned once a month */


    //------START-----delete April 1, 2020
    if (message.isMentioned(client.user) || msg.includes("imabot") || (message => channel => guild_id === NULL)) {
        if (msg.includes("when will") && msg.includes("open") && (msg.includes("campus") || msg.includes("school") || msg.includes("nyush") || msg.includes("nyu sh") || msg.includes("ab"))) {
            message.reply("People are talking about Mid March. I hope so as well.")
        }
    }


    //------END-----delete April 1, 2020


    //------START-----delete March 1, 2020

    if (msg.includes("where is the discord party")) {
        message.reply("Right here in the Virtual Studio!")
    }
    if (msg.includes("when is the discord party")) {
        var d = new Date();
        var currentHour = d.getHours();
        var currentMinute = d.getMinutes();
        var targetHour = 21;
        var targetMinute = 30;

        var leftHour = targetHour - currentHour;
        var leftMinute = targetMinute - currentMinute;
        if (leftMinute < 0) {
            leftMinute = leftMinute + 60;
            leftHour = leftHour - 1;
        }
        console.log(leftHour);
        console.log(leftMinute);
        console.log("It's in " + leftHour + " hours " + leftMinute + " minutes.");

        var hourUnit;
        var minuteUnit;

        if (leftHour < 2) {
            hourUnit = " hour ";
        } else {
            hourUnit = " hours ";

        }

        if (leftMinute < 2) {
            minuteUnit = " minute";
        } else {
            minuteUnit = " minutes";

        }
        message.reply("It's in " + leftHour + hourUnit + leftMinute + minuteUnit + ".")
    }

    if (msg.includes("what is the discord party")) {
        let announcementsChannel = client.channels.get("682167825640587264")
        message.reply("You don't know the Discord Party? Check out " + announcementsChannel)
    }

    //------END-----delete March 1, 2020




    /* template message functions */

    /* 1. event countdown */

    // if (msg.includes("when is the discord party")) {
    //     var d = new Date();
    //     var currentHour = d.getHours();
    //     var currentMinute = d.getMinutes();
    //     var targetHour = PUTINTARGETHOURHERE;
    //     var targetMinute = PUTINTARGETMINUTEHERE;

    //     var leftHour = targetHour - currentHour;
    //     var leftMinute = targetMinute - currentMinute;
    //     if (leftMinute < 0) {
    //         leftMinute = leftMinute + 60;
    //         leftHour = leftHour - 1;
    //     }

    //     var hourUnit;
    //     var minuteUnit;
    //     if (leftHour < 2) {
    //         hourUnit = " hour ";
    //     } else {
    //         hourUnit = " hours ";
    //     }

    //     if (leftMinute < 2) {
    //         minuteUnit = " minute";
    //     } else {
    //         minuteUnit = " minutes";
    //     }
    //     message.reply("It's in " + leftHour + hourUnit + leftMinute + minuteUnit + ".")
    // }

})

client.login('NjgyODQ4ODc0OTkzNjgwNDA3.XljAog.Ahg5w5qGhwyjdci2RBbtpTNPHrk')




/*IMA Virtual Studio channel ID list, last updated on Feb 28, 2020*/

// IMA Virtual Studio
// -secrettext679273155214442515
// -welcometext674951431706509312
// -Bathroomvoice673861770108076046
// -helpful-resourcestext674581242557104148
// -faculty-fellows-stafftext677534776990892062
// -Cardboard Room (for recycling)voice672426929260855340
// -memestext674953570503884831
// -generaltext672417849561841688
// -JUST FOR FUNcategory679908901164023852
// -interaction-labtext678110508770918400
// -motivationtext676273621546827797
// -post-and-roasttext679317320086192148
// -Application Lab Tablevoice678788140810633256
// -CLASS CHANNELScategory679908663116562432
// -Elevator (for pitches & awkward exchanges)voice679946857358819330
// -FamilyMartvoice679950970146258946
// -announcementstext682167825640587264
// -IMA Lounge (for coffee and napping)voice672427372410306580
// -Comm Lab Table 🤖voice676336063215566858
// -reds-message-boardtext672436408857919498
// -introductiontext682559142355140609
// -chattext674999632107143189
// -community-guidelinestext674961991978319873
// -musictext673864418869772290
// -arttext682164723516702724
// -Red's Roomvoice672421882733264918
// -toystext679558866908086273
// -application-labtext678788340866088990
// -debatetext679101386755014676
// -askmeanythingtext682558095565651979
// -LED Landvoice675000363287445504
// -Office 939voice677725333906259968
// -8th Floorcategory672417849561841687
// -help-desk-🛎text677534894628274211
// -comm-lab-tabletext678829102458863616
// -wwetext675276472763809812
// -GENERAL IMA/B STUFFcategory672417849561841686
// -The 826 Studiovoice672419691804753960
// -pokémontext678474841162121247
// -randomtext672419650600042497
// -IxLab Table 💥voice676973705057927179
// -Infocategory674951262558486528
// -new-memberstext674966495641731072
// -Alumnicategory674999532563595264
// -opportunitiestext674960574748164121


// Jingtian's test server
// -Text Channelscategory682850823465992214
// -Voice Channelscategory682850823465992215
// -bot-debugtext682850823465992216
// -Generalvoice682850823465992217