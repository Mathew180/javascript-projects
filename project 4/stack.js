const grid = document.querySelector('.grid')
let invadersTIndex = 202
let direction = 1
let width = 15
let goingRight = true
let timerId
let results = 0
let aliensRemoved = []

for(let i = 0; i < 225; i++){
    const squares = document.createElement('div')
    grid.appendChild(squares)
}

const squares = Array.from(document.querySelectorAll('.grid div'))

console.log(squares)

const alienInvaders = [0,1,2,3,4,5,6,7,8,9,
                       15,16,17,18,19,20,21,22,23,24,
                       30,31,32,33,34,35,36,37,38,39]

function draw(){
    for(let i = 0; i < alienInvaders.length;i++){
        if (!aliensRemoved.includes(i)) {
            squares[alienInvaders[i]].classList.add('invaders')
        }
  
    }
}

draw()

function remove(){
    for(let i = 0; i < alienInvaders.length;i++){
        squares[alienInvaders[i]].classList.remove('invaders')
    }
}

squares[invadersTIndex].classList.add('invadersT')

function moveInvadersT(e) {
  
    squares[invadersTIndex].classList.remove('invadersT')
    switch (e.key) {
        case 'ArrowLeft':
            if(invadersTIndex % width !== 0) invadersTIndex -=1
            break;
            case 'ArrowRight':
                if(invadersTIndex % width < width -1) invadersTIndex +=1
                break;
    }
    squares[invadersTIndex].classList.add('invadersT')
    
}

document.addEventListener('keydown', moveInvadersT)

function moveInvaders() {
    const leftEdge = alienInvaders[0]  % width === 0
    const rightEdge = alienInvaders[alienInvaders.length -1]  % width === width -1
    remove()

    if(rightEdge && goingRight){
        for(let i = 0; i < alienInvaders.length; i++){
            alienInvaders[i] += width +1
            direction = -1
            goingRight = false
        }
     
    }

    if(leftEdge && !goingRight){
        for(let i = 0; i < alienInvaders.length; i++){
            alienInvaders[i] += width -1
            direction = 1
            goingRight = true
        }
     
    }

    for(let i = 0; i < alienInvaders.length; i++){
        alienInvaders[i] += direction
    }
    

    draw()
    
    if(squares[invadersTIndex].classList.contains('invaders', 'invaderT')){
        document.querySelector('.stats').innerText = `Game Over`
        clearInterval(timerId )
    }
}

timerId = setInterval(moveInvaders, 1300);


function laserBeam(e) {
    let laserId
    let laserBeamerIndex = invadersTIndex

    function moveLaserBeamed(){
       squares[laserBeamerIndex].classList.remove('laser')
       laserBeamerIndex -= width
       squares[laserBeamerIndex].classList.add('laser')

    if(squares[laserBeamerIndex].classList.contains('invaders')){
       squares[laserBeamerIndex].classList.remove('laser')
       squares[laserBeamerIndex].classList.remove('invaders')
       squares[laserBeamerIndex].classList.add('boom')
 

       setTimeout(() =>squares[laserBeamerIndex].classList.remove('boom'),300);
       clearInterval(laserId)
    } 

    const alienRemoved = alienInvaders.indexOf(laserBeamerIndex)
   aliensRemoved.push(alienRemoved)
   results++
   document.querySelector('#score').innerHTML = `Your Score ${results}`
   console.log(alienRemoved)
   
    }
    switch (e.key) {
 
        case 'ArrowUp':
            laserId =  setInterval(moveLaserBeamed,100)
            break;
            // console.log('Hi');
    }
}


document.addEventListener('keydown',laserBeam)












// class Stack{
//     constructor(){
//         this.items = []
//         this.count = 0
//     }

//     pushe(element){
//         console.log(`${element} was added to ${this.count}`)
//         this.items[this.count] = element
      
//         this.count+=1
      
//         return this.count - 1
//     }

//     pop(){
//     if(this.count === 0) return undefined
//     let deleteItem = this.items[this.count -1]

//     console.log(`${deleteItem} was removed from ${this.count}`)
//     this.count--
    
//     return deleteItem
//     }

//     peek(){

//         console.log(`Top Element is ${this.items[this.count -1]}`)

//         this.items[this.count -1]
// }

//     size(){
//         console.log(`${this.count} elements in stack`)
//         return this.count
//     }

//     print(){
//         if(this.count === 0) return `No Element to Print`
//         let str = ''
//         for(let i = 0;i < this.count;i++){
//             str += this.items[i] + ' '
//         }
//         return str
//     }

//         isEmpty(){
//         console.log(this.count === 0 ? `Stack Is Empty [${this.count}]` : `Stack is Not Empty [${this.count}]`)
//         return  this.count === 0
//         }

// }

// const stack = new Stack()

// stack.isEmpty()

// stack.pushe(100)
// stack.pushe(200)
// stack.peek()

// stack.pushe(300)

// console.log(stack.print())



// stack.pop()
// stack.isEmpty()
// stack.pop()
// console.log(stack.print())
// stack.pop()



// console.log(stack.print())

// stack.size()
// stack.isEmpty()

// {/* <nav className="navbar">
// <ul>   
//    <li>{weather.name}, {weather.sys.country}</li>
//    <li className="navbarState">{days[d.getDay()]}, {months[d.getMonth()]} {d.getDate()}th</li>
//  </ul>
// </nav>

// <div className="banner">
// <div>
// <p>{Math.round(weather.main.temp)}<span><small><sup>o</sup>C</small></span> </p>
// <h4><FaCloud className="FaCloud"/>LIGHT RAIN</h4><br/>
// </div>

// <div>
// <ul>
// <li>2.94m/s <br/> wind speed</li>
// <li>50% <br/> humidity</li>
// <li>1016hpa <br/> pressure</li>
// </ul>
// </div>
// </div> */}
