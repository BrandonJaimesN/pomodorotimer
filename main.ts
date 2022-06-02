function Smiley () {
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Sad)
}
function pomodoro () {
    basic.clearScreen()
    Smiley()
    t = 5 * 2
    while (t >= 0) {
        led.toggle(0, 2)
        led.toggle(4, 2)
        basic.pause(1000)
        t += 0 - 1
        led.toggle(0, 3)
        led.toggle(4, 3)
    }
}
input.onButtonPressed(Button.A, function () {
    secs = 0
    basic.showString("3")
    basic.showString("2")
    basic.showString("1")
    pomodoro()
    basic.showIcon(IconNames.Yes)
    basic.showString("HORA DEL BREAK")
})
let secs = 0
let t = 0
basic.showString("INICIA")
basic.showArrow(ArrowNames.West)
