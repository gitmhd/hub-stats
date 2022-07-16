# HubStats

`HubStats` is a library extends you with powerful statistical tools.

## Features

`HubStats` is a library extends you with statistical methods those you can use them to make statistics in your application.

-  Pure JavaScript.
-  Very Lightweight, Less Than 1KB.
-  Easy To Install.
-  Easy To Use.
-  Built Using OOP Pattern.
-  High Performance in Doing statistical operation.

## Installation

### As normal plugin

1. Clone the repo in your PC.
2. Open the repo folder.
3. Copy the `dist` folder into your project directory.
4. Include the `hub-stats.min.js` file in your html file.

```html
<script src="dist/hub-stats.min.js"></script>
```

> **Notice:** I assume that your html file is in the root directory.

Now, you are all set to use `HubStats` in your project.

### As NPM package

Install the package in your project.

```
npm install hub-stats --save
```

Require the package.

```javascript
const HubStats = require("hub-stats");
```

Now, you are all set to use `HubStats` in your project.

## Usage

To use `HubStats`, you need an instance from the `HubStats` constructor.

```javascript
const hubStats = new HubStats();
```

Now, you can use `HubStats` methods, following is a table of `HubStats` methods.

| Method         | Params              | Description                                    |
| -------------- | ------------------- | ---------------------------------------------- |
| rangeBetween() | Accepts two params. | Returns the difference between the two params. |
| meanOf()       | Accepts one param.  | Returns the mean of the passed data.           |
| medianOf()     | Accepts one param.  | Returns the median of the passed data.         |
| modeOf()       | Accepts two param.  | Returns the mode of the passed data.           |

### Usage Example:

#### rangeBetween()

```javascript
const HubStats = require("hub-stats"); // you only need this statement if you are using nodejs
const hubStats = new HubStats();

console.log(`Range of(2-7) is: ${hubStats.rangeBetween(2, 7)}`);
```

#### meanOf()

```javascript
const HubStats = require("hub-stats"); // you only need this statement if you are using nodejs
const hubStats = new HubStats();

console.log(`Mean of(2,4,5,2,6,7) is: ${hubStats.meanOf([2, 4, 5, 2, 6, 7])}`);
```

#### medianOf()

```javascript
const HubStats = require("hub-stats"); // you only need this statement if you are using nodejs
const hubStats = new HubStats();

console.log(
   `Median of(2,4,5,2,6,7) is: ${hubStats.medianOf([2, 4, 5, 2, 6, 7])}`
);
```

#### modeOf()

```javascript
const HubStats = require("hub-stats"); // you only need this statement if you are using nodejs
const hubStats = new HubStats();

console.log(`Mode of(2,4,5,2,6,7) is: ${hubStats.modeOf([2, 4, 5, 2, 6, 7])}`);
```

## Support

Thank you for using `HubStats`, if you experienced any issue feel free to describe it [here](https://github.com/gitmhd/hub-stats/issues).
