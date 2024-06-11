import {Link} from 'react-router-dom'
import "./nav.css"

const menu = [
    {
        label:'Home',
        href:'/'
    },
    {
        label:'Teachers',
        href:'/teachers'
    },
    {
        label:'Holidays',
        href:'/holidays'
    }
]
const Nav = () =>{
    return(
        <nav 
            className='sticky top-0 z-50'
            style={{
                display:'flex',
                background:'white', 
                justifyContent:'space-between',
                padding: '8px 48px',
                boxShadow:'0 8px 8px rgba(0,0,0,0.1)'
            }}>
                <div style={{
                    display:'flex',
                    alignItems:'center',
                    gap:'8px'
                }}>
                    <img src="./images/logo.png" width="60" height="60" alt="pic"></img>
                    <h1 className='text-3xl font-bold'>CodeSchool</h1>
                </div>
                    <ul style={{
                        listStyle:'none',
                        padding:0,
                        margin:0,
                        display:'flex',
                        gap: 32
                    }}>
                       {
                        menu.map((menu,index)=>{
                            return(
                                <li 
                                    key={index}
                                    style={{display:'flex',alignItems:'center',padding:'16px 25px'}}>
                                    <Link to={menu.href} style={{
                                        textDecoration:'none', 
                                        fontSize:17,
                                        color:'#323232'
                                    }}>{menu.label}</Link>
                                </li>

                            )
                        })
                       } 

                        <li style={{display:'flex',alignItems:'center',padding:'16px 25px'}}>
                            <Link to="/contact" className='contact-us-btn' style={{
                                textDecoration:'none',
                                color:'white',
                                fontSize:17,
                                background:'#8700ff',
                                padding:'12px 30px',
                                borderRadius: 4
                            }}>Contact Us</Link>
                        </li> 
                    </ul>
                
        </nav>
    )
}

export default Nav