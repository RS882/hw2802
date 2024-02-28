const root = document.querySelector('.root');
const btn = document.querySelector('.btn');





const createUserCart=(user)=>{
	console.log(user);

	const wrapper = document.createElement("div");
	const imgWrapperNode = document.createElement("div");
	const imgNode = document.createElement("img");
	const nameNode=document.createElement("p");
	const emailNode=document.createElement("p");
	const contryNode=document.createElement("p");

	imgNode.src=user.picture.large;
	imgNode.alt='user imange';
	nameNode.innerText=`${user.name.title} ${user.name.first} ${user.name.last}`;
	//emailNode.innerText=user.email;
	contryNode.innerText=`${user.location.city},  ${user.location.country}`;
wrapper.classList.add('cart');
imgWrapperNode.classList.add('img-box');




	imgWrapperNode.append(imgNode);

	wrapper.append(imgWrapperNode);
	wrapper.append(nameNode);
	wrapper.append(emailNode);
	wrapper.append(contryNode);

	return wrapper;
}

const getUser =async ()=>{
	try {
		
	const res= await fetch('https://randomuser.me/api/');
	const data =await res.json();
		root.append(createUserCart( data.results[0]))
	} catch (error) {
		return null;
	}
}

btn.addEventListener('click',(e)=>{
	e.preventDefault();
	getUser()

})

// getUser()





// const res=cell
// : 
// "081-559-5752"
// dob
// : 
// {date: '1976-02-24T06:47:54.747Z', age: 48}
// email
// : 
// "eliza.johnson@example.com"
// gender
// : 
// "female"
// id
// : 
// {name: 'PPS', value: '9381453T'}
// location
// : 
// {street: {…}, city: 'Roscommon', state: 'Sligo', country: 'Ireland', postcode: 60907, …}
// login
// : 
// {uuid: '57901acc-97ed-4d6f-917e-fa84b8575f8a', username: 'tinyzebra669', password: 'ingrid', salt: 'D523y8eh', md5: 'e2189b9b9e12cf83a385306ba2996604', …}
// name
// : 
// {title: 'Mrs', first: 'Eliza', last: 'Johnson'}
// nat
// : 
// "IE"
// phone
// : 
// "041-343-9568"
// picture
// : 
// {large: 'https://randomuser.me/api/portraits/women/70.jpg', medium: 'https://randomuser.me/api/portraits/med/women/70.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/women/70.jpg'}
// registered
// : 
// {date: '2007-07-24T16:47:58.111Z', age: 16}