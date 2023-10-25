import React from "react";
import Icon from "./Icons";


const Avatar = (props) => {
    const avatarStyle ={    
      width: props?.size||'20px',
      height: props?.size||'20px',
      border: `${props?.border ||'1px'} solid ${props['border-color']}`,
      borderRadius: props.square?'0%': props.rounded?'8%':'50%',
      fontSize: props['font-size']||'16px',
      color:props['font-color']||'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: props?.color||'skyblue', 
      backgroundImage: props['icon-outlined']||props['icon']||`url(${props.imgSrc})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
     ...props.style
      }

  return (
    <div style={avatarStyle} className={props.class}>
      {props.icon || props['icon-outlined']?
        <Icon name={props.name} color={props['icon-color']} size={props['icon-size']} outlined={ props['icon-outlined']}  />
      : typeof props.children==='string'&&props.children }
        

    </div>
  );
};




export default Avatar;