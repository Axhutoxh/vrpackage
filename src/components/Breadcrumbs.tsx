
import React from 'react';
import Icons from './Icons'
const Breadcrumbs = (props)=>{
    const breadcrumbStyle = {
        ...props.style,
    }

    return (
        <div style={breadcrumbStyle} className="flex" >
          {props.crumbs.map((item,i)=>{
            return (
                typeof item==='string'?
                <div key={i}  
                className={` ${i+1!==props.crumbs.length ?
                    props['active-color']&&'text-'+props['active-color']||'text-primary'
                    :props.class||'text-grey'} flex row items-center `}>
                        <span className="pointer-cursor">{item}</span>
               
                    {i+1<props.crumbs.length&&<div className={`${props.class} flex items-center px-xs px-${props.paddinglr}`}>{props['icon-separator']&&<Icons name={props['icon-separator']} />||props?.separator||'/'}</div>}
                 </div> 
              :   <div key={i}    className={`${i+1!==props.crumbs.length ?
                props['active-color']&&'text-'+props['active-color']||'text-primary'
                :props.class||'text-grey'} flex row items-center `}>
                <div className='flex row items-center pointer-cursor'><Icons name={item.icon} class="pr-xs" />
                {item.label}</div>
                {i+1<props.crumbs.length&&<div className={`${props.class} flex items-center px-xs px-${props.paddinglr}`}>{props['icon-separator']&&<Icons name={props['icon-separator']} />||props?.separator||'/'}</div>}
           </div> 
            )
          })}

        </div>
    )
}

export default Breadcrumbs