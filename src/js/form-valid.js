// document.querySelector('.vali').onclick = myClick;

// function myClick() {
    
//     let form = document.querySelector('.form__input').value;
//    const x = document.getElementById("span");
//    console.log('.form__input');
//     if (form == 0) {
//         x.style.display = "block";
//         document.querySelector('.span').innerHTML = 'All fields are required'
//          }  else {x.style.display = "none"; 
//     }
// }


document.querySelector('.vali').onclick = myClick;

function myClick() {
    let form = document.querySelector('.form'),
        formInputs = document.querySelectorAll('.form__input');
                   
        let emptyInputs = Array.from(formInputs).filter(input => input.value === '');
        const x = document.getElementById("span");

    formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');
            x.style.display = "block";
        document.querySelector('.span').innerHTML = 'All fields are required'

        } else {
            input.classList.remove('error');
            x.style.display = "none"; 
        }
    })

    if (emptyInputs.length !== 0) {
        console.log('fin filled');
    return false;
    }
        
    }

   