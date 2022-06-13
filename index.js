document.cookie = "dangerousToken=youShouldNotGetThis;path=/";
document.querySelector('#form').addEventListener('submit', (event) => {
    event.preventDefault();
    document.querySelector('#text-output').innerHTML = document.querySelector('#text-input').value;
});
