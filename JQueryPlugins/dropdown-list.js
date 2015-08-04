(function () {
    function solve(){
        return function(selector){
            var $targetElement = $(selector).hide(),
                $dropdownList = $('<div/>')
                    .addClass('dropdown-list'),
                $current = $('<div/>')
                    .addClass('current')
                    .attr('data-value', '')
                    .text('Select value'),
                $optionsContainer = $('<div/>')
                    .addClass('options-container')
                    .css({
                        position: 'absolute',
                        display: 'none'
                    }),
                $allOptions,
                $optionDiv;

            $($dropdownList).append($targetElement, $current, $optionsContainer);

            $allOptions = $targetElement.find('option');

            for (var i = 0, len = $allOptions.length; i < len; i += 1) {
                $optionDiv = $('<div/>')
                    .addClass('dropdown-item')
                    .attr('data-index', i)
                    .attr('data-value', $($allOptions[i]).attr('value'))
                    .text($($allOptions[i]).text());

                $($optionsContainer).append($optionDiv);
            }

            $current.on('click', function () {
                $optionsContainer.css('display', 'inline-block');
            });

            $optionsContainer.on('click', function (ev) {
                var $target = $(ev.target);

                $current.attr('data-value', $target.attr('data-value')).text($target.text());
                $targetElement.val($target.attr('data-value'));

                $optionsContainer.hide();
            });

            $('body').append($dropdownList);
        };
    }

// module.exports = solve;
}());

