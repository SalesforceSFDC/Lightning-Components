Apex controller must follow these requirements:

* `@AuraEnabled`
* Methods must be static and marked public or global. Non-static methods aren’t supported.
* If a method returns an object, instance methods that retrieve the value of the object’s instance field must be public.
* Don’t store component state in your controller (client-side or server-side). Store state in a component’s client-side attributes instead.

### Returning Data from an Apex Server-Side Controller
* Return results from a server-side controller to a client-side controller using the <b>return statement</b>. 
* Results data must be serializable into JSON format.
* Return data types can be any of the following:
    * Simple—String, Integer, and so on. 
    * sObject—standard and custom sObjects are both supported. 
    * Apex—an instance of an Apex class. (Most often a custom class.) 
    * Collection—a collection of any of the other types. 
