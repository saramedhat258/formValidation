let allinputs = document.querySelectorAll('input')
let emailinput = document.querySelector("[placeholder='Email Address']")

document.forms[0].onsubmit = function (e) {
    let emptyinput = true
    let trueemail = true
    document.querySelectorAll('.errormsg').forEach(msg => msg.remove());
    /*chech empty inputs *///////////////////////////////////////////////////////////////////

    for (i = 0; i < allinputs.length; i++) {
        if (allinputs[i].value !== '') {
            allinputs[i].style.cssText = 'border:gray solid 1px;'
        }
        if (allinputs[i].value === '') {
            emptyinput = false
            let error = document.createElement('p')
            error.setAttribute("class", "errormsg")
            let errormsg = document.createTextNode(`${allinputs[i].placeholder} cannot be empty`)
            error.appendChild(errormsg)
            allinputs[i].after(error)
            allinputs[i].style.cssText = 'border:red solid 1px;'
            /* delete error msg when i write any thing */
            allinputs[i].oninput = function (e) {
                if (e.target.value !== '') {
                    error.remove()
                }
                this.style.cssText = 'border:gray solid 1px;'
            }
        }
    }
    if (emptyinput === false || trueemail === false) {
        e.preventDefault()
    }
}

/*email validation *//////////////////////////////////////////////////////////////////
emailinput.onblur=()=>{
    document.querySelectorAll('.errormsge').forEach(msg => msg.remove());
    let pattern = /\w+@\w+.\w+/ig
    let validateemail = pattern.test(emailinput.value)
    if (validateemail === false) {
        trueemail = false
        let errormail = document.createElement('p')
        errormail.setAttribute("class", "errormsge")
        let errormsg = document.createTextNode(`looks like this is not an email`)
        errormail.appendChild(errormsg)
        emailinput.after(errormail)
        emailinput.style.cssText = 'border:red solid 1px;'
    }
    emailinput.oninput = () => {
        if (e.target.value !== ''&& validateemail) {
            
            errormail.remove()
            
        }
        if (e.target.value !== '') {
            error.remove()
            this.style.cssText = 'border:gray solid 1px;'
        }
    }
    }
