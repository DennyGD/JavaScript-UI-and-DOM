(function() {
    function solve() {
        return function (selector, count) {
            var isString = typeof selector === 'string',
                $targetElement,
                $list;

            if (!isString) {
                throw new Error('Expected: selector to be string.');
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

