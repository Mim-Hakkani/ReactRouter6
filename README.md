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
This example is shown by products routes \
step 1 : create link in parent pages and setup the bottom in <outlet /> because this is the parent section.\
step 2 : put it in route section in nestedly \
step 3: done \
code in link :\
            <nav style={{padding:'10px',display:'flex'}}>\
                <Link to="feature" style={{textDecoration:'none',padding:'7px'}}>Featured</Link>\
                <Link to="new" style={{textDecoration:'none',padding:'7px'}}>New</Link>\
            </nav>\

            <Outlet />\
code in main :\ 
        <Route path="products" element={<Products /> } >\
            <Route path="feature" element={<FeatureProducts />}/>\
            <Route path="new" element={<NewProducts />}/>\
        </Route>

### Index Routing 

It is used as nested routing ,,, it's speciallity is  when we go to the nested pages (products pages ) after click we see the feture and new products but we want to see ,,that among two products one is automaticcay shown ,,,in that case we use index route ...<br/>
Note : index routes always used in route componets /
        <Route path="products" element={<Products /> } >\
           <Route index element={<FeatureProducts />} />
            <Route path="feature" element={<FeatureProducts />}/>\
            <Route path="new" element={<NewProducts />}/>\
        </Route>\

### Dynamic Routes 
  #### When more than two pages is needed then we used in dynamic routing .
  * Example : normal way
         <Route path="users" element={<Users /> }/>/
         <Route path="users/:userId" element={<UserDetails /> }/>/
  * if used in user/name is working when user/anyname is not match when it is working if some dynamic name is matched then used in 2nd way
         <Route path="users" element={<Users /> }/>/
         <Route path="users/:userId" element={<UserDetails /> }/>/
         <Route path="users/admin" element={<Admin /> }/>/



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
