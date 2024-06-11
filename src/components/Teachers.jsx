import Nav from './Nav'
import Footer from './Footer'

const teachers = [
    {
        image: './teachers/a.jpg',
        name: 'Sam Curran',
        qual: 'MCA (Indian University)'
    },
    {
        image: './teachers/b.jpg',
        name: 'Tom Cohler',
        qual: 'BCA (Indian University)'
    },
    {
        image: './teachers/c.jpg',
        name: 'Sachin Dias',
        qual: 'M.Tech (Indian University)'
    },
    {
        image: './teachers/d.jpg',
        name: 'Paul Stirling',
        qual: 'MCA (Indian University)'
    },
    {
        image: './teachers/e.jpg',
        name: 'Tahila McGrath',
        qual: 'B.Tech (Indian University)'
    },
    {
        image: './teachers/f.jpg',
        name: 'Luke Wood',
        qual: 'BCA (Indian University)'
    },
    {
        image: './teachers/g.jpg',
        name: 'Cameron Green',
        qual: 'BSc (Indian University)'
    },
    {
        image: './teachers/h.jpg',
        name: 'Blessing Muzarbani',
        qual: 'Pharmacy (Indian University)'
    },
    {
        image: './teachers/i.jpg',
        name: 'Will Young',
        qual: 'Phd (Indian University)'
    },
    {
        image: './teachers/j.jpg',
        name: 'Craig Young',
        qual: 'BCA (Indian University)'
    },
    {
        image: './teachers/k.jpg',
        name: 'Tom Curran',
        qual: 'Masters (Indian University)'
    },
    {
        image: './teachers/l.jpg',
        name: 'Mark Adair',
        qual: 'Law (Indian University)'
    },
]
const Teachers = () =>{
    return(
        <div>
            <Nav />
            <div>
                <header style={{
                    height:'280px',
                    backgroundImage: 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(100,43,115,1) 0%, rgba(4,0,4,1) 90% )',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',

                }}>
                    <h1 style={{
                        fontSize: 60,
                        color:'white',
                    }}>
                        <i className="ri-presentation-line" style={{marginRight: 16}}></i>
                        Teachers</h1>
                </header>

                <section style={{
                    width:'80%',
                    margin:'0 auto',
                    padding:'80px 0',
                    display:'flex',
                    flexWrap: 'wrap',
                    columnGap:'5%',
                    rowGap:48
                }}>
                  {
                    teachers.map((item,index)=>{
                        return(
                            <div style={{width: '20%'}} key={index}>
                                <img src={item.image} width="100%" alt="photo"></img>
                                <h2 style={{padding:0, marginBottom: 4}}>{item.name}</h2>
                                <p style={{padding:0, margin: 0,color:'gray'}}>{item.qual}</p>
                            </div>
                        )
                    })
                  }  
                </section>
            </div>
            <Footer />
        </div>
    )
}
export default Teachers