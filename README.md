# Lightning Components
* [My Trailhead Playground](https://playful-badger-202545-dev-ed.lightning.force.com/one/one.app#eyJjb21wb25lbnREZWYiOiJvbmU6YWxvaGFQYWdlIiwiYXR0cmlidXRlcyI6eyJhZGRyZXNzIjoiL2FwZXgvdGhfY29uX2FwcF9fVGhIb21lcGFnZSJ9fQ%3D%3D)
## Table of Content

## Resources 
* [Container Page](https://developer.salesforce.com/docs/atlas.en-us.210.0.pages.meta/pages/pages_html_container_page.htm)
* [harnessApp](https://crmsystems-dev-ed.lightning.force.com/c/harnessApp.app)
* [Configure Components for Lightning Pages and the Lightning App Builder](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/components_config_for_app_builder.htm)
* [Data Binding Between Components](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/expr_data_binding.htm)
#
* [Apex Integration Services](https://trailhead.salesforce.com/modules/apex_integration_services/units/apex_integration_rest_callouts)
* [Build a Restaurant-Locator Lightning Component](https://trailhead.salesforce.com/projects/workshop-lightning-restaurant-locator/steps/yelp_3)
* [Lightning Components Basics](https://trailhead.salesforce.com/modules/lex_dev_lc_basics/units/lex_dev_lc_basics_intro)
* [Lightning Data Service Basics](https://trailhead.salesforce.com/modules/lightning_data_service/units/lightning_data_service_handle_notifications)
#
* [LIGHTNING DESIGN SYSTEM](https://www.lightningdesignsystem.com/)
* [Component Library](https://developer.salesforce.com/docs/component-library?page=componentsHome)
* [Handling Events with Client-Side Controllers](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm)
* [Incorporate Data from The Weather Company in Salesforce](https://trailhead.salesforce.com/projects/incorporate-ibm-weather-company-data/steps/lightning-component-display-weather)
#
* [dreamhouseapp](https://github.com/dreamhouseapp)
* [Lightning Component Wrapper Classes](http://bobbuzzard.blogspot.com/2015/12/lightning-component-wrapper-classes.html)
* [Keir Bowden](https://gist.github.com/keirbowden/4382adba5663dfb9d4f7)
* [keirbowden/AccountWrappersHelper.js](https://gist.github.com/keirbowden/12aeb7aa62f07132c2a7)
#
* [keirbowden/AccountWrappersController.js](https://gist.github.com/keirbowden/2acf95dd209d8d59203f)
* [Lightning Application Events](http://bobbuzzard.blogspot.co.uk/2015/05/lightning-component-events.html)
* [Lightning Components and JavaScript Libraries](http://bobbuzzard.blogspot.co.uk/2015/04/lightning-components-and-javascript.html)
* [Calling a Server-Side Action](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/controllers_server_actions_call.htm?search_text=action.setParams)
#
* [How to display a specific list in a component lightning?](https://salesforce.stackexchange.com/questions/174967/how-to-display-a-specific-list-in-a-component-lightning/174994)
* [Surface Data from IBM Watson Discovery in Salesforce](https://trailhead.salesforce.com/projects/surface-data-from-ibm-watson-discovery-in-salesforce/steps/add-customized-watson-discovery-search-to-account-records)
* [JSON2Apex](https://json2apex.herokuapp.com/)
* [Returning Data from an Apex Server-Side Controller](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/controllers_server_apex_returning_data.htm)
#
* [aura:storage use](https://salesforce.stackexchange.com/questions/147247/aurastorage-use)
* [Need to pass parameters to lightning-controller on Button click in Lightning Component](https://developer.salesforce.com/forums/?id=906F0000000kAn0IAE)
* [Compile Error: Missing return statement required return type](https://developer.salesforce.com/forums/?id=9060G000000UWZOQA4)

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

### Attributes 
* Attributes on components are like instance variables in objects. They’re a way to save values that change, and a way to name those value placeholders. 

* When an attribute of a component is an object or other structured data (that is, not a primitive value), access the values on that attribute using the same dot notation. For example, {!v.account.Id} accesses the Id field of an account record. For deeply nested objects and attributes, continue adding dots to traverse the structure and access the nested values.

*  The `<aura:iteration>` component repeats its body once per item in its items attribute

## Client (Javascript) Controllers
* c is the value provider for the component’s client-side controller, and handleClick is a function defined in that controller. 
* `{!c.handleClick}` is a reference to an action handler in the component’s controller.
* `controller`  defines app’s behavior when “things happen,” whereby “things” we mean user input, timer and other events, data updates, and so on.

### Events
User clicks a button that requires the component to retrieve data from the server:
* User clicks a button or interacts with a component, triggering a browser event. For example, you want to save data from the server when the button is clicked.
* The button click invokes a client-side JavaScript controller, which provides some custom logic before invoking a helper function.
* The JavaScript controller invokes a helper function. A helper function improves code reuse but it’s optional for this example.
* The helper function calls an Apex controller method and queues the action.
* The Apex method is invoked and data is returned.
* A JavaScript callback function is invoked when the Apex method completes.
* The JavaScript callback function evaluates logic and updates the component’s UI.

### Action Handlers
* <b>Action Handler</b> - name-value pair and specific function signature 

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
