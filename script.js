const main = document.querySelector('.main')

const gameBoard = (() =>{
    let playerOneTurn = true
    const array = []
    let isGameOverBool = false
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

        if(array.every(element => element.textContent !== ''))
        {
            isGameOverBool = true
        }
        
    }


    const isGameEnd = () =>{
        checkForWinner()
        if(isGameOverBool){
            console.log("Game Over!")
        }
    }

    const addListeners = (fun) =>{
        array.forEach(element => element.addEventListener('click', (e) =>{
            console.log('clicked' + array.indexOf(element))
            if(playerOneTurn) {
                playerX.markSpot(element)
                playerOneTurn = false
                isGameEnd()
            }else{
                playerO.markSpot(element)
                playerOneTurn = true
                isGameEnd()
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
        if(item.textContent == '')
        {
            item.textContent = name
        }
        else
        {
            console.log("DAJ TU WALIDACJE")
        }
        return {}
    }
    return {markSpot}
}

gameBoard.renderBoard()
gameBoard.addListeners()
const playerX = player('X')
const playerO = player('O')