// Write your code here
import './index.css'

const TabItem = props => {
  const {each, onClickTabItem, isActive} = props
  const res = isActive ? 'tab-active-border' : ''
  const {displayText, tabId} = each
  const onClickTabBtn = () => {
    onClickTabItem(tabId)
  }

  return (
    <li className="tab-li-con">
      <button type="button" onClick={onClickTabBtn} className={`button ${res}`}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
