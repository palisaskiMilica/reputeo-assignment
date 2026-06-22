# Bug Reports

## BUG-01: API allows checkout date before checkin date

**Severity:** Medium  
**Priority:** High  
**Environment:** Public restful-booker API, https://restful-booker.herokuapp.com

**Preconditions:**  
API is available.

**Steps to Reproduce:**
1. Send `POST /booking`
2. Use a payload where `checkin` is after `checkout`
3. Observe the response

**Expected Result:**  
API should reject the request with a `400 Bad Request` validation error.

**Actual Result:**  
API returns `200 OK` and creates the booking.

**Evidence:**  
Automated test: `BUG-01: API allows checkout date before checkin date`

---

## BUG-02: API allows booking with negative total price

**Severity:** Medium  
**Priority:** High  
**Environment:** Public restful-booker API, https://restful-booker.herokuapp.com

**Preconditions:**  
API is available.

**Steps to Reproduce:**
1. Send `POST /booking`
2. Use `totalprice: -100`
3. Observe the response

**Expected Result:**  
API should reject the request with a `400 Bad Request` validation error.

**Actual Result:**  
API returns `200 OK` and creates the booking with a negative price.

**Evidence:**  
Automated test: `BUG-02: API allows booking with negative total price`