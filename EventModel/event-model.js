function solve(){
    return function (selector) {
        var isString = typeof selector === 'string',
            isDomElement = selector instanceof HTMLElement,
            targetElement,
            classButtonElements,
            lengthClassButtonElements;

        if (!isString && !isDomElement) {
            throw new Error('Expected: selector to be either string or DOM element.');
        }

        if (isString) {
            targetElement = document.getElementById(selector);
        } else {
            targetElement = selector;
        }

        if (targetElement == null) {
            throw new Error('Expected: selector to be ID of an existent DOM element or an existent DOM element.');
        }

        classButtonElements = targetElement.querySelectorAll('.button');
        lengthClassButtonElements = classButtonElements.length;

        for (var i = 0; i < lengthClassButtonElements; i += 1) {
            classButtonElements.item(i).textContent = 'hide';

            classButtonElements[i].addEventListener('click', onButtonClick, false);
        }

        function onButtonClick() {
            var that = this,
                nextElement = that.nextElementSibling,
                contentExists = false,
                buttonExists = false,
                contentElement,
                buttonElement,
                contentElementIsHidden;

            while (nextElement !== null) {
                if ((contentExists === false) && (nextElement.className === 'content')) {
                    contentElement = nextElement;
                    contentExists = true;
                } else if (contentExists && (buttonExists === false) && (nextElement.className === 'button')) {
                    buttonElement = nextElement;
                    buttonExists = true;
                    break;
                }

                nextElement = nextElement.nextElementSibling;
            }

            if (contentExists === false || buttonExists === false) {
                return;
            }

            contentElementIsHidden = isHidden(contentElement);

            if (contentElementIsHidden) {
                contentElement.style.display = '';
                that.textContent = 'hide';
            } else {
                contentElement.style.display = 'none';
                that.textContent = 'show';
            }

            function isHidden(el) {
                return el.style.display === 'none';
            }
        }
    }
}

// module.exports = solve;
