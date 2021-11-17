import React from 'react'

export const Smallcard = (props) => {
    return (
        <>
            <div className="smallCard w-14 h-20 items-center justify-center  ">
                <img src={props.url} alt="" srcset="" />
                <div className="txt w-full text-center font-medium text-sm ">{props.title}</div>
            </div>   
        </>
    )
}
