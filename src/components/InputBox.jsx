import React from 'react'
import '../styles/PhoneInput.css'
import PhoneInput from 'react-phone-number-input'

function InputBox() {
    return (
        <>
            <PhoneInput
                placeholder="Enter phone number"
                name="Phone"
                id="Phone"
                type="Phone"
                autoComplete="off"
                className='custom-phone-input PhoneInput flex text-base rounded-lg border-[1px] focus:border-[.6px] border-shade_5 border-opacity-40 text-shade_5 placeholder-shade_5 placeholder-opacity-40 focus:border-shade_5 w-full p-3'  required/>
        </>
    )
}

export default InputBox