function blink()
{
    let body = document.querySelector('#alert');
    if (body.style.visibility === 'hidden')
    {
        body.style.visibility = 'visible';
    }
    else
    {
        body.style.visibility = 'hidden';
    }
}
// Blink every 1000ms
window.setInterval(blink, 1000);