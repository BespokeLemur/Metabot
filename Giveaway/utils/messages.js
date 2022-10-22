const config = process.env;

module.exports = {
    giveaway: (config.everyoneMention ? "@everyone\n\n" : "")+"🎉🎉 **ÇEKİLİŞ BAŞLADI** 🎉🎉",
    giveawayEnded: (config.everyoneMention ? "@everyone\n\n" : "")+"🎉🎉 **ÇEKİLİŞ SONLANDI** 🎉🎉",
    inviteToParticipate: "🎉 Emojisine basarak katılabilrisin!",
    dropMessage: "🎉 Emojiye ilk basan kazanır!",
    drawing: 'Kalan: {timestamp}',
    winMessage: "Tebrikler!!, {winners}! **{this.prize}** Kazandın!",
    embedFooter: "Meta Giveaway Botu",
    noWinner: "Çekiliş iptal edildi kazanan yok.",
    hostedBy: "Hosted by: {this.hostedBy}",
    winners: "kazanan(lar)",
    endedAt: "Sonlandı"
};
