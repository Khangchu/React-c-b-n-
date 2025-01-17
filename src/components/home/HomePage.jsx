import videoHomePage from '../../assets/video-homepage.mp4'
const HomePage = () => {
  return (
    <>
      <div className="homepage-container">
        <video autoPlay muted loop className='videoHomePage'>
          <source src={videoHomePage} type="video/mp4" />
        </video>
        <div className="homepage-content">
          <div className='title-1'>There&apos; a better way to ask</div>
          <div className='title-2'>You don&apos;t want to make a boring form.
                And your audience won&apos;t answer one.
                Creatra typeform instead-and make everyone happy.
          </div>
          <div className='title-3'>
            <button>Get&apos;s started. It&apos;s free</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default HomePage