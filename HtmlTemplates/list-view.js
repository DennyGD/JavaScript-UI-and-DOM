(function () {
    function solve(){
        return function(){
            $.fn.listview = function(data){
                var that = this,
                    dataTemplateValue = that.attr('data-template'),
                    predefinedTemplate = document.getElementById(dataTemplateValue).innerHTML,
                    result = '{{#each this}}' + predefinedTemplate + '{{/each}}',
                    compiled;

                compiled = Handlebars.compile(result);
                that.append(compiled(data));
                return that;
            };
        };
    }

// module.exports = solve;
}());

//var books = [
//        {id: 1, title: 'First title'},
//        {id: 2, title: 'Second title'}
//    ];
//
//$('#books-list').listview(books);