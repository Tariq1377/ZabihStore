const Card=(id,title, price, description, categore, image)=>{

return(
<div className="card">
  <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <h5>${price}</h5>
  </div>
</div>

    );

    
}

export default Card;