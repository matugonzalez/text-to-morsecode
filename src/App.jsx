import { useState } from "react"

function App() {
    const [text, setText] = useState()
    const [code, setCode] = useState()

    const handleOnChange = (e) => {
        const value = e.target.value
        const arrayValue = value.split()
        
        if (e.target.name === 'text') {
            setText(value)
            
            setCode(value.split(','))
        }
        if (e.target.name === 'code') {
            setCode(value)
            setText(value)
        }
    }

    const sortString = (string) => {
        string.s
    }
    return (
        <div className='bg-gray-900 h-screen grid place-items-center'>
            <div className='max-w-xs flex flex-col gap-4'>
                <span className='text-blue-50'>Enter your text</span>
                <textarea 
                    name='text'
                    value={text}
                    onChange={handleOnChange}
                />

                <span className='text-blue-50'>Enter your morse code</span>
                <textarea 
                    name='code'
                    value={code}
                    onChange={handleOnChange}
                    
                />
            </div>
            
        </div>
    )
}

export default App
