import React from 'react'
import logoImg from './job.jpg'
import logoStyle from './logo.css'


class Logo extends React.Component{
    render(){
        return(
            <div className="logoStyle">
              <img src={logoImg} alt=""/>
            </div>
        )
    }
}

export default Logo