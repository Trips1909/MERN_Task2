


document.querySelector("#logInButton").addEventListener('click', function(){
    let user = document.querySelector("#userName").value;
    let pass = document.querySelector("#password").value;
    document.querySelector("#password").value = "";
    document.querySelector("#userName").value = "";
    alert(`Logging in with username: ${user}, password: ${pass}`);
});