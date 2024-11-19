function HeartIconBtn({isFavorite=false}){
    function handleFavorite() {
        isFavorite= !isFavorite;
        alert(isFavorite?"좋아요":"모르겠어요");
    }
    return(
        <button className='btn' onClick={handleFavorite}>
            <img className='btn_img' src={isFavorite?'./img/heart-fill-icon.svg':'./img/heart-icon.svg'} />

        </button>
    )
}
  
function Courseitem08({title,description,image,isFavorite}) {
	return (
		<article className="course">
			<img className="course__img" src={image} alt={image} style={{ width: "100px", height: "100px" }} />
			<div className="course__body">
				<div className="course__title">{title}</div>
				<div className="course__description">{description} </div>
			</div>
			<div className='course_icons'>
				<HeartIconBtn isFavorite={isFavorite}/>
			</div>
		</article>


	);
}

export default Courseitem08;