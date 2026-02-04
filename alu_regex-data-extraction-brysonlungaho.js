//  importing the filesystem to read the input text
const fs = require("fs");

//  read raw text input
const rawText = fs.readFileSync("sample_input.txt", "utf8");

//  remove script tags to avoid unwanted input
const sanitizedText = rawText.replace(/<script.*?>.*?<\/script>/gi, "");

// regex patterns code
const patterns = {
    emails: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}/g,
    urls: /https?:\/\/[^\s]+/g,
    phones: /(\(\d{3}\)\s?|\d{3}[-.\s]?)\d{3}[-.\s]?\d{3,4}/g,
    hashtags: /#\w+/g
};

// extraction function
function extractData(text, regex) {
    const matches = text.match(regex);
    return matches ? matches : [];
}

// extracting data using regex
const extractedData = {
    emails: extractData(sanitizedText, patterns.emails),
    urls: extractData(sanitizedText, patterns.urls),
    phones: extractData(sanitizedText, patterns.phones),
    hashtags: extractData(sanitizedText, patterns.hashtags)
};

//  masking sensitive emails
extractedData.emails = extractedData.emails.map(email => {
    const [user, domain] = email.split("@");
    return user[0] + "***@" + domain;
});

// saving output
fs.writeFileSync(
    "sample_output.json",
    JSON.stringify(extractedData, null, 2)
);

// displaying output
console.log("Extracted data:");
console.log(extractedData);