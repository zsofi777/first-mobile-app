:iphone:

## React Native mobile app
ReactNative :heavy_plus_sign: React Hooks :heavy_plus_sign: Expo :heavy_plus_sign: NodeJS
#
### Installation ###

**01**

**Download NodeJS**

I recommend using the latest Node version.

**02**

**Get the command line tool**

You will run this tool locally to package, serve, and publish your projects.

`npm install expo-cli --global`

**03**

**Create your first project**

You will be asked to create an Expo account before proceeding.

`expo init my-new-project`

`cd my-new-project`

`expo/npm start`

### Folders/files ###

* expo: configs for expo
* assets: imgages eg. icons, splash screen image
* node modules: dependencies for the project
* .gitignore
* .watchmanconfig: exists to watch files and record when they change, it can also trigger actions when matching files change
* app.js: code what responsible for rendering what we see on the device screen
* app.json: configuration for the app
* babel: how js code optimized & compiled
* package-lock.json: when someone clones your repo and run npm install in their machine, npm will look into package-lock.json and install exact versions of the package as the owner has installed 
* package.json: manage dependencies

**04**

**Preview your project**

Open Expo Client on your device.

Use it to scan the QR code printed by 

`expo start`. 

You may have to wait a minute while your project bundles and loads for the first time.

**05**

**Start coding!**

Select your favorite editor, like Atom, VSCode, Sublime Text, Vim, or Emacs.

Open your-project/App.js, and start building!
