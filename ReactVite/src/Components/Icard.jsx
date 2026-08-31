import pic from '../Images/licensed-image.jpg'

const Icard = () => {

    let nam = " Han So-Hee"
    let RollNo = 13;
    let Branch = "CSE"
    let clg = "IIT LalKuan"


    return (
        <div>
            <div style={{ height: '400px', width: '500px', border: '2px white solid', padding: '5px', margin: '2px', backgroundColor: '#6b9080',borderRadius: '8px' }}>
                <img src={pic} height={200} width={200} style={{borderRadius:'50%'}} ></img>
                <h2 style={{color:'#eaf4f4' , fontFamily:'monospace'}}>Name: {nam}</h2>
                <h2 style={{color:'#eaf4f4' , fontFamily:'monospace'}} >Roll No. : {RollNo}</h2>
                <h2 style={{color:'#eaf4f4' , fontFamily:'monospace'}}>Branch: {Branch}</h2>
                <h2 style={{color:'#eaf4f4' , fontFamily:'monospace'}}>College: {clg}</h2>
                
            </div>
        </div>
    )
}

export default Icard
