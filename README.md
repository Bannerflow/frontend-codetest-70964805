# BannerflowPokemonApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Initial requirements below 

# Gotta Code 'Em All!

Build a web application that uses the Pokemon API to display a list of Pokemon and their details. The application should have two pages: a list of Pokemon and a detail page for each individual Pokemon. The detail page should also display the selected Pokemon's evolutions, if any.

## API Documentation

- [Pokemon API Documentation](https://pokeapi.co/docs/v2)
- Endpoint for Pokemon List: `https://pokeapi.co/api/v2/pokemon`
- Endpoint for Pokemon Details: `https://pokeapi.co/api/v2/pokemon/{id or name}/`
- Endpoint for Pokemon Species: `https://pokeapi.co/api/v2/pokemon-species/{id}`
- Endpoint for Pokemon Evolution Chain: You retrieve this from the species endpoint evolution_chain.url

## Technical Requirements

- Use any TypeScript framework (Angular, Vue, React, as long as it is TypeScript).

## Acceptance Criteria

- A list of 10 Pokemon should be displayed on the list page, including their names and images.
- Users should be able to navigate in the list using next and previous buttons to get 10 new Pokemon.
- Clicking on a Pokemon in the list should navigate to the detail page, which should display the Pokemon's name, image, abilities (names), and evolutions (if any).
- If the selected Pokemon has evolutions, they should be displayed as a list with their images and names. Clicking on an evolution should navigate to its detail page.
- Users should be able to navigate between the list and detail pages using the browser's back and forward buttons.
- Users should be able to bookmark (web browser) or share a link of their favorite Pokemon's details page. 

## Tests

- Implement tests for bullet points 1 and 2 in the acceptance criteria.

You don't have to spend too much time on styling if you're limited on time. Just focus on building an application that will make even Pikachu proud.


## When Finished
You have been invited as an outside collaborator in this repository. 
Please send the code test to us by:
* Create a new branch in this repository
* Create a pull request from that branch to the main branch