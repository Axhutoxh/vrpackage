
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'vrpackage/src/components/Icon'
const Breadcrumbs = (props)=>{
    const breadcrumbStyle = {
        ...props.style,
    }

    const handlePathClick = (index, item)=>{

      if(props.click){
      
        props.click(index,item)
      }
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
                        <span className="pointer-cursor" onClick={()=>handlePathClick(i, item)}>
                          {item}
                        </span>
               
                    {i+1<props.crumbs.length&&<div className={`${props.class} flex items-center px-xs px-${props.paddinglr}`}>{props['icon-separator']&&<Icon name={props['icon-separator']} />||props?.separator||'/'}</div>}
                 </div> 
              :   <div key={i}    className={`${i+1!==props.crumbs.length ?
                props['active-color']&&'text-'+props['active-color']||'text-primary'
                :props.class||'text-grey'} flex row items-center `}>
                <div className='flex row items-center pointer-cursor' onClick={()=>handlePathClick(i, item.label)}><Icon name={item.icon} class="pr-xs" />
                
                <span>{item.to ? <Link to={item.to} className={`${props.class||'text-grey'}`} target={item.to&&props.target} style={{textDecoration:'none'}} >{item.label}</Link>:item.label}</span>
               </div>
                {i+1<props.crumbs.length&&<div className={`${props.class} flex items-center px-xs px-${props.paddinglr}`}>{props['icon-separator']&&<Icon name={props['icon-separator']} />||props?.separator||'/'}</div>}
           </div> 
            )
          })}

        </div>
    )
}

export default Breadcrumbs