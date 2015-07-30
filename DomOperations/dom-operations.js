module.exports = function () {
   return function (element, contents) {
        var args = [].slice.apply(arguments),
            expectedParametersCount = 2,
            elementIsString,
            elementIsDomElement,
            targetElement,
            contentToAdd;

        if (args.length !== expectedParametersCount) {
            throw new Error('Invalid number of arguments. Expected: 2.');
        }

        elementIsString = typeof element == 'string';
        elementIsDomElement = element instanceof HTMLElement;

        if (elementIsString === false && elementIsDomElement === false) {
            throw new Error('Expected: element to be of type string or DOM element.');
        }

        if (contentsAreValid(contents) === false) {
            throw new Error('Expected: contents to be an array containing only string and/or numbers.');
        }

        if (elementIsString) {
            targetElement = document.getElementById(element);
        }

        if (elementIsDomElement) {
            targetElement = element;
        }

        if (targetElement == null) {
            throw new Error('No DOM element with such ID found.');
        }

        // quick fix
        if (contents.length < 1) {
            targetElement.innerHTML = '';
            return;
        }

        contentToAdd = generateHtmlContent();
        targetElement.innerHTML = '';
        targetElement.appendChild(contentToAdd);

        function contentsAreValid(arr) {
            var areValid;

            if (Array.isArray(arr) === false) {
                areValid = false;
                return areValid;
            }

            // http://www.diveintojavascript.com/core-javascript-reference/the-isnan-function
            areValid = arr.every(function (item) {
                var isOK = (typeof item === 'string') || (typeof item === 'number');
               return isOK;
            });

            return areValid;
        }

        function generateHtmlContent() {
            var generatedContent = document.createDocumentFragment(),
                defaultElement = document.createElement('div'),
                copyElement,
                contentsLength = contents.length;

            for (var i = 0; i < contentsLength; i += 1) {
                copyElement = defaultElement.cloneNode(true);
                copyElement.innerHTML = contents[i];
                generatedContent.appendChild(copyElement);
            }

            return generatedContent;
        }
    }
};

// test('container', [[], 1, 'String']);

