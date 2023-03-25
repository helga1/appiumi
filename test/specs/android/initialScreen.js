class initialScreen{
    get signInOption(){
        return $('//*[@text="SIGN IN"]')
    }


}
module.exports = new initialScreen()