var today = new Date();
var birthDate = new Date("5/15/2000");

function getAge() {
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

document.getElementById("about-me-intro").innerHTML = `I&#x27;m a ${getAge()} year old full-stack developer and IT Student.`

if (today.getMonth() == birthDate.getMonth() && today.getDate() == birthDate.getDate()) {
    document.getElementById("about-me-intro").innerHTML = `I&#x27;m a ${getAge()} year old full-stack developer and IT Student. <br/><br/><b><font size=3>Today is my birthday! 🎉</font></b>`
    confetti.start();
}
