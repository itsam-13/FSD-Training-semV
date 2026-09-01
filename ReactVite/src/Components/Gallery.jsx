import Icard from "./Icard"

const Gallery = () => {

    const student = [{
        pic: 'https://w0.peakpx.com/wallpaper/368/441/HD-wallpaper-cute-anime-girl-anime-cat-girl-anime-girl-cartoon-cat-girl-cute-anime.jpg',
        name: 'Hakuya',
        rollno: 52,
        branch: 'aiml',
        clg: 'iit lalkuan',
    },
    {
        pic: 'https://w0.peakpx.com/wallpaper/368/441/HD-wallpaper-cute-anime-girl-anime-cat-girl-anime-girl-cartoon-cat-girl-cute-anime.jpg',
        name: 'Hakuya',
        rollno: 52,
        branch: 'aiml',
        clg: 'iit lalkuan',
    },
    {
        pic: 'https://w0.peakpx.com/wallpaper/368/441/HD-wallpaper-cute-anime-girl-anime-cat-girl-anime-girl-cartoon-cat-girl-cute-anime.jpg',
        name: 'Hakuya',
        rollno: 52,
        branch: 'aiml',
        clg: 'iit lalkuan',
    },
    {
        pic: 'https://w0.peakpx.com/wallpaper/1023/395/HD-wallpaper-captian-america-avengers-endgame-marvel-movie.jpg',
        name: 'Hakuya',
        rollno: 52,
        branch: 'aiml',
        clg: 'iit lalkuan',
    },
]
    

    return (
        <div style={{display:"flex"}}>

            {/* <Icard pic = 'https://w0.peakpx.com/wallpaper/368/441/HD-wallpaper-cute-anime-girl-anime-cat-girl-anime-girl-cartoon-cat-girl-cute-anime.jpg' name="han see-hun" rollno='69' branch='CSE' clg = 'iit lalkuan' />
            <Icard pic = 'https://w0.peakpx.com/wallpaper/993/207/HD-wallpaper-tony-stark-iron-man-iron-man-tony-stark.jpg' name="Tony" rollno='67' branch='AIML' clg = 'iit lalkuan' />
            <Icard pic = 'https://w0.peakpx.com/wallpaper/108/899/HD-wallpaper-thor-thor-superheroes-deviantart.jpg' name="Thor" rollno='6' branch='ECE' clg = 'iit lalkuan' />
            <Icard pic = 'https://w0.peakpx.com/wallpaper/1023/395/HD-wallpaper-captian-america-avengers-endgame-marvel-movie.jpg' name="Steve" rollno='90' branch='BCA' clg = 'iit lalkuan' /> */}

            {/* <Icard data={student[0]}/>
            <Icard data={student[1]}/>
            <Icard data={student[2]}/>
            <Icard data={student[3]}/> */}

                {
                    student.map((ele)=>(
                        <div>
                            <Icard data={ele}/>
                        </div>
                    ))
                }

            
        </div>
    )
}

export default Gallery
