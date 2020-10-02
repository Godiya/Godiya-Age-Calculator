// const introduction = document.querySelector(".intro");
// const buttonA = document.querySelector(".btn");
// const howOld = document.querySelector(".question");
// const wait = document.querySelector(".load");
// const last = document.querySelector(".final");
// const buttonB = document.querySelector(".redo");

// //console.log(wait);
// buttonA.addEventListener('click', function(e){
//     e.preventDefault();

//     console.log(e.currentTarget);
//     wait.classList.remove('hidden');

//     setTimeout(function(){
//         wait.classList.add('hidden');
//         last.classList.add('hidden');

//         setTimeout(function(){
//             introduction.classList.add('hidden');
//             howOld.classList.add('hidden');
//             last.classList.remove('hidden');
//         },1000);

//     },2000);
// })

// buttonB.addEventListener("click", function(){
//     introduction.classList.remove('hidden');
//     howOld.classList.remove('hidden');
//     last.classList.add("hidden");
// })

function calAgeDays(){
    var fname, lname, age;
    fname = document.getElementById("nameA").value;
    lname = document.getElementById("nameB").value;
    age = document.getElementById("age").value;
    if(fname === "" || lname === "" || age ===""){
        alert("fill in your details");
        return;
    } else {
        age *= 365;
        let res = document.getElementById("result");
        res.innerHTML = fname + lname + " You are " + age + " days" + " old!";
    }

}
    