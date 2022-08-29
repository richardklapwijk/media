def on_button_pressed_a():
    media.send_code(media.keys(media._MediaKey.PLAY_PAUSE))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    media.send_code(media.keys(media._MediaKey.NEXT))
input.on_button_pressed(Button.B, on_button_pressed_b)

media.start_media_service()