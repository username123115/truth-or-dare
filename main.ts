input.onButtonPressed(Button.A, function () {
    Truth_Dare = randint(0, 1)
    if (Truth_Dare == 0) {
        basic.showString("Truth!")
    } else {
        basic.showString("Dare!")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    Direction2 = randint(0, 3)
    if (Direction2 == 0) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (Direction2 == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # . # .
            . . # . .
            `)
    }
    if (Direction2 == 2) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # . #
            . . . # .
            . . # . .
            `)
    }
    if (Direction2 == 3) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # . # # #
            . # . . .
            . . # . .
            `)
    }
})
let Direction2 = 0
let Truth_Dare = 0
basic.showString("Truth or dare")
Truth_Dare = 0
Direction2 = 0
