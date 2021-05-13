function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (Client.checkForName(formText)) {
        console.log("::: Form Submitted :::")
        getSentimentAnalysis('/add', formText).then(function(data) {
            console.log('after sentiment analysis requested');
            document.getElementById('subjectivity').innerHTML = data.subjectivity;
            document.getElementById('agreement').innerHTML = data.agreement;
            document.getElementById('confidence').innerHTML = data.confidence;
            document.getElementById('irony').innerHTML = data.irony;
            document.getElementById('score_tag').innerHTML = data.score_tag;
        });
    }
}

const getSentimentAnalysis = async(url, userURL) => {
    console.log('user url: ', userURL);
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({userURL})
    });
    try {
        console.log('in try');
        const resData = await res.json();
        console.log('resData: ', resData);
        return resData;
    } catch(error) {
        console.log('error', error);
    }
}
export { handleSubmit }
