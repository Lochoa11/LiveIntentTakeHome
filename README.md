# Get Started

## 1. Clone repo

Clone the repo by running the following git command:
```
git clone git@github.com:Lochoa11/LiveIntentTakeHome.git
```

## 2. Setup Protractor
Make sure node is installed. To run the tests install Protractor by running following npm command:
```
npm install -g protractor
```

This installs both `protractor` and `webdriver-manager` tools.

## 3. Update and start Selenium
`webdriver-manager` is a helper tool used to run an instance of the Selenium Server. Download the necessary binaries by running:
```
webdriver-manger update
```

Next step is to run the server using the following commmand:
```
webdriver-manager start
```

This starts the Selenium Server. The Protractor tests send request to this server controling a local browser.

## 4. Run the tests
Next to run the tests run the following command
```
protractor conf.js
```