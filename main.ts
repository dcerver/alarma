radio.onReceivedString(function (receivedString) {
    if (receivedString == "ON") {
        if (input.magneticForce(Dimension.Strength) > 150) {
            music.stopAllSounds()
            radio.sendNumber(0)
        } else {
            radio.sendNumber(1)
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.InBackground)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.pause(100)
            basic.clearScreen()
            basic.pause(100)
        }
    } else if (receivedString == "OFF") {
        basic.showIcon(IconNames.No)
    }
})
radio.setGroup(76)
music.setVolume(31)
