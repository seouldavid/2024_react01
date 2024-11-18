import Courseitem from "./Courseitem";


function CourseListCard() {
    return (
        <div className="card">
        <div className="card__header">강의 목록</div>
        <div className="card__body">
          <div className="courses">

            <div className='App'>
              <Courseitem image="./img/coffee-blue.jpg" title="입문자를 위한 , HTML&CSS 웹 개발 입문" description="웹 개발에 필요한 기본 지식을 배웁니다." />
              <Courseitem image="./img/img_girl.jpg" title="초급자를 위한, javascript 기초" description="javascript의 기본 지식을 배웁니다." />
              <Courseitem image="./img/workplace.jpg" title="중급자를 위한 , react 기초" description="React 웹 개발과정을 배웁니다.." /> 
            </div>
          </div>
        </div>
      </div>
    );
}

export default CourseListCard;