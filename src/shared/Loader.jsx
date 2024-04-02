import './styles/Loader.css'
const Loader = () => {
  return (
    <div className='loading'>
      <div className="lds-dual-ring">
        <img className='loading__logo' src="/img/icon-p.png" alt="" />
      </div>
    </div>
  )
}

export default Loader