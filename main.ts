radio.onReceivedNumber(function (receivedNumber) {
    Alarma = receivedNumber
})
let Alarma = 0
radio.setGroup(76)
music.setVolume(255)
Alarma = 0
basic.forever(function () {
    if (Alarma == 1) {
        if (input.magneticForce(Dimension.Strength) > 150) {
            radio.sendNumber(0)
            basic.clearScreen()
            music.stopAllSounds()
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
    } else if (Alarma == 0) {
        basic.showIcon(IconNames.No)
    }
})
