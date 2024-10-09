import { codeToTextRules, textToCodeRules } from "./rules"
const removeSpace = (array) => {
    let count = 0
    return array.filter(item => {
        if (item === ' ') {
            count++
            if (count === 3) {
                count = 0
                return false
            } 
        } else {
            count = 0
        }

        return true
    })
}

const convertToCode = (string) => {
    const array = string.split('')

    const morseArray = array.map((letter) => {
        return textToCodeRules(letter)
w   })
    const reducedMorse = removeSpace(morseArray.join(' ').split(''))

    return reducedMorse.join('')
}

const convertToText = (string) => {
    const array = string.split(' ')
    
    const morseArray = array.map((letter, index) => {
        if (letter === ' ' && array[index + 1] === ' ') {
            return '  '
        }

        if (letter === ' ' && array[index - 1] === ' ') {
            return null
        }

        return codeToTextRules(letter)
    })

    return morseArray.join('')
}

export {
    convertToCode,
    convertToText,
}
