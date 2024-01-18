import React from 'react';
import "../Footer.css";

const Footer = () => {

 const person = [
    {
        id: 1,
        name: "Shreyas Doshi",
        category: "Product",
        desc: "Fundamental of Product Design",
        url: "https://iconape.com/wp-content/png_logo_vector/avatar.png",
        color: "yellow"
    },
    {
        id: 2,
        name: "Shreyas Doshi",
        category: "Product",
        desc: "Fundamental of Product Design",
        url: "https://iconape.com/wp-content/png_logo_vector/avatar.png",
        color: "orange"
    },
    {
        id: 3,
        name: "Shreyas Doshi",
        category: "Product",
        desc: "Fundamental of Product Design",
        url: "https://iconape.com/wp-content/png_logo_vector/avatar.png",
        color: "teal"
    },
    {
        id: 4,
        name: "Shreyas Doshi",
        category: "Product",
        desc: "Fundamental of Product Design",
        url: "https://iconape.com/wp-content/png_logo_vector/avatar.png",
        color: "pink"
    },
    {
        id: 5,
        name: "Shreyas Doshi",
        category: "Product",
        desc: "Fundamental of Product Design",
        url: "https://iconape.com/wp-content/png_logo_vector/avatar.png",
        color: "brown"
    }
 ]


  return (
    <div>
        <div className='tweetHeading'>
            <h1>Tweet Shorts</h1>
            <h3>Listen to audio versions of tweet threads</h3>
        </div>
        <div className='tweetSectionMain'>
        {
                    person.map((el) => {
                        return <div className='tweetSection' key={el.id}>
                           <div className='tweetColors'>
                            <img src={el.url} alt="avatar" className='tweetSectionImg'/>
                            </div> 
                            <div className='tweetSectionDetailsMain'>

                            <div className='tweetSectionTitle'><button>{el.category}</button></div>
                            <div className='tweetSectionDetails'>
                                <p>{el.desc} </p>
                                <p>{el.name}</p>
                            </div>
                            </div>
                        </div>
                    })
                }
        </div>
    </div>
  )
}

export default Footer