//독도
const Dokdo = require("dokdo");
const Schema = require("./models/독도")

client.on('messageCreate', async message => {{
    const data = await Schema.find()
    let ehrehuser = []
    for (let i = 0; i < data.length; i++) {
      ehrehuser.push(data[i].userid,);
    }
    const DokdoHandler = new Dokdo(client, {
      aliases: ['독도', 'dok', 'dokdo', '서버', '독', '애ㅏ'], prefix: "?",
      owners: ehrehuser,
      noPerm: (message) => message.reply(":no_entry_sign: dokdo를 사용할 권한이 없습니다."),
    });
    await DokdoHandler.run(message);
  }
})
