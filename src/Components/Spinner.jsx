import React from 'react'
import { TailSpin } from 'react-loader-spinner'


function Spinner() {
    return (
        <div className='flexItem'>
            <TailSpin
                visible={true}
                height="40"
                width="40"
                color="#6dc4a1"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperClass=""

            />
        </div>
    )
}
export default Spinner
