import React from 'react';
import "../Main.css";

const Main = () => {

  const courses = [
    {
        id: 1,
        title: "Fundamentals of Product Design",
        chapters: 8,
        time: 2,
        color: "yellow"
    },
    {
        id: 2,
        title: "Fundamentals of Product Design",
        chapters: 8,
        time: 2,
        color: "pink"
    },{
        id: 3,
        title: "Fundamentals of Product Design",
        chapters: 8,
        time: 2,
        color: "red"
    },{
        id: 4,
        title: "Fundamentals of Product Design",
        chapters: 8,
        time: 2,
        color: "teal"
    },{
        id: 5,
        title: "Fundamentals of Product Design",
        chapters: 8,
        time: 2,
        color: "orange"
    }
  ]

  return (
    <div>

        {/* courses */}
        <div>
            <div className='coursesHeading'>
                <h1>Courses for You</h1>
                <h3>Listen to byte-sized audio courses from top thinkers</h3>
            </div>
            <div className='playlistSectionMain'>
                {
                    courses.map((el) => {
                        return <div className='playlistSection' key={el.id}>
                           <div className='playlistColors' style={{backgroundColor: el.color}}></div> 
                           <div >
                            <div className='playlistSectionTitle'><h3>{el.title}</h3></div>
                            <div className='playlistSectionDetails'>
                                <p><span></span>{el.chapters} Chapters</p>
                                <p><span></span>{el.time} Hours</p>
                            </div>
                           </div>
                        </div>
                    })
                }
            </div>
        </div>


        {/* aaricles  */}
        <div>

        <div className='coursesHeading'>
                <h1>Article Reads</h1>
                <h3>Listen to audio version of top web Articles</h3>
            </div>
            <div className='playlistSectionMain'>
                {
                    courses.map((el) => {
                        return <div className='playlistSection' key={el.id}>
                           <div className='playlistColors' style={{backgroundColor: el.color}}></div> 
                           <div >
                            <div className='playlistSectionTitle'><h3>{el.title}</h3></div>
                            <div className='playlistSectionDetails'>
                                <p><span></span>{el.chapters} Chapters</p>
                                <p><span></span>{el.time} Hours</p>
                            </div>
                           </div>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Main