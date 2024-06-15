// Write your code here
import './index.css'

const AppItem = props => {
  const {each} = props
  const {appName, imageUrl} = each
  return (
    <li className="app-li-con">
      <img className="app-img" src={imageUrl} alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
