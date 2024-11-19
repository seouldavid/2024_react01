import React from 'react';
import Courseitem from './CourseItem';

function CourseListCard({items}) {
    const [course1, course2, course3] = items;
    return (
        <div className="card">
        <div className="card__header">강의 목록</div>
        <div className="card__body">
          <div className="courses">
            <div className='App'>
              <Courseitem {...course1} />
              <Courseitem {...course2}/>
              <Courseitem {...course3}/> 
            </div>
          </div>
        </div>
      </div>
    );
}

export default CourseListCard;