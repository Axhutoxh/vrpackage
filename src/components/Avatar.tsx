import React from "react";


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
      backgroundImage: `url(${props.imgSrc})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
     ...props.style
      }

  return (
    <div style={avatarStyle}>
        {props.children}
      {/* {imageUrl ? null : initials} */}
    </div>
  );
};




export default Avatar;