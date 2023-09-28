import React, { Component } from 'react'
export default function Newsitem(props) {
    return (
        <div className="card" style={{ width: '20rem',margin:'10px 5px 5px 10px'}}>
       <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'85%' ,zIndex:'1'}}>{props.source}</span>
            <img src={!props.img?"https://media.istockphoto.com/id/1158786915/photo/indian-news-paper.jpg?s=1024x1024&w=is&k=20&c=o3VLA0Y9bm61CTxvv6j619T1uHL_hsz7vOymWHIkp44=":props.img} className="card-img-top" style={{ height: '160px'}} />
            <div className="card-body">
                <h5 className="card-title" style={{ height: '50px' }}>{props.title}.</h5>
                <p className="card-text" >{props.desc}
                </p>
                <p><small className='text-danger'>by <b>{!props.author?"Unknown":props.author}</b> on {props.date}</small></p>
                <a href={props.urlnew} target="_blank" className={`btn btn-secondary`} style={{ float: 'left', color:'white', borderRadius:"2rem" }}>Read More</a>
            </div>
        </div>
    );
}
{/* <p className={classes.details}>
  {item.description.length > 250 ?
    `${item.description.substring(0, 250)}...` : item.description
  }
</p> */}