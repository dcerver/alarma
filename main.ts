music.setVolume(255)
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) > 250) {
        music.stopAllSounds()
    } else {
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
