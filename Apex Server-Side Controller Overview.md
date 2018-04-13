Apex controller must follow these requirements:

* `@AuraEnabled`
* Methods must be static and marked public or global. Non-static methods aren’t supported.
* If a method returns an object, instance methods that retrieve the value of the object’s instance field must be public.
