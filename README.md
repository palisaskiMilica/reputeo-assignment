# Restful Booker API Test Automation

Playwright API automation project created to validate the core functionality of the Restful Booker service.

## Tech Stack

* Playwright
* JavaScript
* GitHub Actions

## Test Strategy

The focus of this assignment was functional API testing of the core booking workflow.

### Covered

* Authentication
* CRUD operations
* Authorization validation
* Exploratory validation testing
* Defect identification and documentation

### Not Covered

* Performance testing
* Load testing
* Security testing
* Contract/schema validation

These areas were intentionally excluded to prioritize functional API coverage within the scope of the assignment.

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

## Tool Choice

Playwright was selected because it provides built-in API testing capabilities, simple request handling, strong assertions, HTML reporting, and easy CI integration with GitHub Actions.

Alternatives considered:

* Cypress – primarily focused on UI testing and less suitable for standalone API automation.
* Selenium – designed for browser automation rather than API testing.
* Pytest – a strong option for API testing, but Playwright offered a faster setup and reporting experience for this assignment.

## Implemented Test Cases

| Test Case                   | Description                                                |
| --------------------------- | ---------------------------------------------------------- |
| Health Check                | Verifies that the booking endpoint is available.           |
| Create and Retrieve Booking | Creates a booking and validates it can be retrieved.       |
| Update Booking              | Updates an existing booking and verifies changes.          |
| Partial Update Booking      | Updates a subset of booking fields.                        |
| Delete Booking              | Deletes a booking and verifies it is no longer accessible. |
| Create Auth Token           | Validates successful token generation.                     |
| Invalid Credentials         | Verifies authentication fails with invalid credentials.    |
| Update Without Token        | Verifies update operations require authorization.          |
| Delete Without Token        | Verifies delete operations require authorization.          |
| BUG-001 Validation Test     | Demonstrates that checkout can be earlier than check-in.   |
| BUG-002 Validation Test     | Demonstrates that negative booking prices are accepted.    |
