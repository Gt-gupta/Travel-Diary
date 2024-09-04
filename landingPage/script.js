document.getElementById('postButton').addEventListener('click' , function(){
    const destination = document.getElementById('de').value;
    const date = document.getElementById('dat').value;
    const days = document.getElementById('da').value;
    const people = document.getElementById('pe').value;

    alert(`Your post has been submitted successfully! : destination = ${destination}`);

    document.getElementById('de').value = '';
    document.getElementById('dat').value = '';
    document.getElementById('da').value = '';
    document.getElementById('pe').value = '';

});