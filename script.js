async function analyzeSentiment() {
    const text = document.getElementById('inputText').value;
    if (!text) {
        alert('Please enter some text.');
        return;
    }

    const response = await fetch('http://127.0.0.1:5000/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
    });

    const data = await response.json();

    const resultDiv = document.getElementById('result');
    if (data.error) {
        resultDiv.innerHTML = `<p style="color: red;">${data.error}</p>`;
    } else {
        const sentiment = data[0].label;
        const score = data[0].score.toFixed(4);
        resultDiv.innerHTML = `<p>Sentiment: ${sentiment} (Confidence: ${score})</p>`;
    }
}

