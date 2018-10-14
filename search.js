// import * as algoliasearch from 'algoliasearch'; // When using TypeScript

// or just use algoliasearch if you are using a <script> tag
// if you are using AMD module loader, algoliasearch will not be defined in window,
// but in the AMD modules of the page

// var client = algoliasearch('HKUIGOP055', '9930bda364ccbdc03dbc5a82ce4b2d49');
// var index = client.initIndex('cars');

// autocomplete('#search-input', { hint: false }, [
//     {
//       source: autocomplete.sources.hits(index, { hitsPerPage: 5 }),
//       displayKey: 'make',
//       templates: {
//         suggestion: function(suggestion) {
//           return suggestion._highlightResult.make.value;
//         }
//       }
//     }
//   ]).on('autocomplete:selected', function(event, suggestion, dataset) {
//     console.log(suggestion, dataset);
//   });

// var client = algoliasearch('HKUIGOP055', '9930bda364ccbdc03dbc5a82ce4b2d49');
// var index = client.initIndex('cars');

// autocomplete('#carMake', {
//     hint: false
// }, [{
//     source: autocomplete.sources.hits(index, {
//         hitsPerPage: 1
//     }),
//     displayKey: 'make',
//     templates: {
//         suggestion: function (suggestion) {
//             return suggestion._highlightResult.make.value;
//         }
//     }
// }]).on('autocomplete:selected', function (event, suggestion, dataset) {
//     console.log(suggestion, dataset);
// });

// $('#carMake').autocomplete({ hint: false }, [
//     {
//       source: $.fn.autocomplete.sources.hits(index, { hitsPerPage: 5 }),
//       displayKey: 'make',
//       templates: {
//         suggestion: function(suggestion) {
//           return suggestion._highlightResult.make.value;
//         }
//       }
//     }
//   ]).on('autocomplete:selected', function(event, suggestion, dataset) {
//     console.log(suggestion, dataset);
//   });
var client = algoliasearch('HKUIGOP055', '9930bda364ccbdc03dbc5a82ce4b2d49');
var index = client.initIndex('cars');

$('#carMake').autocomplete({
    hint: false
}, [{
    source: $.fn.autocomplete.sources.hits(index, {
        hitsPerPage: 2
    }),
    displayKey: 'make',
    templates: {
        suggestion: function (suggestion) {
            return suggestion._highlightResult.make.value;
        }
    }
}]);

$('#carModel').autocomplete({
    hint: false
}, [{
    source: $.fn.autocomplete.sources.hits(index, {
        hitsPerPage: 2
    }),
    displayKey: 'model',
    templates: {
        suggestion: function (suggestion) {
            return suggestion._highlightResult.model.value;
        }
    }
}]);

$('#carYear').autocomplete({
    hint: false
}, [{
    source: $.fn.autocomplete.sources.hits(index, {
        hitsPerPage: 2
    }),
    displayKey: 'year',
    templates: {
        suggestion: function (suggestion) {
            return suggestion._highlightResult.year.value;
        }
    }
}]);