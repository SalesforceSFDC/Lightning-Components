# Handling Events with Client-Side Controllers

A client-side controller handles events within a component. It’s a JavaScript resource that defines the functions for all of the component’s actions.

A client-side controller is a JavaScript object in object-literal notation containing a map of name-value pairs. Each name corresponds to a client-side action. Its value is the function code associated with the action. Client-side controllers are surrounded by parentheses and curly braces.

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
```xml
<aura:component>
    <lightning:button label="Get Data" onclick="{!c.handleClick}"/>
</aura:component>
```
