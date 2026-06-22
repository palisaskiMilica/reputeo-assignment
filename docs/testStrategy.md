# Test Strategy

## Scope

The goal of this project is to validate the core functionality of the Restful Booker API.

Covered areas:

* Authentication
* Booking creation
* Booking retrieval
* Booking update
* Partial booking update
* Booking deletion
* Authorization validation
* Basic input validation checks

## Test Approach

A combination of positive, negative and exploratory API testing was used.

Positive scenarios verify that valid requests return expected responses.

Negative scenarios verify that protected endpoints cannot be accessed without proper authentication.

Exploratory testing was used to identify potential validation gaps and document defects.

## Automation Structure

The project follows a simple structure:

* `api/` - API client methods
* `data/` - reusable test data
* `helpers/` - reusable test setup helpers
* `tests/` - Playwright test suites
* `docs/` - test documentation and bug reports

## Defects Found

During exploratory testing, two validation issues were identified:

1. API allows checkout dates before check-in dates.
2. API allows negative booking prices.

Both issues are documented in `docs/bugs.md`.

## Limitations

The public Restful Booker instance is shared and may occasionally behave inconsistently due to external usage.

The focus of this assignment was API functionality and validation rather than performance or security testing.
