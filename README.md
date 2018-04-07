# Lightning Components

## Table of Content

## Resources 
* [Container Page](https://developer.salesforce.com/docs/atlas.en-us.210.0.pages.meta/pages/pages_html_container_page.htm)
* [harnessApp](https://crmsystems-dev-ed.lightning.force.com/c/harnessApp.app)
* [Configure Components for Lightning Pages and the Lightning App Builder](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/components_config_for_app_builder.htm)
* [Data Binding Between Components](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/expr_data_binding.htm)
* [Apex Integration Services](https://trailhead.salesforce.com/modules/apex_integration_services/units/apex_integration_rest_callouts)
* [Build a Restaurant-Locator Lightning Component](https://trailhead.salesforce.com/projects/workshop-lightning-restaurant-locator/steps/yelp_3)
* [Lightning Components Basics](https://trailhead.salesforce.com/modules/lex_dev_lc_basics/units/lex_dev_lc_basics_intro)
* [Lightning Data Service Basics](https://trailhead.salesforce.com/modules/lightning_data_service/units/lightning_data_service_handle_notifications)

## Lightning Components
* `<lightning:card>` creates a container around a group of information.
* `<lightning:formattedDateTime>` displays formatted date and time.
* `<lightning:relativeDateTime>` displays the relative time difference between the current time and the provided time.

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
* In traditional MVC, the model is a programmatic abstraction (usually a class) between the underlying data storage (usually a relational database) and the rest of the application. In Lightning Components, there’s no Apex class that directly stands in between @AuraEnabled controller methods and DML operations. But then again, sObjects are already an abstraction between your Apex code and the underlying storage layer. You can add calculation fields, validation logic, and even add fully programmatic behavior in the form of triggers.
* <b>action handler</b> - The combination of name-value pair and specific function signature.
### Events
User clicks a button that requires the component to retrieve data from the server:
* User clicks a button or interacts with a component, triggering a browser event. For example, you want to save data from the server when the button is clicked.
* The button click invokes a client-side JavaScript controller, which provides some custom logic before invoking a helper function.
* The JavaScript controller invokes a helper function. A helper function improves code reuse but it’s optional for this example.
* The helper function calls an Apex controller method and queues the action.
* The Apex method is invoked and data is returned.
* A JavaScript callback function is invoked when the Apex method completes.
* The JavaScript callback function evaluates logic and updates the component’s UI.

### Functions
The action handler name, followed by an anonymous function declaration. Function signature: while it’s not technically required, you should always declare your controller functions to take these three parameters:

* component—the component. In this case, it’s helloMessageInteractive.
* event—the event that caused the action handler to be called.
* helper—the component’s helper, another JavaScript resource of reusable functions.

```javascript
({
    handleClick: function(component, event, helper) {
        var btnClicked = event.getSource();         // the button
        var btnMessage = btnClicked.get("v.label"); // the button's label
        component.set("v.message", btnMessage);     // update our message
    }
})
```
* `handleClick` is connected to our `<lightning:button>` tag and its `onclick` attribute.
* The `event`, then, is someone clicking the button. Inside that `event` it has the notion of a `source`, the thing that generated the `event`, which is the button itself. So, calling `event.getSource()` gets us a reference to the specific `<lightning:button>` that was clicked.

* You can call `get()` on any component and provide the name of the attribute you want to retrieve, in the format `v.attributeName`. The result is the attribute value.

* This is a pattern you’ll repeat in virtually every component you create: get values from child components, maybe do some processing, and set values in the component itself.

* Adding `{!c.handleClick}` to the onclick attribute of a `<lightning:button>` component (1) wires it up to the specific action handler. Calling `component.set("v.message", newMessage)` (2) wires up the result of that action handler to the component’s message attribute. Which is itself wired up to the `{!v.message}` expression.

```javascript
    handleClick2: function(component, event, helper) {
        var newMessage = event.getSource().get("v.label");
        component.set("v.message", newMessage);
    },
    handleClick3: function(component, event, helper) {
        component.set("v.message", event.getSource().get("v.label"));
    }
```
