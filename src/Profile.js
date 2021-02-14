import dbContext from './Ctx.js'
import{ useContext} from 'react'
export default function Profile(props)
{

    const db = useContext(dbContext)
    console.log(db);

  return <div><ul>
  <li>Name</li>
  <li>Pofpof</li>
  <li>Milk</li>
  </ul></div>
}

