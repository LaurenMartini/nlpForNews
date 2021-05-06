function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    getSentimentAnalysis('https://api.meaningcloud.com/sentiment-2.1').then(function(data) {
        console.log('after sentiment analysis requested');
        document.getElementById('results').innerHTML = data.agreement;
    });
    // fetch('https://api.meaningcloud.com/sentiment-2.1')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })
}

const getSentimentAnalysis = async(baseURL) => {
    const res = await fetch(baseURL + '?key=9a75e7d83f5bc694fba85da7e708463e' + '&lang=en&url=https://apnews.com/');
    try {
        const data = await res.json();
        console.log('data: ', data);
        return data;
    } catch(error) {
        console.log('error', error);
    }
}

export { handleSubmit }
