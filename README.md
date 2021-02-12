# Mr. Roboger's Neighborhood

### A web application that takes a number from a user and returns a range of numbers and strings

#### By Maggie Saldivia **{Maggie-Mango}**

## Technologies Used
* HTML
* CSS
* Bootstrap
* JQuery
* JavaScript


## Description

A user will be able to input a number the application will output a range from 0 to the inputted number with the following **exceptions**:
* Numbers that contain a 1: all digits replaced with "Beep!"
* Numbers that contain a 2: all digits replaced with "Boop!"
* Numbers that contain a 3: all digits replaced with "Won't you be my neighbor?"

These **exceptions** are ordered by importance (ex: the first exception will apply unless the second one does). That is, the number 13 should output "Won't you be my neighbor?" and the number 21 should output "Boop!". 

## Specs

| Describe | Test | Expect |
|:--------:|:--------:|:--------:|
|`beepBoop()`| "It should return a range of numbers from 0 to the number inputted" | (beepBoop("1")).toEqual(0, 1)) |
|`beepBoop()`| "It should return 'Beep' if 1 is inputted" | (beepBoop("1")).toEqual("Beep!")) |
|`beepBoop()`| "It recognizes 2 digits and returns 'Boop!' in the range if 20 is inputted" | (beepBoop("20")).toEqual("Boop!") |
|`beepBoop()`| "It should recognize the exception and return 'Boop!' in the range if 12 is inputted" | (beepBoop("12")).toEqual("Boop!") |
|`beepBoop()`| "It should recognize the exception and return 'Won't you be my neighbor?' in the range if 13 is inputted" | (beepBoop("13")).toEqual("Won't you be my neighbor?") |


## Setup/Installation Requirements

* Clone this repository to your desktop.
* Navigate to the top level of the directory.
* Open beep-boop/index.html in your browser.

## Link

https://maggie-mango.github.io/roboger

## Known Bugs

* 
* 

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contact Information

maggiemail444@gmail.com