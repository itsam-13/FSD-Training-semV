
const Card = ({data}) => {
    return (
        <div>
            <div style={{ height: '400px', width: '250px', border: '2px white solid', padding: '5px', margin: '2px', backgroundColor: '#6b4850',borderRadius: '8px' }}>
                <img src={data.pic} height={200} width={200} style={{borderRadius:'50%'}} ></img>
                <h6 style={{color:'#eaf4f4' , fontFamily:'monospace'}}> {data.rating}</h6>
                <h4 style={{color:'#eaf4f4' , fontFamily:'monospace'}} > {data.name}</h4>
                
            </div>
        </div>
    )
}

export default Card
