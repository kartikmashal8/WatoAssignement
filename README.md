WATO Assignment Application

To quickly get started. This is a simple application developed on the stable version of 
React-Native 0.7.2 (0.72) for the UI assessment which is responsive and tested on 
multiple Emulators and simulators such as
   - Pixel 6a Android 12 and 13
   - Pixel 7a Android 13 and 14
   - Pixel 4a Android 11
   - iPhone 15 Pro iOS 17.2
   - iPhone 14 Pro iOS 17.1
   - iPhone 14 iOS 17.0
   - iPhoneXE 3rd gen 17.1

And on Physical devices 
   - (TAB) Samsung Galaxy A8 Android 13
   - (Mobile) Samsung Galaxy A50 Android 11.


Requirements run the application in your system
   - Any code editor (possibly Android Studio Code)
   - Metro bundler
   - For Android
      - React-Native 0.72.0 (0.72)
      - Java JDK 11
      - Node.Js 21.3.0 (or any latest stable version)
      - Android Studio (Latest)
  - For iOS
      - React-Native 0.72.0 (0.72)
      - Java JDK 11
      - Ruby 3.2.2
      - Node.Js 21.3.0 (or any latest stable version)
      - iOS simulator
      - Xcode 15

STEPS TO RUN APPLICATION ON ANDROID
1. Clone the repository (https://github.com/kartikmashal8/WatoAssignement.git) 
         into any of the folders of your choice
2. Once the repository is cloned, open the folder in Visual Studio Code (or any other) 
3. Open the terminal targeting inside the project folder and run the command
   
          npm install

   this will install all the required dependencies.
4. Open Andriod Studio, create a device of your choice, and run the emulator
5.  Once the emulator is on run the following command in Terinal targeting the inside app folder

         npx react-native run-android
         
   or you can run below commands if the above one didn't worked

         npm start (to start the metro bundler)
         npm run android

and that's it you will be up in a few minutes based upon the machine you are using.

STEPS TO RUN APPLICATION ON IOS

 - STEPS 1, 2, and 3 from running applications in Android remain the same

4. In the terminal move to the ios folder of the application and run the following command

         pod install
        
5. Open the iOS folder and search for the WATO.xcworkspace file
6. Open the WATO.xcworkspace file in Xcode and select the simulator in which you want to view the application
          and hit run.

and that's it you will be up in a few minutes based upon the machine you are using.


NOTE : 
   - Development Set up for react native is bit crucial in such case kindly refer the 
          following videos to development setup
     - For Windows https://youtu.be/oorfevovPWw?si=Z7BKiM9sd50R0q-O
     - For Mac https://youtu.be/MJEcookWYUI?si=lO-u7Ck5b0mIpUaW
     - or you can visit official documentation https://reactnative.dev/docs/0.72/environment-setup 
