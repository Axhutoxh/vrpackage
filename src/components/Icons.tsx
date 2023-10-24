import 'material-icons/iconfont/material-icons.css';


const Icon = (props)=>{
    const iconStyle = {
        ...props.style,
        color:props.color,
        fontSize:props.size,
    }



    return (
        <div>
            { 
                props.outlined ?
                     (<span className="material-icons-outlined" style={iconStyle}>{props.name}</span>) 
                : props.sharp ? 
                     ( <span className="material-icons-sharp" style={iconStyle}>{props.name}</span>)  
                : props['two-tone'] ?
                     (    <span className="material-icons-two-tone" style={iconStyle}>{props.name}</span> )
                :    (    <span className="material-icons" style={iconStyle}  >{props.name}</span>)
            }
        </div>
    )
}

export default Icon