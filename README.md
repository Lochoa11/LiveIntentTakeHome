# Get Started

Clone the repo by running the following git command:
```
git clone git@github.com:Lochoa11/LiveIntentTakeHome.git
```

Make sure node is installed. To run the tests install Protractor by running following npm command:

```
npm install -g protractor
```

This installs both `protractor` and `webdriver-manager` tools.

`webdriver-manager` is a helper tool used to run an instance of the Selenium Server. Download the necessary binaries by running:

```
webdriver-manger update
```

Next step is to run the server using the following commmand:

```
webdriver-manager start
```

This starts the Selenium Server. The Protractor tests send request to this server controling a local browser.

Next to run the tests run the following command
```
protractor conf.js
```