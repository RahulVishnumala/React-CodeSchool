import {Link} from 'react-router-dom'

const Footer = () => {
    return(
        <footer style={{
            padding:'60px 100px',
            background:'black',
            display:'flex',
            gap:48
            }}>
               <div style={{width:'100%'}}>
                    <h1 style={{
                        color:'#f5f5f5',
                        fontWeight: 500,
                    }}>CodeSchool</h1>
                    <p style={{color:'white'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis obcaecati eveniet deleniti esse incidunt labore facere eligendi. Ea beatae cum nemo! Nesciunt illum voluptates reprehenderit, quas voluptatem ipsum libero est.</p>
                </div> 

               <div style={{width:'100%'}}>
                    <h1 style={{
                        color:'#f5f5f5',
                        fontWeight: 500,
                    }}>Usefull Links</h1>
                    <ul style={{
                        padding:0,
                        margin:0,
                        display:'flex',
                        flexDirection:'column',
                        gap: 12
                    }}>
                        <li style={{listStyle:'none'}}>
                            <Link to="#" style={{
                                color:'white',
                                textDecoration:'None'
                            }}>
                                <i className="ri-home-3-line" style={{marginRight: 4}}></i>
                                Home</Link>
                        </li>
                        <li style={{listStyle:'none'}}>
                            <Link to="#" style={{
                                color:'white',
                                textDecoration:'None'
                            }}>
                                <i className="ri-ancient-gate-fill" style={{marginRight: 4}}></i>
                                Holidays</Link>
                        </li>
                        <li style={{listStyle:'none'}}>
                            <Link to="#" style={{
                                color:'white',
                                textDecoration:'None'
                            }}>
                                <i className="ri-presentation-line" style={{marginRight: 4}}></i>
                                Teachers</Link>
                        </li>
                        <li style={{listStyle:'none'}}>
                            <Link href="#" style={{
                                color:'white',
                                textDecoration:'None'
                            }}>
                                <i className="ri-contacts-book-2-line" style={{marginRight: 4}}></i>
                                Contact</Link>
                        </li>
                        <li style={{listStyle:'none'}}>
                            <Link to="#" style={{
                                color:'white',
                                textDecoration:'None'
                            }}>
                                <i className="ri-kakao-talk-line" style={{marginRight: 4}}></i>
                                Talk to us</Link>
                        </li>
                    </ul>
                </div> 
                
               <div style={{width:'100%'}}>
                    <h1 style={{
                        color:'#f5f5f5',
                        fontWeight: 500,
                    }}>Social Links</h1>
                    <ul style={{
                        padding:0,
                        margin:0,
                        display:'flex',
                        flexDirection:'column',
                        gap: 12
                    }}>
                        <li style={{listStyle:'none'}}>
                            <Link to="https://www.youtube.com/" style={{
                                color:'white',
                                textDecoration:'None'
                                }}>
                                <i className="ri-youtube-line" style={{marginRight: 4}}></i>
                                Youtube</Link>
                        </li>
                        <li style={{listStyle:'none'}}>
                            <Link to="https://www.facebook.com/" style={{
                                color:'white',
                                textDecoration:'None'
                            }}>
                                <i className="ri-facebook-circle-fill" style={{marginRight: 4}}></i>
                                Facebook</Link>
                        </li>
                        <li style={{listStyle:'none'}}>
                            <Link to="https://www.instagram.com/" style={{
                                color:'white',
                                textDecoration:'None'
                            }}>
                                <i className="ri-instagram-line" style={{marginRight: 4}}></i>
                                Instagram</Link>
                        </li>
                        <li style={{listStyle:'none'}}>
                            <Link to="https://linkedin.com/" style={{
                                color:'white',
                                textDecoration:'None'
                            }}>
                                <i className="ri-linkedin-box-fill" style={{marginRight: 4}}></i>
                                Linkedin</Link>
                        </li>
                        <li style={{listStyle:'none'}}>
                            <Link to="https://twitter.com/?lang=en" style={{
                                color:'white',
                                textDecoration:'None'
                            }}>
                                <i className="ri-twitter-x-line" style={{marginRight: 4}}></i>
                                Twitter</Link>
                        </li>
                    </ul>
                </div>

               <div style={{width:'100%'}}>
                    <h1 style={{
                        color:'#f5f5f5',
                        fontWeight: '500',
                    }}>Enquiry</h1>

                    <form style={{
                        display:'flex',
                        flexDirection:'column',
                        gap: 18
                    }}>
                        <input 
                            name="fullname"
                            placeholder="Fullname"
                            required
                            style={{
                                border:'none',
                                padding:12,
                                borderRadius: 4
                            }}
                        />

                        <input 
                            name="email"
                            placeholder="example@gmail.com"
                            type="email"
                            required
                            style={{
                                border:'none',
                                padding:12,
                                borderRadius: 4
                            }}
                        />

                        <textarea 
                            name="message"
                            placeholder="Message"
                            required
                            style={{
                                border:'none',
                                padding:12,
                                borderRadius: 4
                            }}
                        />
                        
                        <button style={{
                            width:'fit-content',
                            border:'none',
                            background:'orange',
                            color:'white',
                            borderRadius:4,
                            padding: '12px 24px'
                        }}>Submit</button>
                    </form>
                </div> 
        </footer>
    )
}

export default Footer;