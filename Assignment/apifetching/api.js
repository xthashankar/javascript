const obj =document.getElementById('api');
fetch ('https://mock-io.herokuapp.com/users')
.then(function(response)
{
    return response.json();
})
//console.log(obj);
.then(function(dataofuser)
{
    dataofuser.forEach(function(users)
    {
        const detail =document.createElement('div');
        detail.style.width="20%";
        detail.style.height="100px";
        detail.style.backgroundColor='red';
        detail.style.display="flex";
        detail.style.flexWrap="wrap";
        detail.style.margin="10px";
        detail.style.padding="10px";
        detail.style.textAlign="center";


        let userImage = document.createElement('img'); //profile img
        userImage.src = users.profileImage;
        userImage .style.width="50px";
        userImage.style.height="50px";
        userImage.style.borderRadius="50%";
        userImage.style.padding="10px";

        const box=document.createElement('div');
        box.style.width="100px";
        box.style.color="yellow";

        const userid=document.createElement('p')
        userid.innerHTML=users.id;

        const Name= document.createElement('h5');
        Name.innerHTML=users.firstName +' '+ users.lastName;

        const mobile= document.createElement('h5');
        mobile.innerHTML= users.phone;

        detail.appendChild(userImage);
        detail.appendChild(box);
        box.appendChild(userid);
        box.appendChild(Name);
        box.appendChild(mobile);
        obj.appendChild(detail);
        console.log(users);
    });
})