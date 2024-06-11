import { useState } from 'react'
import Swal from 'sweetalert2'
import Nav from './Nav'
import Footer from './Footer'
const Contact = () =>{
    const [fullname, setFullname] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')

    const contactUs = (e) =>{
        e.preventDefault();
        Swal.fire({
            title: 'Success',
            text: 'Thank You! We will reach you soon',
            icon: 'success'
        })
    }
    return(
        
        <div>
            <Nav />
            <div style={{
                display: 'flex',
                padding: 64,
                gap: 24
            }}>
                <img 
                    src="./images/contact-us.svg"
                    width='50%'
                />
                <div style={{
                    width:'50%'
                }}>
                    <form 
                        onSubmit={contactUs}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 17
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 8
                        }}>
                            <label style={{
                                fontSize: 18,
                                fontWeight: 500
                            }}>Full name</label>
                            <input 
                                onChange={(e)=>{
                                    setFullname(e.target.value)
                                }}
                                required
                                type='text'
                                name='fullname'
                                placeholder='Enter name here'
                                style={{
                                    border: '1px solid #ccc',
                                    borderRadius: 4,
                                    padding: 14
                                }}
                            />
                        </div>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 8
                        }}>
                            <label style={{
                                fontSize: 18,
                                fontWeight: 500
                            }}>Email</label>
                            <input 
                                onChange={(e)=>setEmail(e.target.value)}
                                required
                                type='email'
                                name='email'
                                placeholder='Enter email here'
                                style={{
                                    border: '1px solid #ccc',
                                    borderRadius: 4,
                                    padding: 14
                                }}
                            />
                        </div>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 8
                        }}>
                            <label style={{
                                fontSize: 18,
                                fontWeight: 500
                            }}>Message</label>
                            <textarea 
                                onChange={(e)=>setMessage(e.target.value)}
                                required
                                type='text'
                                name='message'
                                placeholder='Enter message here'
                                rows={4}
                                style={{
                                    border: '1px solid #ccc',
                                    borderRadius: 4,
                                    padding: 14
                                }}
                            />
                        </div>

                        <button style={{
                            border: 'none',
                            width: 'fit-content',
                            padding: '14px 32px',
                            borderRadius: 4,
                            background: '#6C63FF',
                            color: 'white',
                            fontWeight: 600
                        }}>Submit</button>
                    </form>
                </div>
            </div>
           <Footer/> 
        </div>
    )
}

export default Contact