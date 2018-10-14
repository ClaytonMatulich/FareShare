

var client = algoliasearch('HKUIGOP055', '9930bda364ccbdc03dbc5a82ce4b2d49');
var index = client.initIndex('cars');
var mpg;

$('#carMake').autocomplete({
    hint: false
}, [{
    source: $.fn.autocomplete.sources.hits(index, {
        hitsPerPage: 1
    }),
    displayKey: 'make',
    templates: {
        suggestion: function (suggestion) {
            mpg = suggestion.UHighway;
            console.log(mpg)
            return suggestion._highlightResult.make.value;
        }
    }
}]);

$('#carModel').autocomplete({
    hint: false
}, [{
    source: $.fn.autocomplete.sources.hits(index, {
        hitsPerPage: 1
    }),
    displayKey: 'model',
    templates: {
        suggestion: function (suggestion) {
            mpg = suggestion.UHighway;
            console.log(mpg)
            return suggestion._highlightResult.model.value;
        }
    }
}]);

$('#carYear').autocomplete({
    hint: false
}, [{
    source: $.fn.autocomplete.sources.hits(index, {
        hitsPerPage: 1
    }),
    displayKey: 'year',
    templates: {
        suggestion: function (suggestion) {
            mpg = suggestion.UHighway;
            console.log(mpg)
            return suggestion._highlightResult.year.value;
        }
    }
}]);

let getMpg = function() {
    return mpg;
}