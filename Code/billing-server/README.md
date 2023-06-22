
# Billing System

This project is a billing system implementation in NestJS.

## Getting Started

### Prerequisites

To run this project, you need to have the following installed on your system:

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn (v1.22 or higher)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/g4lb/billing-system
   ```

2. Navigate to the project directory:

   ```
   cd billing-server
   ```

3. Install the dependencies:

   ```
   npm install
   ```

### Running the Application

1. Start the application:

   ```
   npm run start
   ```

   The application will start running on `http://localhost:3000`.

### Perform Advance API

The API endpoint for performing an advance transaction is:

```
POST /billing/perform_advance
```

Request Body:

```json
{
  "dst_bank_account": "<destination_bank_account>",
  "amount": <transaction_amount>
}
```

Replace `<destination_bank_account>` with the destination bank account and `<transaction_amount>` with the amount for the transaction.

The API will return the transaction ID on success.

### Further Customization

- Update the `Processor` class in `processor.ts` to integrate with the actual external processor API.
- Extend the functionality of the billing system as per your requirements by modifying the existing codebase.