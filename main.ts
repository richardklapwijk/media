input.onButtonPressed(Button.A, function () {
    media.sendCode(media.keys(media._MediaKey.playPause))
})
input.onButtonPressed(Button.AB, function () {
    media.sendCode(media.keys(media._MediaKey.next))
})
input.onButtonPressed(Button.B, function () {
    media.sendCode(media.keys(media._MediaKey.previous))
})
media.startMediaService()
