---
name: Feature request
about: Request a new feature for the weather CLI
labels: [feature]
---

## Feature summary

Describe the weather CLI feature you want to add.

## Problem or motivation

Why is this feature needed?

## Requirements

- [ ] Accept a city name or zip code as a command line argument
- [ ] Fetch real-time weather data from wttr.in
- [ ] Display temperature in Celsius
- [ ] Display weather condition description
- [ ] Display humidity percentage
- [ ] Show a clear error message if the location is not found

## CLI usage

Provide example commands:

```
node weather.js Colombo
node weather.js London
node weather.js 94040
```

## Acceptance criteria

- [ ] The CLI works with both city names and zip codes
- [ ] Output is clear and beginner friendly
- [ ] Errors are handled gracefully
