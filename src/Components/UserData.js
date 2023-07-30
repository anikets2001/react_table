import React from 'react'

const UserData = ({users}) => {
	return (
		<React.Fragment>
			{
				users.map((currentUser)=>{
					const {id, name, email} = currentUser;
					const {city,street,zipcode} = currentUser.address;

					return(
						<tr key={id}>
							<td>{id}</td>
							<td>{name}</td>
							<td>{email}</td>
							<td>{city}, {" "} {street}, {" "} {zipcode}</td>
						</tr>
					)
				})
			}
		</React.Fragment>
	)
}

export default UserData
