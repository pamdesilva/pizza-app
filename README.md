# React Pizza Store 🍕 🍕 🍕

A simple front-end pizza store built using React, Semantic UI React and a dash of Stripe Elements. I did this project to get more comfortable with React. [View demo](https://slices.pamela.io/).

## Features ✨

* **Postcode validator on Home page** - only accepts one postcode for now, 'LDN 123', but this can be expanded in the future.
* **Shopping cart** - see and edit your order.
* **Checkout page** - for the purposes of this demo website, you can click on 'Fill with fake customer' to populate fields. Stripe Elements was used to create the Payment section's UI (unfortunately pre-filling info is a big no-no here), but clicking 'Use test card' will pop up a modal with details from a test card that you can copy & use.
* **Order confirmation page** displays customer's first name and address and a button to start the fun all over again.

## Bugs to squash 🐛

* Payment page: 'Payment' button requires two clicks before it proceeds to Confirmed page. This has to do with the way the customer details and payment details form validation is currently wired.
* Page routing: Users shouldn't be able to go 'back' to checkout page once they're on the order confirmation page.

## Features to add/improve 🔮

* Data currently persists thanks to local storage magic. It really should be hooked up to an external database like Firebase.
* Login via Auth0 and create customer accounts.
* Collect payment token via Stripe elements (right now it just displays UI and doesn't have any functionality).
* Option to order a customised pizza.
* Filter pizzas for dietary requirements: vegan, vegetarian, dairy-free etc.

## Get up and running 🚀

    yarn install
    yarn start
    yarn test
    yarn build
