const validation = (data)  => {
    const emailRegexp = new RegExp(/\S+@\S+\.\S+/)

    const passwordRegexp = new RegExp (/^[a-z0-9_-]{6,10}$/)
    
    let errors = {}

    if(!emailRegexp.test(data.email)) {
        errors.email = 'You must enter a valid email'
    }

    if(!data.email) {
        errors.emailEmpty = "You must enter an email"
    }
    if(data.email !== "ddacqua@gmail.com") {
        errors.validEmail = "This email has an error"
    }

    if(data.email.length > 35) {
        errors.caracteres = "It must be an email less than 35 characters"
    }

    if(!passwordRegexp.test(data.password)) {
        errors.password = "It must contain lowercase letters and numbers, it must also have a length between 6 and 10 characters"
    }
    if(data.password !== "1234dani") {
        errors.incorrectPass = "Incorrect password"
    }

    return errors;

}

export default validation