Inputs = document.querySelectorAll("input");
Err = document.getElementsByClassName("invalid-feedback");

function hasNumbers(t) {
    var regex = /\d/g; return regex.test(t);
}

chName.addEventListener("keyup", function () {
    if (chName.value.length === 0) {
        chName.classList.add("is-invalid");
        cardName.innerText = "Jane Appleseed";
    } else {
        if (hasNumbers(chName.value)) {
            Err[0].innerText = "Wrong format, text only"
            chName.classList.add("is-invalid");
        } else {
            chName.classList.remove("is-invalid");
            cardName.innerText = chName.value;
        }
    }
});

cNumber.addEventListener("keyup", function () {
    if (cNumber.value.length === 0) {
        Err[1].innerText = "Can't be blank";
        cNumber.classList.add("is-invalid");
        cardHolder.innerText = "0000 0000 0000 0000";
    } else {
        if (!isNaN(cNumber.value)) {
            // Es numero
            if (cNumber.value.length < 16) {
                Err[1].innerText = "The card number must have 16 numbers";
                cNumber.classList.add("is-invalid");
            } else {
                cNumber.classList.remove("is-invalid");
            }
            cardHolder.innerText = agregarCaracter(cNumber.value, " ", 4);
        }
        else {
            //No es numero
            Err[1].innerText = "Wrong format, numbers only";
            cNumber.classList.add("is-invalid");
        }
    }
});

MM.addEventListener("keyup", function () {
    if (MM.value.length === 0) {
        Err[2].innerText = "Can't be blank";
        MM.classList.add("is-invalid");
        mes.innerText = "00";
    } else {
        if (!isNaN(MM.value)) {
            if (MM.value.length < 2) {
                Err[2].innerText = "Must have two digits";
                MM.classList.add("is-invalid")
            } else {
                MM.classList.remove("is-invalid");
                mes.innerText = MM.value;
            }
            mes.innerText = MM.value;
        } else {
            Err[2].innerText = "Numbers only";
            MM.classList.add("is-invalid");
        }
    }
});

YY.addEventListener("keyup", function () {
    if (YY.value.length === 0) {
        Err[2].innerText = "Can't be blank";
        YY.classList.add("is-invalid");
        anio.innerText = "00";
    } else {
        if (!isNaN(YY.value)) {
            if (YY.value.length < 2) {
                Err[2].innerText = "Must have two digits";
                YY.classList.add("is-invalid")
            } else {
                YY.classList.remove("is-invalid");
                anio.innerText = YY.value;
            }
            anio.innerText = YY.value;
        } else {
            Err[2].innerText = "Numbers only";
            YY.classList.add("is-invalid");
        }
    }
});

CVC.addEventListener("keyup", function () {
    if (CVC.value.length === 0) {
        Err[3].innerText = "Can't be blank";
        CVC.classList.add("is-invalid");
        Cardcvc.innerText = "000";
    } else {
        if (!isNaN(CVC.value)) {
            if (CVC.value.length < 3) {
                Err[3].innerText = "Must have three digits"
                CVC.classList.add("is-invalid")
            } else {
                CVC.classList.remove("is-invalid");
                Cardcvc.innerText = CVC.value;
            }
            Cardcvc.innerText = CVC.value;
        } else {
            Err[3].innerText = "Numbers only";
            CVC.classList.add("is-invalid");
        }
    }
});

const agregarCaracter = (cadena, caracter, pasos) => {
    let cadenaConCaracteres = "";
    const longitudCadena = cadena.length;
    for (let i = 0; i < longitudCadena; i += pasos) {
        if (i + pasos < longitudCadena) {
            cadenaConCaracteres += cadena.substring(i, i + pasos) + caracter;
        } else {
            cadenaConCaracteres += cadena.substring(i, longitudCadena);
        }
    }
    return cadenaConCaracteres;
}

btnConfirm.addEventListener("click", function () {
    InputValid(Inputs);
});

//Funcion innecesaria
function InputValid(inputGroup) {
    for (let i = 0; i < inputGroup.length; i++) {
        debugger;
        if (inputGroup[i].value.length != 0) {
            inputGroup[i].classList.remove("is-invalid");
            if (i === 1 && inputGroup[i].value.length < 16) {
                Err[i].innerText = "The card number must have 16 numbers";
                inputGroup[i].classList.add("is-invalid");

                inputGroup[i].focus();
                return 0;
            }
            if (i === 2 && inputGroup[i].value.length < 2) {
                Err[i].innerText = "Must have two digits";
                inputGroup[i].classList.add("is-invalid");

                inputGroup[i].focus();
                return 0;
            }
            if (i === 3 && inputGroup[i].value.length < 2) {
                Err[i-1].innerText = "Must have two digits";
                inputGroup[i].classList.add("is-invalid");

                inputGroup[i].focus();
                return 0;
            }
            if (i === 4 && inputGroup[i].value.length < 3) {
                Err[i-1].innerText = "Must have three digits";
                inputGroup[i].classList.add("is-invalid");

                inputGroup[i].focus();
                return 0;
            }
            if (i === 0) {
                if (hasNumbers(inputGroup[i].value)) {
                    Err[0].innerText = "Wrong format, text only"
                    inputGroup[i].classList.add("is-invalid");

                    inputGroup[i].focus();
                    return 0;
                } else {
                    inputGroup[i].classList.remove("is-invalid");
                }
            }
            else {
                if (isNaN(inputGroup[i].value)) {
                    if (i != 4 && i != 5) {
                        Err[i].innerText = "Numbers only";
                    }
                    inputGroup[i].classList.add("is-invalid");

                    if (i != 5) {
                        inputGroup[i].focus();
                        return 0;
                    }
                }
                else {
                    inputGroup[i].classList.remove("is-invalid");
                }
            }

        } else {
            if (i != 4) {
                Err[i].innerText = "Can't be blank";
            }
            inputGroup[i].classList.add("is-invalid");

            inputGroup[i].focus();
            return 0;
        }
    }

    column.innerHTML = "<div class='text-center'> <img src='images/icon-complete.svg' alt=''> <h2 class='text-uppercase mt-4'>Thank you!</h2> <p class='p-succes mt-3'>We've added your card details</p> <input type='button' id='btnSubmit' class='btn btn-color container-fluid mt-4' value='Continue'> </div>";

    btnSubmit.addEventListener("click", function () {
        location.reload();
    });
}