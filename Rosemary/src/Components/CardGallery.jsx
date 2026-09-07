import Card from "./Card"

const CardGallery = () => {

    const gallery = [
        {
            pic: 'https://m.media-amazon.com/images/M/MV5BOGQwZTQ0YzgtZjk5Mi00NTg1LTg0MmMtZmNjNGUwYjhjNWJhXkEyXkFqcGc@._V1_.jpg',
            rating: 3.9 ,
            name: 'Toxic'
        },
        {
            pic: 'https://m.media-amazon.com/images/M/MV5BNzdkNjAxNWMtNWY3My00NTI1LTg2YWQtOGI3MDA0NzdhMjEyXkEyXkFqcGc@._V1_QL75_UY414_CR18,0,280,414_.jpg',
            rating:9.3 ,
            name: 'Hanuman Ansh'
        },
        {
            pic: 'https://m.media-amazon.com/images/M/MV5BYzc1NWUwMDgtNGZlMS00ZmYzLWIzMzktNmMxMmY1MTUzNWExXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg',
            rating:6.5 ,
            name: 'Awarapan 2'
        },
        {
            pic: 'https://m.media-amazon.com/images/M/MV5BZWExZmZmNGYtNWVkYy00MzlkLWE2NGYtN2UwYzU0MDE0M2YyXkEyXkFqcGc@._V1_QL75_UX280_CR0,3,280,414_.jpg',
            rating: 8.0 ,
            name: 'SpiderMan'
        },
    ]


    return (
        <div style={{display:'flex'}}>
            {
                gallery.map((ele) => (
                    <div>
                        <Card data={ele} />
                    </div>
                ))
            }
        </div>
    )
}

export default CardGallery
