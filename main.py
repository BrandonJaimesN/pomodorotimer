function pomodoro () {
    basic.clearScreen()
    t = 2 * 60
    while (t >= 0) {
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        t += 0 - 1
    }
}
input.onButtonPressed(Button.A, function () {
    secs = 0
    basic.showString("3")
    basic.showString("2")
    basic.showString("1")
    pomodoro()
    basic.showIcon(IconNames.Yes)
    basic.showString("Break Time!")
})
let secs = 0
let t = 0
basic.showString("A to Pomodore")
basic.showArrow(ArrowNames.West)
