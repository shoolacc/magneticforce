let force = 0
input.onButtonPressed(Button.A, function () {
    force = input.magneticForce(Dimension.Strength)
    if (force >= 0) {
        basic.showString("No force")
    }
    if (force < 0) {
        basic.showString("Force detected")
    }
})
