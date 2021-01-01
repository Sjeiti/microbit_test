const list = [[1,2]]

input.onButtonPressed(Button.A, function () {
    list.push([Math.random()*4.99<<0,0])
})

input.onButtonPressed(Button.B, ()=>list.pop())

input.onGesture(Gesture.Shake, ()=>list.length = 0)

basic.forever(function () {
    basic.clearScreen()
    list.forEach(pos=>{
        const [x,y] = pos
        led.plot(x,y)
        pos[1] = (y+1)%5
    })
})
