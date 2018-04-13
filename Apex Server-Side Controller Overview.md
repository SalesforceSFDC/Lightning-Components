Apex controller must follow these requirements:

* `@AuraEnabled`
* Methods must be static and marked public or global. Non-static methods aren’t supported.
* If a method returns an object, instance methods that retrieve the value of the object’s instance field must be public.
* Don’t store component state in your controller (client-side or server-side). Store state in a component’s client-side attributes instead.

### Returning Data from an Apex Server-Side Controller
* Return results from a server-side controller to a client-side controller using the <b>return statement</b>. 
* Results data must be serializable into JSON format.
