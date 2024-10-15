console.log('Hello World!')

let hasDownloadedResume = false;
let date1 = new Date ("10/14/2024");
let date2 = new Date ("12/26/2024");

const button = document.getElementById('button');
if (button)
{
    button.addEventListener('click', function() {
        alert('Your resume downloaded successfully!');
        hasDownloadedResume = true
    });
}
        
function showGreeting(name)
{
    return("Hello, my name is " + name +"! Welcome to my portfolio!")
}



function daysUntilDeadline(date1, date2) {
    
    let Difference_In_Time = date2.getTime() - date1.getTime();
    let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));

    return `Days until deadline: ${Difference_In_Days}`;
}

window.onload = function() {
  
    let date1 = new Date("10/14/2024");
    let date2 = new Date("12/26/2024"); 

    const showDeadline = daysUntilDeadline(date1, date2);
    
    document.getElementById("deadline").innerText = showDeadline;
    const name = "Evelyn"
    const showMessage = showGreeting(name);
    
    document.getElementById("greeting").innerText = showMessage;
};


