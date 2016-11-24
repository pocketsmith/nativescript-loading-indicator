# nativescript-loading-indicator

**nativescript-loading-indicator** is a plugin for NativeScript which overlays a loading indicator on the current page. Can be used, for example, to prevent the UI being interacted with while data is being fetched from an API, while informing the user that something is happening.

* iOS: [MBProgressHUD](https://github.com/jdg/MBProgressHUD)
* Android: [ProgressDialog](http://developer.android.com/reference/android/app/ProgressDialog.html)


## Installation

```bash
tns plugin add nativescript-loading-indicator
```

## Javascript Example

```js
var LoadingIndicator = require("nativescript-loading-indicator").LoadingIndicator;

// or with TypeScript:
// import {LoadingIndicator} from "nativescript-loading-indicator";

var loader = new LoadingIndicator();

// optional options
// android and ios have some platform specific options
var options = {
  message: 'Loading...',
  progress: 0.65,
  android: {
    indeterminate: true,
    cancelable: false,
    max: 100,
    progressNumberFormat: "%1d/%2d",
    progressPercentFormat: 0.53,
    progressStyle: 1,
    secondaryProgress: 1
  },
  ios: {
    details: "Additional detail note!",
    square: false,
    margin: 10,
    dimBackground: true,
    color: "#4B9ED6",
    mode: // see iOS specific options below
  }
};

loader.show(options); // options is optional

// Do whatever it is you want to do while the loader is showing, then

loader.hide();
```

##  Angular 2 Example

#### main.ts
```js
import { LoadingIndicator } from "nativescript-loading-indicator"; // import Loading inidicator here

@NgModule({
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ],
  imports: [
    HttpModule,
    NativeScriptModule
  ],
  providers: [
    LoadingIndicator // Add "LoadingIndicator" on Angular 2 providers
  ]
})
```

#### generic.component.ts
```js
import { Component, OnInit } from "@angular/core";
import { LoadingIndicator } from "nativescript-loading-indicator"; // import LoadingIndicatior here

@Component({
  // ...your component options here
})
export class GenericComponent implements OnInit {
  public constructor (
    private loadingIndicator: LoadingIndicator // instantiate LoadingIndicatior on constructor
  ) { }

  ngOnInit() {
    // android and ios have some platform specific options
    let options = {
      message: 'Loading...',
      progress: 0.65,
      android: {
        indeterminate: true,
        cancelable: false,
        max: 100,
        progressNumberFormat: "%1d/%2d",
        progressPercentFormat: 0.53,
        progressStyle: 1,
        secondaryProgress: 1
      },
      ios: {
        details: "Additional detail note!",
        square: false,
        margin: 10,
        dimBackground: true,
        color: "#4B9ED6",
        mode: // see iOS specific options below
      }
    };

    this.loadingIndicator.show(options); // options is optional

    // Do whatever it is you want to do while the loader is showing, then
    this.loadingIndicator.hide();
  }
```

### Options

* message: `string` Your message!
* progress: `number` Set progress display

#### Android Specific

* Reference: http://developer.android.com/intl/zh-tw/reference/android/app/ProgressDialog.html

#### iOS Specific

* Reference: https://github.com/jdg/MBProgressHUD/blob/master/Demo/Classes/MBHudDemoViewController.m

Quick `Mode` Reference:

* `MBProgressHUDModeDeterminate`
* `MBProgressHUDModeAnnularDeterminate`
* `MBProgressHUDModeDeterminateHorizontalBar`
* `MBProgressHUDModeText`
* `MBProgressHUDModeCustomView`
  * use with `customView: string` - local path to an image file


## Screenshots

<img width="40%" src="screenshots/ios.png" alt="Loading indicator on iOS" float="left">

<img width="50%" src="screenshots/android.png" alt="Loading indicator on Android" float="left">
