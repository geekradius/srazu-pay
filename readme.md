This project is a React Native application bootstrapped with Expo. It provides a streamlined environment for developing cross-platform mobile applications for iOS and Android.

Prerequisites
Before you can run the project, make sure you have the following installed on your machine:

Node.js (>= 12.x.x) and npm (Node Package Manager)
Expo CLI - You can install it globally using npm:
bash
Copy code
npm install -g expo-cli
Getting Started

1. Clone the Repository
   First, clone the repository to your local machine:

bash
Copy code
git clone https://github.com/geekradius/srazu-pay
cd MyReactNativeExpoApp 2. Install Dependencies
Once you have the project files, install the necessary dependencies by running:

bash
Copy code
npm install 3. Start the Expo Development Server
After installing the dependencies, you can start the Expo development server:

bash
Copy code
expo start
This command will start the Expo CLI and open a browser window with the Expo Developer Tools. From here, you can run the app on an emulator, a physical device, or in the web browser.

4. Running on a Physical Device
   To run the app on a physical device, follow these steps:

Install the Expo Go App:

On your iOS device, download it from the App Store.
On your Android device, download it from the Google Play Store.
Connect Your Device to the Same Network:
Ensure your mobile device is connected to the same Wi-Fi network as your development machine.

Scan the QR Code:
Open the Expo Developer Tools in your browser (should have opened automatically after running expo start), and scan the QR code using the Expo Go app.

5. Running on an Emulator
   To run the app on an emulator, ensure you have either an Android or iOS emulator set up:

For iOS:

You need to have Xcode installed and properly configured. You can open the iOS emulator from the Expo Developer Tools by clicking on the "Run on iOS simulator" button.
For Android:

You need to have Android Studio installed with the Android Virtual Device (AVD) configured. You can start an Android emulator from the Expo Developer Tools by clicking on the "Run on Android device/emulator" button. 6. Running in a Web Browser
Expo also supports running your app directly in a web browser. From the Expo Developer Tools, click on the "Run in web browser" button to open your app in a new tab.
