import { codeToTextRules, textToCodeRules } from "./rules"

const convertToCode = (string) => {
    const array = string.split('')

    const morseArray = array.map((letter) => {
        return textToCodeRules(letter)
    })
    return morseArray.join(' ')
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
