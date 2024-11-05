import React from 'react'
import PhoneInput from 'react-phone-number-input'


function PhoneInputBox() {
    
    return (
        <>
        <div className="">
            <div className="">
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-shade_5 text-opacity-80 tracking-wider">Phone Number</label>
                <PhoneInput
                    placeholder="Enter phone number"
                    name="Phone"
                    id="Phone"
                    type="tel"
                    className='custom-phone-input PhoneInput flex text-base rounded-lg border-[1px] focus:border-[.6px] border-shade_4  text-shade_5 placeholder-shade_5 placeholder-opacity-40 focus:border-shade_5 w-full p-3' required />
            </div>
            </div>
        </>
    )
}

export default PhoneInputBox