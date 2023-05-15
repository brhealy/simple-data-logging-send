let Force = 0
radio.setGroup(43)
basic.forever(function () {
    Force = input.acceleration(Dimension.Strength)
    basic.showNumber(Force)
    radio.sendNumber(Force)
})
