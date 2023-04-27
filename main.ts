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
    } else if (Alarma == 0) {
        basic.showIcon(IconNames.Heart)
    }
})
