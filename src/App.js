import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Courseitem from './components/course/Courseitem';
// import CourseListCard from './components/course/CourseListCard';
import Library from './components/step01/Library';
import Profile from './components/step02/Profile';
import CourseListCard from './components/step04/CourseListCard';
import PackagingList from './components/step05/PackagingList';
import TextList from './components/step06/TextList';
import TextList2 from './components/step06/TextList2';
import TextList3 from './components/step06/TextList3';

function App() {
  const items = [
    {
      title: '입문자를 위한, HTML&CSS 웹 개발 입문',
      description: '웹 개발에 필요한 기본 지식을 배웁니다.',
      image: './img/coffee-blue.jpg',
      isFavorite : true
    },
    {
      title: '입문자를 위한, ES6+ 최신 자바스크립트 입문',
      description: '쉽고! 알찬! 내용을 준비했습니다.',
      image: './img/img_girl.jpg',
      isFavorite : false
    },
    {
      title: '포트폴리오 사이트 만들고 배포까지!',
      description: '포트폴리오 사이트를 만들고 배포해 보세요.',
      image: './img/workplace.jpg',
      isFavorite : true
    }
  ];
  // 조건부 렌더링 : if, &&, 삼항연산자 (조건식? 참:거짓)
  const ischk = false;
  return (
    <div className='App'>
      {ischk ? <h2>Hello, react</h2>: <CourseListCard items={items}/>}
      <hr/>
      <PackagingList/>
      <hr/>
      <TextList/>
      <hr/>
      <TextList2/>
      <hr/>
      <TextList3/>
    </div>
  );
}

export default App;
