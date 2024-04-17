let list = 0
let value = 0
loops.everyInterval(500, function () {
    if (list == 1) {
        kitronik_motor_driver.stepperMotorTurnSteps(kitronik_motor_driver.MotorDirection.Forward, 100)
        list += 1
    }
    if (list == 2) {
        kitronik_motor_driver.stepperMotorTurnSteps(kitronik_motor_driver.MotorDirection.Reverse, 100)
        list += -2
    }
})
basic.forever(function () {
    value = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (value < 17) {
        Kitronik_Robotics_Board.stepperMotorTurnSteps(Kitronik_Robotics_Board.StepperMotors.Stepper1, Kitronik_Robotics_Board.MotorDirection.Forward, 100)
    } else {
        list = 1
    }
})
