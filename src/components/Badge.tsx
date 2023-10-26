import React from "react"


const Badge = (props)=>{

    const badgeStyle={
        ...props.style,
        width:'fit-content',
        height:'fit-content',
        color: props['font-color']||'white',
        padding: props?.padding|| props.rounded ?'2px':'2px 6px',
        borderRadius: props.rounded ? '8px' 
                    : props?.square ? '0%' 
                    :'4px',
        backgroundColor: props?.color||'skyblue',
        fontSize: props['font-size']||'12px',
        lineHeight: '12px',
        minHeight: '12px',
        opacity:props.transparent ? 0.8
               : 1,
        display: props.align ? 'inline-flex':'',
        verticalAlign: props.align,
        margin:props?.align&&'2px'

    }

    return (
    <div>
        <div className={`${props.class}`} style={badgeStyle} >
            {props.children}
        </div>
    </div>

            

    )
}

export default Badge