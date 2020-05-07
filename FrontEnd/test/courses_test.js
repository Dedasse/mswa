function callback(req)
{
    var response = eval("("+req.responseText+")");
    response = response.response;

    createElementsFromJSON(response, document.body);
}

function createElementsFromJSON(json, parent)
{
    for(var i in json)
    {
        var object = json[i];

        var obj = document.createElement(object.element);

        for(var tag in object)
            if (tag!="children"&&tag!="element")
                obj.setAttribute(tag, object[tag]);

        parent.appendChild(obj);

        if (typeof(object.children)=="object")
            createElementsFromJSON(object.children, obj);
    }
}

callback()