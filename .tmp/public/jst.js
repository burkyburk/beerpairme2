this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/beerdetails.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="beerdetails">\n  <div class="detailsandimage">\n    <!-- Start of the accordion -->\n    <div class="container">\n      <!-- Item 1 -->\n      <div class="accordion">\n        <label class="accordionitem">\n          <h2 ng-bind="beerdetails.name">\n          </h2>\n        </label>\n      </div>\n\n      <!-- Item 2 -->\n      <div class="accordion">\n        <label class="accordionitem">\n          <h2 ng-bind="beerdetails.breweries[0].name">\n          </h2>\n        </label>\n      </div>\n\n      <!-- Item 3 -->\n      <div class="accordion">\n        <label class="accordionitem">\n          <h2 ng-bind="beerdetails.style.name">\n          </h2>\n        </label>\n      </div>\n\n      <!-- Item 4 -->\n      <div class="accordion">\n        <label class="accordionitem">\n          <h2> {{beerdetails.abv}} ABV\n          </h2>\n        </label>\n      </div>\n\n      <!-- Item 5 -->\n      <div class="accordion">\n        <label class="accordionitem">\n          <h2> {{beerdetails.ibu}} IBU\n          </h2>\n        </label>\n      </div>\n\n\n    </div>\n\n\n\n\n    <div class="imagebox">\n      <img src="{{ beerdetails.labels.medium }}">\n    </div>\n  </div>\n\n\n  <!-- Item 6 -->\n  <div class="accordion2">\n    <label for="tq" class="accordionitem">\n      <h2 ng-bind="beerdetails.description" </h2>\n    </label>\n  </div>\n\n  <div class="pairingsbox">\n    <div class="pairings">Pairing Info: {{beerstyle.pairings}}\n    </div>\n    <br>\n    <a ng-href="{{beerstyle.url}}">Recommended Recipe(s)</a>\n\n  </div>\n</div>\n';

}
return __p
};

this["JST"]["assets/templates/home.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="search" ng-controller="homeCtrl">\n  <form ng-submit="searchSubmit(searchParam)">\n    <div class="box">\n      <div class="container-1">\n        <input ng-model="searchParam" type="search" id="search" results=20 placeholder="Search for any beer or brewery..." />\n        <br>\n        <h4 ng-bind="errorMsg" class="errorMsg" Search requires two or more characters.</h4>\n      </div>\n    </div>\n  </form>\n  <table ng-show="showTable" ng-table="tableParams" class="search-table">\n    <tr ng-repeat="beer in $data" ui-sref=\'beerdetails({beerId:beer.id})\'>\n        <td data-title="\'Name\'" sortable="\'name\'">\n                {{beer.name}}\n            </td>\n        <td data-title="\'Brewery\'" sortable="\'breweries[0].name\'">\n                {{beer.breweries[0].name}}\n            </td>\n        <td data-title="\'Style\'" sortable="\'style.name\'">\n                    {{beer.style.name}}\n                </td>\n        <td data-title="\'ABV\'" sortable="\'abv\'">\n                        {{beer.abv}}\n                    </td>\n    </tr>\n  </table>\n</section>\n\n\n<div id="bubbles">\n        <div class="bubble x1"></div>\n        <div class="bubble x2"></div>\n        <div class="bubble x3"></div>\n        <div class="bubble x5"></div>\n        <div class="bubble x6"></div>\n        <div class="bubble x7"></div>\n        <div class="bubble x8"></div>\n        <div class="bubble x10"></div>\n</div>\n';

}
return __p
};

this["JST"]["assets/templates/info.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '';

}
return __p
};

this["JST"]["assets/templates/newpairings.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<table class="newtable">\n  <thead>\n    <th>Style</th>\n    <th>Pairing Info</th>\n    <th>Link</th>\n    <th>Date Added</th>\n  </thead>\n  <tbody>\n    <tr class="selected" ng-repeat="pairing in newpairings">\n      <td>{{ pairing.style }}</td>\n      <td>{{ pairing.pairings }}</td>\n      <td><a ng-href="{{pairing.url}}">New Recipe(s)</a></td>\n      <td>{{ pairing.createdAt }}</td>\n  </tbody>\n</table>\n';

}
return __p
};

this["JST"]["assets/templates/submit.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += 'submit form where user can add recipe/pairing\n';

}
return __p
};