const main = document.querySelector('.main')
const turnSpan = document.querySelector('.turninfo')
const errorSpan = document.querySelector('.error')
const resultSpan = document.querySelector('.result')
const resetBtn = document.querySelector('.reset')

const gameBoard = (() =>{
    let playerOneTurn = true
    const array = []
    let isGameOverBool = false
    let isGameDrewBool = false
    const renderBoard = () =>{
        for(let i = 0; i < 3; i++)
        {
            const row = document.createElement('div')
            row.classList.add('row')
            for(let j = 0; j < 3; j++)
            {
                const block = document.createElement('div')
                block.classList.add('block')    
                array.push(block)                    
                row.appendChild(block)
            }
            main.appendChild(row)
            console.log(row.children)
        }    
    }
    const logArray = () =>{
        console.log(array)
        return {array}
    }

    const checkForWinner = () =>{
        //vertically
        for(let i = 0; i < 9; i+=3)
        {
            if(array[i].textContent == array[i+1].textContent && array[i+1].textContent == array[i+2].textContent && array[i].textContent != '')
            {
                isGameOverBool = true
            }
        }
        //horizontally
        for(let i = 0; i < 3; i++)
        {
            if(array[i].textContent == array[i+3].textContent && array[i+3].textContent == array[i+6].textContent && array[i].textContent != '')
            {
                isGameOverBool = true
            }
        }
        //diagonally
        if(array[0].textContent == array[4].textContent && array[4].textContent == array[8].textContent && array[0].textContent != '')
        {
            isGameOverBool = true
        }
        
        if(array[2].textContent == array[4].textContent && array[4].textContent == array[6].textContent && array[2].textContent != '')
        {
            isGameOverBool = true
        }

        if(array.every(element => element.textContent !== '' && !isGameOverBool))
        {
            isGameDrewBool = true
        }
        
    }


    const isGameEnd = () =>{
        checkForWinner()
        if(isGameOverBool){
            resultSpan.textContent = `Game Over!`
        }else if(isGameDrewBool)
        {
            resultSpan.textContent = `Game Over! It's a draw!`
        }
    }

    const addListeners = (fun) =>{
        array.forEach(element => element.addEventListener('click', (e) =>{
            console.log('clicked' + array.indexOf(element))
            if(playerOneTurn) {
                playerO.displayTurn()
                playerX.markSpot(element)
                playerOneTurn = false
                isGameEnd()
            }else{
                playerX.displayTurn()
                playerO.markSpot(element)
                playerOneTurn = true
                isGameEnd()
            }
        }))
        return array
    }

    resetBtn.addEventListener('click', () =>{
        array.forEach(element => {
            element.textContent = ''
        })
        resultSpan.textContent = ''
        turnSpan.textContent = 'Player X turn'
        errorSpan.textContent = ''
        isGameDrewBool = false
        isGameOverBool = false
    })

    return {renderBoard, logArray, addListeners}
})()

const player = (name) =>{
    const markSpot = (item) =>{
        if(item.textContent == '')
        {
            item.textContent = name
         errorSpan.textContent = ''
        }
        else
        {
            validateError()
        }
    }

    const displayTurn = () =>{
        turnSpan.textContent = `Player ${name} Turn`        
    }

    const validateError = () =>{
     errorSpan.textContent = `Whoa, Player ${name}, this square is alerady taken.`
    }
 
    return {markSpot, displayTurn}
}

gameBoard.renderBoard()
gameBoard.addListeners()
const playerX = player('X')
const playerO = player('O')

console.log(main.children)