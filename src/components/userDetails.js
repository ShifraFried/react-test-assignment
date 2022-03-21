import React, { useEffect, useState } from 'react';
import { userDetailsApi } from "../api/userApi"
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';
import ".././style.css"

const UserDetails = () => {
  const [uDetail, setUDetail] = useState('')
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    userDetailsApi().then((data) => {
      setUDetail(data)
    })
      .catch(err => { })
  }, []);

  const filterByName = () => {
    uDetail.sort((u1, u2) => u1.name > u2.name ? 1 : -1);
    setFlag(!flag);
  }

  const filterByEmail = () => {
    uDetail.sort((u1, u2) => u1.email > u2.email ? 1 : -1);
    setFlag(!flag);
  }

  const history = useHistory();

  const userPostRoute = (id) => {
    history.push(`/userPosts/${id}`);
  }

  return <div className="div">
    <h1>User Details</h1>
    <table>
      <tr>
        <th>name</th>
        <th>email</th>
        <th>company name</th>
        <th>choose me</th>
      </tr>
      {
        uDetail && uDetail.map(user => <tr key={user.id}>
          <td>
            {user.name}
          </td>
          <td>
            {user.email}
          </td>
          <td>
            {user.company.name}
          </td>
          <td>
            <input type="checkbox" onChange={() => {
              { userPostRoute(user.id) }
            }
            }>
            </input>
          </td>
        </tr>
        )
      }
    </table>
    <br></br><br></br>

    <Button variant="outlined" color="secondary" onClick={() => filterByName()}>filter by name</Button><br></br>
    <br></br><br></br>
    <Button variant="outlined" color="secondary" onClick={() => filterByEmail()}>filter by email</Button><br></br>

  </div>

}

export default UserDetails;
