* [Lightning Components Developer Guide](https://resources.docs.salesforce.com/sfdc/pdf/lightning.pdf)
* Component events are handled by the component itself or a component that instantiates or contains the component.
* Application events are handled by all components that are listening to the event. These events are essentially a traditional
publish-subscribe model.
* [Aura Framework](https://github.com/forcedotcom/aura)
#
* implements="force:appHostable" - tab
* To retrieve a component’s global ID in JavaScript, use the getGlobalId() function:
    * `var globalId = cmp.getGlobalId();`
