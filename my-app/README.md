Welcome to the app 
- main file is layout.js
- layout.js is wrapped 
- layout.js is wrapped with ConvexClientProvider whihc is a backend service 
- layout.js is wrapped with ClerkProvider which is a authentication service
- what ever you create inside the app folder will be a route for example created a folder called dashboard now in that created a page.js file which will be the route for the dashboard nwo in url if we search /dashboard it will show the page.js file

- Used Authenticated and unauthenticated Routes using convex 

- used use client 



Grouping the url ?
- if user want to grp the url like signin and signup we can use a folder called (auth) and inside that folder we can create signin and signup pages and the url will be /auth/signin and /auth/signup



- what is Optional Catch-All?
Optional Catch-All Route: [[...slug]] matches zero, one, or many URL segments.
Used when one page must handle multiple dynamic paths like /blog, /blog/ai/growth.
params.slug becomes an array ([], ["ai"], ["ai","growth"]).
Makes routing cleaner — no need to create several folders or nested routes.
Perfect for blogs, docs, filters, multi-step flows, and dynamic categories. 



