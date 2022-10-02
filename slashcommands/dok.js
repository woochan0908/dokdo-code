const Schema = require("../models/독도")

module.exports = {
    name: "add",
    description: "독도 명령어를 쓸 수 있는 사람을 추가해요",
    options: [{
        name: "id",
        description: "id",
        type: "STRING",
        required: true,
    }],
    async execute(interaction) {
        if (interaction.member.user.id !== "개발자 아이디") return interaction.reply("개발자만 사용가능합니다")
        const text1 = interaction.options.getString("id")
        const find = await Schema.findOne({ userid: text1.trim() })
        if(find) return interaction.reply({ content: "이미 추가되어 있는 사람입니다", ephemeral: true })
        const newData = new Schema({
        userid: text1.trim(),
    })
        newData.save()
        interaction.reply("추가 성공")
}
}
