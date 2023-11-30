# angular-core-allstrata-jayson-application
Angular Core Allstrata Jayson Application

Arvin Jayson Tamayo Castro
==========================

Completed
---------

*   1\. Create a new project using the ASP.NET Core Angular project template.
*   2\. Initialise a git repository for the project.
*   3\. In the Angular application, update the home component template by removing the existing content, then add your name to the template. As you progress through this exercise please document any commands that you run from the command line and any design decisions or justifications in the home component template.
*   4\. In the API, delete the weather forecast controller.
*   5\. In the API, create a new controller with one endpoint that takes a numerical amount of money and returns the string description. e.g. an input value of 123.45 returns the string "One hundred and twenty three dollars and forty five cents"
*   6\. In the Angular application, delete the counter and fetch data components.
*   7\. Update the Angular application to use the latest version of Angular.
*   8\. In the Angular application, create a new component that takes a numerical value from the route parameters and calls the API created above then displays the result on the page.
*   9\. In the Angular application, create a new component that contains a form with one input for entering a numerical amount of money and a button to lodge the form. When the form is lodged it will navigate to the component created above and put the value of the input into the route.
*   10\. Commit all pending changes, then zip up the source files (excluding third party packages) and email it to the recruiter that sent you this request

* * *

Angular
-------

*   Added **money-converter**, **money-form** components
*   Added some form of **animation** for aesthetic
*   **app.modules** Add new route on for money-converter and money-processor
*   **environment.ts** Add apiRoot for APIBASEURL
*   **tsconfig.json** Add "paths": "@env/\*": \[ "environments/\*" \] ,
*   **package.json** Change port to 55555
*   **nav-menu-component.css** Add new routes

* * *

.NET Core
---------

*   Add new **MoneyController** Create API Endpoint for GET
*   **MoneyConverterHelper** Create Logic mostly from web, tweaked a bit for cents value and spacing
*   **Program.cs** Add UseCORS for core api to accept uiapp