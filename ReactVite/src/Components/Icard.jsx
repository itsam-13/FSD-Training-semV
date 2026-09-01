// import pic from '../Images/lhon-karwan-b1FrQVPyIhQ-unsplash.jpg'

const Icard = ({data}) => {

    return (
        <div >
            <div style={{ height: '400px', width: '250px', border: '2px white solid', padding: '5px', margin: '2px', backgroundColor: '#6b4850',borderRadius: '8px' }}>
                <img src={data.pic} height={200} width={200} style={{borderRadius:'50%'}} ></img>
                <h2 style={{color:'#eaf4f4' , fontFamily:'monospace'}}>Name: {data.name}</h2>
                <h2 style={{color:'#eaf4f4' , fontFamily:'monospace'}} >Roll No. : {data.rollno}</h2>
                <h2 style={{color:'#eaf4f4' , fontFamily:'monospace'}}>Branch: {data.branch}</h2>
                <h2 style={{color:'#eaf4f4' , fontFamily:'monospace'}}>College: {data.clg}</h2>
                
            </div>
        </div>
    )
}

export default Icard