(function () {
    function solve() {
        return function (selector) {
            var isString = $.type(selector) === 'string',
                isJQuery = selector.jquery === true,
                $targetElement;

            if (isString === false && isJQuery === false) {
                throw new Error('Expected: selector to be string or jQuery object.');
            }

            if (isString) {
                $targetElement = selector[0] === '#' ? $(selector) : $('#' + selector);
            } else {
                $targetElement = selector;
            }

            if ($targetElement.length === 0) {
                throw new Error('Expected: selector to exist in DOM.');
            }

            $targetElement.find('.button').text('hide');
            $targetElement.on('click', $('.button'), onClickEvent);

            function onClickEvent(ev) {
                var $that = $(ev.target),
                    $contentElement = $that.nextAll('.content:first'),
                    $buttonElement = $contentElement.nextAll('.button:first');

                if (($contentElement.length === 0) || ($buttonElement.length === 0)) {
                    return;
                }

                if ($contentElement.css('display') === 'none') {
                    $contentElement.css('display', '');
                    $that.text('hide');
                } else {
                    $contentElement.css('display', 'none');
                    $that.text('show');
                }
            }
        };
    }

    // module.exports = solve;
}());
