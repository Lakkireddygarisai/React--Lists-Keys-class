import UserProfile from './components/UserProfile'
import './App.css'

const userDetailsList = [
  {
    UniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Easter Howard',
    role: 'software developer',
  },
  {
    UniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'software developer',
  },
  {
    UniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'software developer',
  },
  {
    UniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'software developer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsList.map(eachitem => (
        <UserProfile userDetails={eachitem} key={eachitem.UniqueNo} />
      ))}
    </ul>
  </div>
)

export default App
