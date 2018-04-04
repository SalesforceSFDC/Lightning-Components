# Lightning Components

* [Container Page](https://developer.salesforce.com/docs/atlas.en-us.210.0.pages.meta/pages/pages_html_container_page.htm)
* [harnessApp](https://crmsystems-dev-ed.lightning.force.com/c/harnessApp.app)

## LockerService: Making Lightning Components More Secure
* solution to make Lightning components more secure and restrict JavaScript’s unfettered access

### LockerService’s features also enable:
* Client-side API versioning
* Faster security review (AppExchange)
* Better JavaScript development practices
* Easy updates to security features and policies

* Value providers are a way to group, encapsulate, and access related data. 
* `c` is the value provider for the component’s client-side controller, and `handleClick` is a function defined in that controller. So, `{!c.handleClick}` is a reference to an action handler in the component’s controller.
* controller is basically a collection of code that defines your app’s behavior when “things happen,” whereby “things” we mean user input, timer and other events, data updates, and so on. 
* for Lightning Components, a controller is a resource in a component bundle that holds the action handlers for that component. And action handlers are just JavaScript functions with a particular function signature.
