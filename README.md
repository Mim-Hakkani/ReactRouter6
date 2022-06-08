# Getting Started React Router 6

Live link : 

## step 1

install react router version 6 ,,read documentation ,,,lets Go ..

### step 2

create a navagition page and add Link used react router and give some styles simple 

###  step 3

use and import browseRouter ,routes , route from react-router-6 and add the navigation in browser router ,,, and also add the compoent in in Route path and element section ...with 404 pages also

<Route path="/" element={<ComponentName/>}>



### working with nested routes  
This example is shown by products routes 
step 1 : create link in parent pages and setup the bottom in <outlet /> because this is the parent section.
step 2 : put it in route section in nestedly 
step 3: done 
code in link : 
            <nav style={{padding:'10px',display:'flex'}}>
                <Link to="feature" style={{textDecoration:'none',padding:'7px'}}>Featured</Link>
                <Link to="new" style={{textDecoration:'none',padding:'7px'}}>New</Link>
            </nav>

            <Outlet />
code in main : 
        <Route path="products" element={<Products /> } >
            <Route path="feature" element={<FeatureProducts />}/>
            <Route path="new" element={<NewProducts />}/>
        </Route>
        
### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
