# HTMX-like Syntax Experiment with NativeScript

This repository is an experimental project that aims to introduce HTMX-like syntax into NativeScript applications. The goal is to provide developers with a simpler way to handle HTTP requests and dynamic content updates directly within NativeScript's XML templates.

## Overview

This project demonstrates how to create custom properties in NativeScript that mimic the behavior of HTMX attributes such as `hx-get`, `hx-post`, `hx-trigger`, and `hx-swap`. These properties allow you to bind HTTP request logic directly to UI elements, enabling dynamic content updates without writing extensive code.

### Key Features

- **HTTP Request Properties**: Bind `GET`, `POST`, `PUT`, `PATCH`, and `DELETE` HTTP requests directly to NativeScript views using custom properties like `hx-get` and `hx-post`.
- **Event Triggers**: Use `hx-trigger` to attach event listeners to views, controlling when HTTP requests are made.
- **Content Swapping**: Dynamically update parts of your UI based on HTTP responses using `hx-swap`.
- **Targeting Responses**: Use `hx-target` to specify which view should be updated with the response from the HTTP request.

### File Structure

- **main-page.js**: Contains the logic for handling custom properties and making HTTP requests.
- **main-page.xml**: A sample UI layout that utilizes the custom HTMX-like properties to make a `GET` request and update the view.
- **server.js**: A simple Node.js server that serves XML content to demonstrate dynamic content updates.

### Example Usage

```xml
<Button text="TAP" tap="{{ onTap }}" class="-primary"
        hx-get="http://localhost:3000/xml" hx-swap="outerHTML"/>
```

In this example, the button triggers a `GET` request to the specified URL when tapped. The response is then used to update the UI by swapping the button's outer HTML with the response content.

### How to Run

1. Clone this repository.
2. Start the server by running `node server.js`.
3. Run the NativeScript app on an emulator or device.
4. Tap the button to see dynamic content updates in action.

### Prerequisites

- NativeScript CLI installed
- Node.js installed

### Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/owenthcarey/htmx-nativescript.git
   ```

2. Navigate to the project directory:
   ```bash
   cd htmx-nativescript
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the server:
   ```bash
   node server.js
   ```

5. Build and run the NativeScript app:
   ```bash
   ns run android
   ns run ios
   ```
