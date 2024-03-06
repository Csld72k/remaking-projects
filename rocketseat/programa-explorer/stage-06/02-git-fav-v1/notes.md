# Notes
* element.append() method >-> The Element.append() method inserts a set of Node objects or string objects after the last child of the Element. String objects are inserted as equivalent Text nodes.

Differences from Node.appendChild():

  Element.append() allows you to also append string objects, whereas Node.appendChild() only accepts Node objects.
  Element.append() has no return value, whereas Node.appendChild() returns the appended Node object.
  Element.append() can append several nodes and strings, whereas Node.appendChild() can only append one node.

* JSON.parse() >->  The JSON.parse() static method parses a JSON string, constructing the JavaScript value or object described by the string. An optional reviver function can be provided to perform a transformation on the resulting object before it is returned.

* Response: json() >->  The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON.

Note that despite the method being named json(), the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.

* fetch() >-> The global fetch() method starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.

The promise resolves to the Response object representing the response to your request.

A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.

The fetch() method is controlled by the connect-src directive of Content Security Policy rather than the directive of the resources it's retrieving.

* Promise.then() >-> The then() method of Promise instances takes up to two arguments: callback functions for the fulfilled and rejected cases of the Promise. It immediately returns an equivalent Promise object, allowing you to chain calls to other promise methods.

* document.createElement() >-> Em um documento HTML, o método Document.createElement() cria o elemento HTML especificado ou um HTMLUnknownElement (en-US) se o nome do elemento dado não for conhecido.

Em um documento XUL, o elemento XUL especificado é criado.

Em outros documentos, ele cria um elemento com um namespace URI null.