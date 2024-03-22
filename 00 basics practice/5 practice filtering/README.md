# Test for Angular Junior Web Developer

This is a test that Angular junior developers must fulfill successfully to move to the next round.
The time limit for the test is 30 minutes.

## Starting point

This project contains the product list component that displays the data. 

You must first build this application on your PC and be able to serve it.

To build and serve the app for local development simply utilize the `ng serve` command for a dev server. Navigate to `http://localhost:4200/`. 
The application will automatically reload if you change any of the source files.

## Requirements
- Modify the `product-list` component to show the entire list instead of  only the first item from the list
- Create a component named `product-filter` that displays two input fields for minimum and maximum price.
- Implement logic to capture user input from the price range fields.
- Update the product list component to receive the selected price range from product-filter.
- Filter the product list based on the selected price range. Only products with prices within the entered range should be displayed.
- Use Angular's built-in pipe mechanism to create a custom pipe for price formatting (optional).

### Bonus points

- Add visual highlighting to indicate the selected price range.
- Implement error handling for invalid user input.
