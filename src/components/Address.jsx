import React from 'react'

function Address() {
    return (
        <>
            <div className="flex flex-col gap-5 bg-shade_3 bg-opacity-40 border-[0.002px] border-shade_3 rounded-xl p-4 ">
                <div className="flex items-center gap-3 w-full">
                    <div className="">
                        <svg width="17" height="22" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.383832 10.0229C0.141802 9.30061 0 8.53259 0 7.73164C0 3.57929 3.62933 0.244141 7.99846 0.515461C11.7026 0.745388 14.714 3.62826 14.9807 7.19832C15.0504 8.13017 14.9279 9.02539 14.6699 9.8608C13.4658 13.7587 7.50136 19.5 7.50136 19.5C7.50136 19.5 1.88725 14.5083 0.383832 10.0229Z" fill="#916CE7" />
                            <path d="M11.0299 7.73132C11.0299 9.61083 9.44983 11.1343 7.50078 11.1343C5.55173 11.1343 3.97168 9.61083 3.97168 7.73132C3.97168 5.8518 5.55173 4.32812 7.50078 4.32812C9.44983 4.32812 11.0299 5.8518 11.0299 7.73132Z" fill="#050505" stroke="#916CE7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <h3 className=' text-shade_1 text-xl font-medium w-full'>Address</h3>
                </div>
                <div className="">
                    <div className="bg-shade_8 gap-2 flex rounded-md p-3 text-shade_5 text-lg md:text-lg font-light">
                        Satara road, Chh. Sambhajinagar, Maharashtra - 431002
                    </div>
                </div>
            </div>
        </>
    )
}

export default Address