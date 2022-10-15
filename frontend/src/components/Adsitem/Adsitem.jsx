import React from 'react'

const Adsitem = (props) => {
    const {name ,imagepath , desc,url, action, headline }= props
    const imgurl= 'https://picsum.photos/200/300'
    console.log(imagepath)
  return (
    <>
    <div className="card" style={{width:"18rem",}}>
    <h5 className="card-title">{name}</h5>
  <img src={imgurl} className="card-img-top" style={{ height:"10rem"}} alt="..."/>
  <div className="card-body">
        <h5 className='text-danger'>{headline}</h5>
        <p className="card-text">{desc}</p>
    <a href={`https://${url}`} className="btn btn-sm btn-danger">{action?action : "Read more" }</a>
  </div>
</div>
    </>
    


  )
}

export default Adsitem