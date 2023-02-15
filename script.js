const main = document.querySelector('.main')

const gameBoard = (() =>{
    let playerOneTurn = true
    const array = []
    const renderBoard = () =>{
        for(let i = 0; i < 3; i++)
        {
            const row = document.createElement('div')
            for(let j = 0; j < 3; j++)
            {
                const block = document.createElement('div')
                block.classList.add('block')    
                array.push(block)                    
                row.appendChild(block)
            }
            main.appendChild(row)
        }    
    }
    const logArray = () =>{
        console.log(array)
        return {array}
    }
    const addListeners = (fun) =>{
        array.forEach(element => element.addEventListener('click', (e) =>{
            console.log('clicked' + array.indexOf(element))
            if(playerOneTurn) {
                playerX.markSpot(element)
                playerOneTurn = false
            }else{
                playerO.markSpot(element)
                playerOneTurn = true
            }
        }))
        return array
    }

    const validateError = (item) =>{

    }

    return {renderBoard, logArray, addListeners}
})()

const player = (name) =>{
    const markSpot = (item) =>{
        if(item.innerHTML == '')
        {
            item.innerHTML = name
        }
        else
        {
            console.log("DAJ TU WALIDACJE")
        }
        checkForWinner()
        return {}
    }
    const checkForWinner = () =>{
        const winningCombinations = [
        [0,1,2],
         [3,4,5],
          [6,7,8],
           [0,4,8],
            [2,4,6],
             [0,3,6],
              [1,4,7],
               [2,5,8]]
    console.log("GAME ENDED")
    }
    return {markSpot}
}

gameBoard.renderBoard()
gameBoard.addListeners()
const playerX = player('X')
const playerO = player('O')