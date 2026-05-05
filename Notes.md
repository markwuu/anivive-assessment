1. Any decisions you made that were not obvious from the code N/A

2. What you would do differently with more time What I would have done
   differently if I had more time would be to update redux to handle
   notification state, so it is not only available within the Notification
   components. Then, I would have freedom to add the unread notification count
   anywhere on the app. For example, it could live on the header or the sidebar
   and clicking on an unread notification would cause updates to the store and
   the UI would update appropriately. State would be available in those higher
   level components.

3. Anything you did not get to I did not use a useEffect in the notifications
   component. My implementation did not require it because clicking on a
   notification updates the state, which causes a refresh of the component
   displaying the unread notification count.
