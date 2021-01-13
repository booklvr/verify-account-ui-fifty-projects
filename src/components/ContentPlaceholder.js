import React, { useEffect, useState } from 'react'

const ContentPlaceholder = () => {
  const [loaded, setLoaded] = useState(false)
  const [loadedDetails, setLoadedDetails] = useState({})

  const details = {
    header_img:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80',
    title: 'this is a title',
    excerpt: 'this is an excerpt, it is a little longer than the title.',
    profile_img: 'https://randomuser.me/api/portraits/men/45.jpg',
    name: 'John Doe',
    date: 'Oct 08, 2020',
  }

  useEffect(() => {
    setTimeout(() => {
      console.log('loadedDetails', loadedDetails)
      setLoaded(true)
      setLoadedDetails(details)
      console.log('loadedDetails', loadedDetails)
    }, 1000)
  }, [])

  return (
    <div className='card'>
      <div className='card-header animated-bg' id='header'>
        <img
          src={loadedDetails.header_img && loadedDetails.header_img}
          alt=''
        />
      </div>

      <div className='card-content'>
        <h3
          className={
            loaded ? 'card-title' : 'card-title animated-bg animated-bg-text'
          }
        >
          {loadedDetails.title && loadedDetails.title}&nbsp;
        </h3>
        <p className='card-excerpt' id='excerpt'>
          {loaded && loadedDetails.excerpt}&nbsp;
          <span className={loaded ? null : 'animated-bg animated-bg-text'}>
            &nbsp;
          </span>
          <span className={loaded ? null : 'animated-bg animated-bg-text'}>
            &nbsp;
          </span>
          <span className={loaded ? null : 'animated-bg animated-bg-text'}>
            &nbsp;
          </span>
        </p>
        <div className='author'>
          <div className={loaded ? null : 'animated-bg animated-bg-text'}>
            {loaded && <img src={loadedDetails.profile_img}></img>}&nbsp;
          </div>
          <div className='author-info'>
            <strong className={loaded ? null : 'animated-bg animated-bg-text'}>
              {loaded && loadedDetails.name}&nbsp;
            </strong>
            <small className={loaded ? null : 'animated-bg animated-bg-text'}>
              {loaded && loadedDetails.date}&nbsp;
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentPlaceholder
