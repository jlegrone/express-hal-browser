# express-HAL-browser

express-HAL-browser is an express router middleware which serves the [HAL-browser project](HAL-README.adoc).

## Installation

```
npm install express-hal-browser --save
```

## Usage

Import 'express-hal-browser' and `use` at the endpoint of your choice.

```javascript
// server.js
import express from 'express';
import halBrowser from 'express-hal-browser';

const app = express();

app.use('/hal', halBrowser());

// ...
```

express-HAL-browser assumes your API entry point is at root (`/`) by default, but this can be overridden by passing an options object with an `AEP` key:

```javascript
app.use('/api', (req, res) => {
  // ...
});

app.use('/hal', halBrowser({ AEP: '/api' }));
```

# HAL-browser
[View HAL-browser README](HAL-README.adoc)
