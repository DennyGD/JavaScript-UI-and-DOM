(function() {
    function solve() {
        return function (selector, count) {
            var isString = typeof selector === 'string',
                isDomElement = selector instanceof HTMLElement,
                $targetElement,
                $list;

            if (!isString && !isDomElement) {
                throw new Error('Expected: selector to be either string or DOM element.');
            }

            if (selector[0] !== '#') {
                selector = '#' + selector;
            }

            $targetElement = $(selector);

            if ($targetElement == null) {
                return;
            }

            if ($.isNumeric(count) === false || count < 1) {
                throw new Error('Expected: count to be a numeric value greater than 0.');
            }

            $list = $('<ul/>').addClass('items-list');
            count *= 1;

            for (var i = 0; i < count; i += 1) {
                var $li = $('<li />')
                    .addClass('list-item')
                    .text('List item #' + i);

                $($li).appendTo($list);
            }

            $($list).appendTo($targetElement);
        };
    }

    // module.exports = solve;
}());

