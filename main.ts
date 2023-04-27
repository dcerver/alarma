radio.setGroup(76)
music.setVolume(31)
basic.forever(function () {
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
})
