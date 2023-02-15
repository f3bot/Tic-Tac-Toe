const main = document.querySelector('.main')

const gameBoard = (() =>{
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
    }
    const addListeners = (fun) =>{
        array.forEach()
    }
    return {renderBoard, logArray, addListeners}
})()

const player = (name) =>{
    const markSpot = () =>{
        checkForWinner()
        return {}
    }
    const checkForWinner = () =>{
        const combinations = [[0,1,2],
         [3,4,5],
          [6,7,8],
           [0,4,8],
            [2,4,6],
             [0,3,6],
              [1,4,7],
               [2,5,8]]
    }
    return {markSpot}
}

gameBoard.renderBoard()
gameBoard.logArray()
const playerX = player('X')
const playerO = player('O')