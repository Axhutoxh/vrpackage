import React from "react"

const Button = (props)=>{

    const btnStyle={
        ...props.style,
        border:props.flat&&'0px'||`1px solid ${props.outline&&props['font-color']||props.color||'black'}`,
        height:props.height||props.square||props.circle?props.children?'':'20px':'',
        width:props.width||props.square||props.circle?props.children?'':'20px':'',
        backgroundColor:props.outline ?''
                       :props.color,
        color:props.outline ?props['font-color']||props.color
             :'',
        fontSize:props.outline ?props['font-color']||props.color
                :'',
        padding:props.dense 
                ? '0px 2px'
                :'' ,
        borderRadius:props.square 
                     ? '0%'
                    :props.circle
                     ? '50%'
                     :'8%',
    }

    return(
        <button style={btnStyle} className={`${props.class}`} >
            {props.children}
        </button>
    )

}

export default Button