# Coffee Machine

This coffee machine app allows you to connect with NFC (No NFC connection) and help you to compose your coffee. In this app you will be able to choose coffee types, coffee size and 
add extra toppings like Milk, Sugar.

Please go ahead and play around  :)

## Covered :

  - Since, we are not using real coffee machine, there is no NFC connection integrated. Instead of that when user opens the app he/she will be stays 
    in that screen for 1.5  seconds to feel the NFC connection and user automatically redirected to next screen.
  - Fetches list of coffee details from API (https://darkroastedbeans.coffeeit.nl/docs/) and displays a list of coffee details.
  - Show coffee details in Item list	(Name, Avatar/picture)
  - When user press coffee types item, will be able to redirect to choose coffee sizes, then coffee extras and finally could add extra toppings 
    such as Sugar, Milk.
  - Showing Toast modal for user to read the messages.
  - Used **Context API** for state management.
  - Flatlist used for all the list to show to the user, for coffee extras screen user can able to see nested child details when pressing on coffee item. 
    (Nested FlatList)
  - Project working on both Android and iOS
  - Project running on latest RN 0.64.2.
  - I have created app UI as per some best pratice approach.
  - Based on the Figma(https://www.figma.com/file/gudZreWqLVFiAz4Nn2cvfY/Coffee-Brew?node-id=1%3A195), I designed the complete UI and matched all UI as per same. 
  - Used (Lex) id: **60ba1ab72e35f2d9c786c610** for API calls

## Not Covered :  Willing to implement in the future.

  - I could not cover NFC connection feature due to no real coffee machine.
  - Since, No Avatar/image provided in API, could not display images based on coffee items. only few items displayed for better UI as per figma.

## Grading criteria followed:

  - **Architecture and approach** - (Using **Container and View pattern** for design patten and proper folder structure Architecture && tried TDD approach)
  - **Execution** - App runs successfully in both Android and iOS
  - **Testability** - Used **Jest** for Unit testing and **Enzyme** for component testing.
  - **Code readability and style** - Written clean code and very convenient to read. Maintained proper comments and kept style files wisely. 
    (Tried to use all latest methods)

## How to setup code :

- Step 1 : 	download code from repo

- Step 2 : 	remove **yarn.lock** file from download code

- Step 3 : 	do **npm install** or **yarn install** ( if you have configured **yarn** in your project )

  ### If you want to run in iOS :-

      -  pod install ( all of your packages to be installed in your Pod file )

      -  yarn run ios or react-native run-ios ( app will run in your simulator or connected iOS device )
      
      
  ### If you want to run in Android :-

      -  open your android studio and make sure your gradle getting success ( all of your packages to be synced in your gradle )

      -  yarn run ios or react-native run-android ( app will run in your emulator or connected Android device )

## Packages used : (Technologies)

  Project is created with:
  
  - react (17.0.1)
  - react-native (0.64.2)
  - react-native-gesture-handler (1.10.3)
  - react-native-safe-area-context (3.2.0)
  - react-native-screens (3.4.0)
  - react-native-toast-message (1.4.9)
  - jest (26.6.3) - devDependencies
  - enzyme (3.11.0) - devDependencies
  - enzyme-adapter-react-16 (1.15.6) - devDependencies
  - flow-bin (0.156.0) - devDependencies
  - eslint 7.14.0 - devDependencies
  - used Prettier for code formatting

## Thinking & Decisions :

  - Since, no coffee machine, i have created a user flow for better user interation, eventhough we dont have NFC connection, 
    I make user to wait for NFC card taps and showing Toast for device connected and moving the sreen to make coffee (1.5 seconds time out)
  - Since, No avatar/image url given in API. I have decided to download all images from figma and kept in local. Based on the conditions (coffee name)
    showing coffee type avatar in coffee type screen. Few coffee images only displayed becasue API values and Figma values differs. 
    (Keeping images locally and diaplying all avatar image based on condition is not best practices. Better to have avatar in API)
  - I have used Context API to pass the data throughout the application and used memoizations for context provider
    Using the following rule of thumb: don’t use memoization if you can’t quantify the performance gains.)
  - Handled all the NULL checks in all components and showing Toast for API failure.
  - Created Nested flatlist for displaying coffee extra toppings.
  - Provided Loader (Activity indicator) before API calling. Loader will shown in upper middle of the screen, just for user interaction.
  - Created Navigator and Routes for maintaining stacks/screens
  - Created ColourPalette for maintaining colors
  - Created Utility function for maintaining all application static text's
  - Created Constant file for maintaining API url's

## outputs :

  ## Gif image of iOS & Android output 
    (Gif image loads bit slow and you may feel app working slow but in real application it looks great)
  
  <div align="left">
    <img src="https://user-images.githubusercontent.com/11419839/127384653-b1a72f6a-d7de-4ffd-8151-e323d098fe6f.gif" width="300" height="650" />
  </div>
  <div align="right">
    <img src="https://user-images.githubusercontent.com/11419839/127384938-dd8ca2bd-f5ed-44e2-97df-73b98fd176fa.gif" width="300" height="650" />
  </div>
 
  
  ## Screenshots of iOS attached 

  <div align="center">
    <img src="https://user-images.githubusercontent.com/11419839/127383850-1e947683-5d46-4ac7-b056-3322ecb0eb5e.png" width="300" height="650"</img> 
  </div>
  <div align="center">
    <img src="https://user-images.githubusercontent.com/11419839/127383903-ca0fc901-4374-4f07-8ef5-15b2de0ef3b1.png" width="300" height="650"</img> 
  </div>
  <div align="center">
    <img src="https://user-images.githubusercontent.com/11419839/127383942-49d3aec8-901e-4ccb-8c77-d4840f4133a7.png" width="300" height="650"</img> 
  </div>
  <div align="center">
    <img src="https://user-images.githubusercontent.com/11419839/127384017-1367fca2-8d90-405b-895b-8ee6cb6f70e8.png" width="300" height="650"</img> 
  </div>
  <div align="center">
    <img src="https://user-images.githubusercontent.com/11419839/127384080-6f8e3ff4-9011-497f-904d-6af79eede662.png" width="300" height="650"</img> 
  </div>
   <div align="center">
    <img src="https://user-images.githubusercontent.com/11419839/127384100-226fe874-ea74-4191-8ebc-bee3d46466fd.png" width="300" height="650"</img> 
  </div>
  
  ## Screenshots of Android attached
  
  <div align="center">
    <img src="https://user-images.githubusercontent.com/11419839/127382386-26ea641e-e176-497d-ada6-c613b60ab246.png" width="300" height="500"</img> 
  </div>
  <div align="center">
    <img src="https://user-images.githubusercontent.com/11419839/127383513-49e0e388-e756-433e-b930-474d66a5fdc4.png" width="300" height="500"</img> 
  </div>
  <div align="center">
    <img src="https://user-images.githubusercontent.com/11419839/127383584-ab71cb10-ab6a-43cc-a285-af8023acf864.png" width="300" height="500"</img> 
  </div>
  <div align="center">
    <img src="https://user-images.githubusercontent.com/11419839/127382439-43dd8206-fd64-4b57-9187-9e4e6569e87b.png" width="300" height="500"</img> 
  </div>
  <div align="center">
    <img src="https://user-images.githubusercontent.com/11419839/127382459-1dbf11c8-84c9-4236-9cd8-a5ca8f319209.png" width="300" height="500"</img> 
  </div>
   <div align="center">
    <img src="https://user-images.githubusercontent.com/11419839/127383097-b9b12056-96c5-407c-b6c3-5f113d1bd4c9.png" width="300" height="500"</img> 
  </div>

## Happy coding ...
