const NotFound = () => {
    return(
        <div style={{
            background: '#f5f5f5',
            height: '100vh',
            display:'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <img src="./images/not-found.svg" width="720" />
            <h1 style={{
                fontSize: 18,
                color: '#6C63FF'
            }}>404 | Not found</h1>
        </div>
    )
}

export default NotFound