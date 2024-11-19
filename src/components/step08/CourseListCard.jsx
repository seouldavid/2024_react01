import Courseitem08 from "./CourseItem08";

function CourseListCard({items}) {
    const [course1, course2, course3] = items;
    return (
        <div className="card">
        <div className="card__header">강의 목록</div>
        <div className="card__body">
          <div className="courses">
            <div className='App'>
              <Courseitem08 {...course1} />
              <Courseitem08 {...course2} />
              <Courseitem08 {...course3} /> 
            </div>
          </div>
        </div>
        
      </div>
    );
}

export default CourseListCard;