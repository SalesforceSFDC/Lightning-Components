# Handling Events with Client-Side Controllers

A client-side controller handles events within a component. It’s a JavaScript resource that defines the functions for all of the component’s actions.

A client-side controller is a JavaScript object in object-literal notation containing a map of name-value pairs. Each name corresponds to a client-side action. Its value is the function code associated with the action. Client-side controllers are surrounded by parentheses and curly braces.

* DOM events are mapped to Lightning events, since HTML tags are mapped to Lightning components.
* Any browser DOM element event starting with on, such as onclick or onkeypress, can be wired to a controller action. You can only wire browser events to controller actions.

```javascript
({
    myAction : function(cmp, event, helper) {
        // add code for the action
    },

    anotherAction : function(cmp, event, helper) {
        // add code for the action
    }
})
```

## Buttons

```xml
<aura:component>
    <aura:attribute name="text" type="String" default="Just a string. Waiting for change."/>
    <input type="button" value="Flawed HTML Button"
        onclick="alert('this will not work')"/>
    <br/>
    <lightning:button label="Framework Button" onclick="{!c.handleClick}"/>
    <br/>
    {!v.text}
</aura:component>
```
The "Get Data" button wires the onclick attribute in the <lightning:button> component to the handleClick action in the controller.
```xml
<aura:component>
    <lightning:button label="Get Data" onclick="{!c.handleClick}"/>
</aura:component>
```
### Client-side controller source
```javascript
({
    handleClick : function(cmp, event) {
        var attributeValue = cmp.get("v.text");
        console.log("current text: " + attributeValue);

        var target = event.getSource();
        cmp.set("v.text", target.get("v.label"));
    }
})
```
* The handleClick action uses `event.getSource()` to get the source component that fired this component event. In this case, the source component is the `<lightning:button>` in the markup.
* The code then sets the value of the text component attribute to the value of the button’s label attribute. The text component attribute is defined in the <aura:attribute> tag in the markup.

### Accessing Component Attributes
In the handleClick function, notice that the first argument to every action is the component to which the controller belongs. One of the most common things you'll want to do with this component is look at and change its attribute values.
* `cmp.get("v.attributeName")` returns the value of the attributeName attribute.
* `cmp.set("v.attributeName", "attribute value")` sets the value of the attributeName attribute.



