# alu_regex-data-extraction-brysonlungaho


This project demonstrates the use of regular expressions (regex) to extract structured data from realistic raw text input. The program simulates a real-world scenario where text is returned from an external API and must be processed safely and accurately.
The focus of this project is on:
Data extraction using regex
Handling real-world formatting variations
Demonstrating security awareness when processing untrusted input
The program is implemented using JavaScript (Node.js).
Data Types Extracted
The program extracts the following data types from the input text:
-Email Addresses
-URLs
-Phone Numbers
-Hashtags

##Input Design
The input is stored in a text file (sample_input.txt) and is designed to resemble real-world data, including:
-Normal sentences and spacing
-Multiple valid data formats
-Noise and irrelevant text
-Mixed content rather than clean, structured input
-Malicious input such as <script> tags
This approach reflects how text is commonly received from external APIs or application logs in production systems.
Regex Patterns Used (Explanation)

##Email Regex
Matches commonly used email formats containing valid usernames, domains, and top-level domains.
Rejects clearly malformed email structures.

##URL Regex
Matches both HTTP and HTTPS URLs.
Stops matching at whitespace to reduce false positives.

##Phone Number Regex
Supports parentheses, dashes, spaces, and different separators.
Handles multiple real-world phone number formats.

##Hashtag Regex
Matches hashtags beginning with # followed by alphanumeric characters.
Avoids special characters that may indicate malformed or unsafe input.
Each regex pattern is commented directly in the source code for clarity and maintainability.

##Security Considerations
This project demonstrates awareness that not all input is trustworthy:
Script tags (<script>...</script>) are removed before processing to prevent malicious injection.
Only well-formed patterns are extracted; malformed or suspicious input is ignored.
Sensitive data such as email addresses is partially masked in the output to reduce unnecessary exposure.
Extracted content is never executed, rendered, or interpreted as code.
These measures help ensure safer handling of untrusted text data.

##Output
The extracted data is:
Grouped by data type
Stored in a structured JSON file (sample_output.json)
Printed to the console for verification

This makes the output easy to read, store, and reuse for further processing.
