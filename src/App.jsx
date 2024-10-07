import { useState } from "react"
import Textarea from "./components/Textarea"
import {convertToCode, convertToText} from "./utils/utils"

function App() {
    const [text, setText] = useState()
    const [code, setCode] = useState()

    const handleOnChange = (e) => {
        const value = e.target.value
        
        if (e.target.name === 'text') {
            translateToCode(value)
        }
        if (e.target.name === 'code') {
            translateToText(value)
        }
    }

    const translateToCode = (value) => {
        setText(value)
        setCode(convertToCode(value))
    }

    const translateToText = (value) => {
        setCode(value)
        setText(convertToText(value))
    }

    return (
        <div className='bg-gray-900 h-screen grid place-items-center'>
            <div className='max-w-xs flex flex-col gap-4'>
                <span className='text-blue-50'>Enter your text</span>
                <Textarea
                    name='text'
                    value={text}
                    onChange={handleOnChange}
                />

                <span className='text-blue-50'>Enter your morse code</span>
                <Textarea 
                    name='code'
                    value={code}
                    onChange={handleOnChange}
                />
                <div>
                    <span className='text-blue-50'>1 space to finish a letter, 2 spaces to finish a word</span>
                </div>
            </div>
            <span className='absolute top-0 left-0 p-4 text-5xl'>🤖</span>
        </div>
    )
}

export default App
