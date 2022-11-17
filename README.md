# Tasks section:

- Create a new application route «/not-found» for a 404 Not Found page that tells your site viewers the requested page is unavailable


  ## Subscriptions page:

  - Change the way to open subscriptions page: it should be opened as «/subscriptions/{{userId}}» and showed subscriptions of provided user only

      - If user doesn’t have any subscriptions the message «No Subscriptions» should be shown instead of subscriptions table

  - Change the price format in the subscriptions table: it should be as «X.XX» - minimum 1 symbol in integer part and always 2 symbols in decimal part


  ## User selector page:

  - Add the information about the user’s ID in the selector’s options, it should be like: 
      "{{userId}}, {{userName}}, {{userAge}}"

  - Add the button «Check user’s subscriptions» that navigates user to the subscriptions page with the selected user ID «/subscriptions/{{selectedUserId}}»

      - Add a loader element with a text «Loading…»:
        - It should be rendered after user's click on the «Fetch Users» button (when request starts)
        - It should be destroyed after response will be retrieved
        - It should be replaced with the section that contains selector and "Check user’s subscriptions" button


# Questions section:

- Why the @HostBinding doesn’t apply styles class on the host component «subscriptions-table»?

- When the user clicks on the «Fetch Users» button only last click triggers the request (previous requests just cancelled). Why? How to change the behaviour to trigger request on every click?

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-wbzz2g)
