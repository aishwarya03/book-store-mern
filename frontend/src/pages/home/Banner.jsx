import React from 'react'
import BannerImg from '../../assets/banner.png'

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>   
      <div className='md:w-1/2 w-full flex items-center md:justify-end'>
        <img src={BannerImg} alt='' />
      </div> 
      <div className='md:w-1/2 w-full'>
        <h1 className='md:text-5xl text-2xl font-medium mb-7 '>New Releases This Week</h1>
        <p className='mb-10 '>Discover the latest literary gems with our new releases! Dive into a world of captivating stories, intriguing mysteries, and thought-provoking nonfiction. Whether you're a fan of contemporary fiction, historical novels, fantasy adventures, or heartwarming romances, our collection has something for everyone. Explore new titles from your favorite authors and uncover hidden gems from emerging voices. Stay ahead in the literary world with our constantly updated selection of the freshest books of the year!</p>
        <button className='btn-primary'>Subscribe</button>
      </div>
    </div>
    
  )
}

export default Banner