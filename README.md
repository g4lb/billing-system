## Billing System 
The Billing System is designed to handle advanced payments and weekly debits for customers using the Processor black box. It provides an API to perform advances, schedule weekly debits, and generate daily transaction reports.

## Architecture Overview
The Billing System consists of the following components:

1. Classes and Components
2. Databases
3. Edge Cases
4. Flows

## Databases
The Billing System utilizes the following databases:
- Customer Database: Stores customer information, including account balance and payment history.
- Transaction Database: Stores transaction details such as transaction IDs and success/failure status.

## API Endpoints
The Billing System provides the following API endpoints:

1. perform_advance(dst_bank_account, amount)
   - Description: Credits the customer with the specified amount and schedules weekly debits for the repayment.
   - Parameters:
     - dst_bank_account: The destination bank account of the customer.
     - amount: The amount to be credited to the customer's account.
   - Returns: The transaction ID for the advance.

2. download_report
   - Description: Downloads a daily report of transaction results for the last 5 days.
   - Returns: The daily transaction report in the specified format.
  
3. perform_advance(dst_bank_account, amount)
   - Description: This API endpoint allows you to perform an advance payment for a customer. It credits the specified amount to the customer's account and schedules weekly debits for repayment. Provide the destination bank account and the amount to be credited in the request body.
   - Returns: transaction ID for the advance payment.
     
## Flows and Execution
1. Performing an Advance:
   - Verify customer eligibility and existence.
   - Create a transaction object with the direction set as "credit."
   - Invoke the Processor API to transfer the amount from a source bank account to the customer's account.
   - Store the transaction ID and status in the Transaction Database.
   - Update the customer's account balance in the Customer Database.
   - Return the transaction ID.

2. Weekly Debits:
   - Fetch the list of customers from the Customer Database.
   - For each customer:
     - Check if there is an outstanding balance to be repaid.
     - Calculate the weekly debit amount.
     - Create a transaction object with the direction set as "debit."
     - Invoke the Processor API to transfer the weekly debit amount.
     - Store the transaction ID and status in the Transaction Database.
     - Update the customer's account balance in the Customer Database.
     - Handle failed debits by rescheduling for the next due date.

3. Daily Report:
   - Retrieve relevant transactions from the Transaction Database based on the requested time frame.
   - Format the transaction data into the specified report format.
   - Return the daily transaction report.

## Edge Cases and Error Handling
1. Customer Existence: Validate customer existence before processing transactions.
2. Processor API Errors: Handle errors or exceptions during communication with the Processor API.
3. Insufficient Funds: Check customer account balance before debiting. Handle insufficient funds appropriately.
4. Transaction ID Collision: Ensure unique transaction IDs and handle collisions.
5. Error Logging: Implement error logging for debugging and auditing purposes.


## Conclusion
The Billing System provides a reliable solution for managing advanced payments and weekly debits
