# KNoT Gateway

This is the source code of the application that configures a KNoT Gateway.

## Build and run instructions

First, install [Ionic](https://ionicframework.com) tools:

```bash
$ sudo npm install -g ionic cordova
```

### Development

To preview on your development environment, run:

```bash
$ ionic lab
```

It will open a tab on your browser showing a preview of the mobile versions of the application. Navigate to `http://localhost:8100` to view it as a website.

### Deployment

To build as a mobile application, run:

```bash
$ ionic cordova platform add <ios|android>
$ ionic cordova run <ios|android>
```

Remember that iOS can be built on a Mac only.
