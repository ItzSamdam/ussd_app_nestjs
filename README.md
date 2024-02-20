<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

USSD APPLICATION DEMO

This is a simple USSD APPLICATION DEMO

There are two endpoints in the application
1. No Third Party Implementation    -   `http://localhost:4000/ussd/ussd_no_third_party`
No Third Party Implementation is used for this purpose, As such it is not be the best way to implement USSD Application.

Response Example
```text
Welcome to USSD Banking with Payyme. N20 will be deducted for this service.
1. Continue
2. Cancel
```
```text
Please select your preferred language
1. English
2. Yoruba
0. End
```

2. Third Party Implementation    -   `http://localhost:4000/ussd/ussd_third_party`



## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

## How to use the application with a USSD code (third party implementation)

1. Dial `*347*1#` to see the application in action