import { Link, useLocation } from "react-router-dom";
import styles from './NavigationBar.module.css'
import { navsList } from './data'

type ChildType = {
  id: number,
  label: string,
  url: string
}

type NaviItemType = {
  id: number,
  label: string,
  url: string,
  childs?: ChildType[] //object array
}
function NaviItem({item}: {item: NaviItemType}){
  const location = useLocation();
  console.log('item.url',item.url);
  const hash_child = item.childs && item.childs.length > 0 ? 'has_child' : '';
  return (
    <li className={hash_child}>
      <Link className={location.pathname === item.url ? styles.current : ''} to={item.url}>{item.label}</Link>
      {/* <a href={item.url}>{item.label}</a> */}
      {
        item.childs && item.childs.length > 0 ? (
        <div className={styles.nav_child}>
            {
              item.childs.map((child) => {
                return (
                  // <a href={child.url}>{child.label}</a>
                  <Link key={child.id} to={child.url}>{child.label}</Link>
                )
              })
            }
        </div>
        )
        : null
      }
      
    </li>
  )
}

const NavigationBar = () => {
  return (
    <nav className={styles.main_navigation}>
            <ul>
             
              {
                navsList.map((item)=> <NaviItem key={item.id} item={item} />)
              }
            </ul>
          </nav>
  )
}

export default NavigationBar