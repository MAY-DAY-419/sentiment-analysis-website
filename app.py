from flask import Flask, request, jsonify
from transformers import pipeline

app = Flask(__name__)

# Load sentiment analysis model from Hugging Face
sentiment_analyzer = pipeline("sentiment-analysis")

@app.route('/analyze', methods=['POST'])
def analyze_sentiment():
    text = request.json.get('text', '')
    if not text:
        return jsonify({"error": "No text provided"}), 400

    # Perform sentiment analysis
    result = sentiment_analyzer(text)
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)
