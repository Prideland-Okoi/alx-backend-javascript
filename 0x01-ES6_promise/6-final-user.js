// Accepts three args (handle multiple promises)
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
	const signup = signUpUser(firstName, lastName);
	const upload = uploadPhoto(fileName);

	return Promise.allSettled([signup, upload]).then((vals) =>{
		const resArray = [];
		vals.forEach((val) => {
			if (val.status === 'fulfilled') {
				resArray.push({status: val.status, value: val.value});
			}else{
				resArray.push({
					status: val.status,
					value: `Error: ${val.reason.message}`,
				});
			}
		});
		return resArray;
	});
}
