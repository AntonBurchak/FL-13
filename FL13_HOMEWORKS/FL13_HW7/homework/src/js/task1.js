// const login = 'user';
const userLogin = prompt('Please, entry your login :)');
const minLoginLength = 4;
const definedTime = 20;
if(userLogin) {
    if(userLogin.length < minLoginLength) {

        alert(`I don't know any users having name length less than ${minLoginLength} symbols`)

    } else {
        if (userLogin === 'User' || userLogin === 'Admin') {

            const userPassword = prompt('Please, entry your password!');

            if(userPassword) {
                if (userLogin === 'User' && userPassword === 'UserPass' || 
                    userLogin === 'Admin' && userPassword === 'AdminPass') {

                    const time = new Date().getHours() < definedTime ? 'day' : 'evening';
                    const h1 = document.createElement('H1');
                    h1.textContent = `Good ${time}, dear ${userLogin}!`;
                    h1.style.fontSize = '60px';
                    h1.style.fontFamily = 'Arial, sans-serif';
                    h1.style.textAlign = 'center';
                    document.body.appendChild(h1);
                } else {
                    alert('Wrong password');
                }

            } else {
                alert('Canceled');
            }
    
        } else {
            alert('I don\'t know you')
        }
    } 

} else {
    alert('Canceled');
}