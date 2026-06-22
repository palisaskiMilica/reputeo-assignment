# Restful Booker API Test Automation

Playwright API automation project created to validate the core functionality of the Restful Booker service.

## Tech Stack

* Playwright
* JavaScript
* GitHub Actions

## Covered Scenarios

### Authentication

* Create authentication token
* Invalid credentials validation

### Booking Management

* Create and retrieve booking
* Update booking
* Partial update booking
* Delete booking

### Authorization

* Update booking without token
* Delete booking without token

### Defect Validation

* API allows checkout date before check-in date
* API allows negative booking price

## Project Structure

```text
api/
data/
helpers/
tests/
docs/
```

## Installation

```bash
npm install
```

## Run Tests

```bash
npm test
```

## View HTML Report

```bash
npx playwright show-report
```

## Continuous Integration

Tests are automatically executed through GitHub Actions on every push.

## Defects

Documented defects can be found in:

```text
docs/bugs.md
```
