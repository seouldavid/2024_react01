import React from 'react';

function Courseitem(props) {
	// 방법1
	// const title = '입문자를 위한 HTML&CSS 웹 개발 입문';
	// const description = '웹개발에 필요한 기본 지식을 배웁니다.';
	// const image = './img/coffee-blue/jpg';
	// const alt = '강의 이미지';

	// 방법2
	// const course = {
	// 	title: '입문자를 위한 HTML&CSS 웹 개발 입문',
	// 	description: '웹개발에 필요한 기본 지식을 배웁니다.',
	// 	image: './img/coffee-blue/jpg',
	// 	alt: '강의 이미지'
	// }

	return (
		//방법2
		// <article className="course">
		// 	<img className="course__img" src={course.image} alt={course.alt} style={{ width: "100px", height: "100px" }} />
		// 	<div className="course__body">
		// 		<div className="course__title">{course.title}</div>
		// 		<div className="course__description">{course.description} </div>
		// 	</div>
		// </article>

		<article className="course">
			<img className="course__img" src={props.image} alt={props.alt} style={{ width: "100px", height: "100px" }} />
			<div className="course__body">
				<div className="course__title">{props.title}</div>
				<div className="course__description">{props.description} </div>
			</div>
		</article>


	);
}

export default Courseitem;