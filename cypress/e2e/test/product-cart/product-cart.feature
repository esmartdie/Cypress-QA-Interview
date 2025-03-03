Feature: Product Cart Operations

  Scenario: Add and remove product from cart
    Given They visit the home page
    When They log in using valid credentials
    When They click on a product
    When They add a product to the cart
    Then They should see the product in the cart
    When They remove the product from the cart
    Then The cart should be empty
    
  Scenario: Complete purchase
    Given They visit the home page
    When They log in using valid credentials
    When They click on a product
    When They add a product to the cart
    Then They should see the product in the cart
    When They place the order
    Then They see the confirmation message