function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    //check that url is valid
    //CREDIT FOR REGEX: https://stackoverflow.com/questions/1701898/how-to-detect-whether-a-string-is-in-url-format-using-javascript
    const urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/

    if(urlRegex.test(inputText)) {
        return true;
    } else {
        alert('Please enter valid url');
        return false;
    }
}

export { checkForName }
