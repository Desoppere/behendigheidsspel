input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(200)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
	
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Surprised)
    basic.pause(500)
    basic.clearScreen()
    game.removeLife(1)
    if (game.score() == 0) {
        game.gameOver()
    }
})
game.setScore(3)
basic.forever(function () {
	
})
