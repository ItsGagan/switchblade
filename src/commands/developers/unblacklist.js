const { Command, BlacklistUtils, SwitchbladeEmbed, Constants } = require('../../')

module.exports = class Unblacklist extends Command {
  constructor (client) {
    super(client, {
      name: 'unblacklist',
      category: 'developers',
      hidden: true,
      requirements: { devOnly: true },
      parameters: [{
        type: 'user', showUsage: false, missingError: 'commands:unblacklist.missingUser'
      }]
    })
  }

  async run ({ channel, author, t }, user) {
    const embed = new SwitchbladeEmbed(author)
    await this.modules.developers.unblacklist(user.id)
    embed.setDescription(`**${t('commands:unblacklist.success', { user })}**`)
    channel.send(embed)
  }
}
