import { useState } from "react"

const LightModule = () => {
    const morseCode = ['....', '---', '.-..', '.-']
    const [showing, setShowing] = useState(false)

    const reproduceMorse = () => {
        let morse = morseCode
        morse.map((letter) => {
            l = letter.split('')
            l.map((symbol) => {
                switch(symbol) {
                    case '.':

                    break
                    case '-':
                    break
                    case ' ':
                }
            })
        })
    }

    const reproduceSymbol = () => {
        
    }

    return ( 
        <div className='flex flex-col gap-2 bg-blue-200 p-4 rounded-lg text-blue-50'>
            <div className='rounded-full bg-blue-100 aspect-square'></div>
            <button 
                className='bg-blue-900 hover:bg-blue-700 rounded-lg p-2'
                onClick={reproduceMorse}
            >Reproduce</button>
        </div>
    )
}
export default LightModule