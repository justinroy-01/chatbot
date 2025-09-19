# 🤖 Chatbot

A simple, customizable, and sleek chatbot application built with **React** and powered by the **Google Gemini API**. This project allows you to create a personalized chat experience by defining your bot's personality and interacting with it in a clean, modern interface.

## Preview
<img width="1677" height="963" alt="image" src="https://github.com/user-attachments/assets/f857e137-b6ed-4634-9e86-0023b8b059ce" />


***

## ✨ Features

-   **Powered by Gemini:** Leverages the powerful and versatile Gemini 1.5 Flash model for intelligent and context-aware responses.
-   **Customizable Personality:** Easily define your chatbot's name, personality, and instructions directly in the code.
-   **Markdown Support:** Renders the bot's responses in Markdown, allowing for rich formatting like lists, bold text, code blocks, and more.
-   **Easy Setup:** Get up and running in minutes with just a few configuration steps.

***

## 📂 Project Structure

Here are the key files you'll need to work with:

mybot/
├── .env                  #---- your API key
├── package.json
└── src/
├── App.css           # --- Styles for the chatbot UI
├── App.js            # --- Main chatbot logic and configuration
***

## 🚀 Getting Started

Follow these steps to set up and run the project on your local machine.

### **Prerequisites**

Make sure you have [Node.js](https://nodejs.org/) and npm installed on your system.

### **Step 1: Clone the Repository**

First, clone this repository to your local machine.
git clone <https://github.com/justinroy-01/chatbot>

### **Step 2: Dependencies**
npm install @google/generative-ai react-markdown
(Note: If other dependencies from package.json are not installed, you may need to run npm install first.)


### **Step 3: Get Your Gemini API Key**
You need a Google Gemini API key to use the chatbot. You can get one for free from the Google AI Studio.

Go to Google AI Studio.

Click the "Create API key in new project" button and copy your new key.

### **Step 4: Set Up Your Environment File**
In the root directory of the project (mybot/), create a new file named .env.

Open the .env file and add your API key in the following format. The REACT_APP_ prefix is crucial for it to work with Create React App.

File: mybot/.env
<img width="1040" height="500" alt="image" src="https://github.com/user-attachments/assets/f37f0baf-9a3d-4014-8014-a934c2833539" />


REACT_APP_GEMINI_API_KEY=PASTE_YOUR_GEMINI_API_KEY_HERE

### **Step 5: Set Up Your Name and bot profile**
Go to the below location and find your user and personality.

File:mybot/App.js

<img width="1305" height="462" alt="image" src="https://github.com/user-attachments/assets/eb539bd3-4988-4ea9-9371-4c9c5b0064d0" />


### **Step 6: (Optional) setting your model**
You can choose from a variety of Gemini model 
just insert in App.js
<img width="1098" height="337" alt="image" src="https://github.com/user-attachments/assets/78cb9faa-6055-4e92-ba9d-b1078ca91411" />

### Hope this was helpful!!

