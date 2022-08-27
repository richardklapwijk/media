input.onButtonPressed(Button.A, function () {
    media.sendCode(media.keys(media._MediaKey.playPause))
})
input.onButtonPressed(Button.B, function () {
    media.sendCode(media.keys(media._MediaKey.previous))
})
media.startMediaService()
