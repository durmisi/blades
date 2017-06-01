import { Component } from '@angular/core';
 
@Component({
  selector: 'dropdown-picker-single',
  templateUrl: './dropdown-picker-single.component.html'
})
export class DropdownPickerSingleComponent {
  public items:Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
    'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
    'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
    'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
    'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
    'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
    'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
    'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
    'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
    'Zagreb', 'Zaragoza', 'Łódź'];
 
  private value:any = {};
  private _disabledV:string = '0';
  private disabled:boolean = false;
 
  private get disabledV():string {
    return this._disabledV;
  }
 
  private set disabledV(value:string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }
 
  public selected(value:any):void {
    console.log('Selected value is: ', value);
  }
 
  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }
 
  public typed(value:any):void {
    console.log('New search input: ', value);
  }
 
  public refreshValue(value:any):void {
    this.value = value;
  }
}

// AdPostApp.directive('dropdownPickerSingle',
// [
//     '$rootScope', '$http',
//     function ($rootScope, $http) {
//         return {
//             restrict: 'E',
//             templateUrl: '/Scripts/app/dropdown-picker-single.html',
//             scope: {
//                 model: '=',
//                 label: '=',
//                 css: '@',
//                 isRequired: '=',
//                 isDisabled: '=',
//                 showAdd: '=',
//                 onSelect: '=',
//                 onlyActive: '=',
//                 autoFocus: '=',
//                 lookupName: '=',
//                 postData: '='
//             },
//             controller: function ($scope) {
//                 var helpers = $rootScope.helpers;
//                 var settings = $rootScope.settings;

//                 $scope.controlName = new Date().getTime();
//                 $scope.getControl = function () {
//                     return $scope.$parent.form[$scope.controlName];
//                 };
//                 $scope.getControlName = function () {
//                     return $scope.controlName;
//                 };

//                 $scope.isDisabledIntl = false;
//                 if ($scope.isDisabled != undefined) {
//                     $scope.isDisabledIntl = $scope.isDisabled;
//                 };

//                 var lookupUrlBase = '/' + $scope.lookupName + '/Lookup';
//                 var lookupUrl = lookupUrlBase;

//                 $scope.isLoading = false;
//                 $scope.items = [];
//                 $scope.page = 1;
//                 $scope.hasNextChunk = true;
//                 $scope.pageSize = 50;

//                 $scope.fetch = function ($select, $event) {
//                     // no event means first load!
//                     if (!$event) {
//                         $scope.items = [];
//                         $scope.page = 1;
//                     } else {
//                         $event.stopPropagation();
//                         $event.preventDefault();
//                         $scope.page++;
//                     }

//                     if ($scope.loading)
//                         return;

//                     $scope.loading = true;

//                     $http.post(lookupUrl,
//                         {
//                             search: $select.search,
//                             page: $scope.page,
//                             pageSize: $scope.pageSize,
//                             onlyActive: $scope.onlyActive || true
//                         })
//                         .success(function (response) {
//                             $scope.hasNextChunk = $scope.page < response.TotalPages;
//                             $scope.items = $scope.items.concat(response.Items);
//                             $scope.loading = false;
//                         })
//                         .error(function () {
//                             $scope.loading = false;
//                         });
//                 };

//                 $scope.$watch('postData', function (newValue, oldValue) {
//                     if (newValue != undefined) {
//                         lookupUrl = lookupUrlBase + '?' + $.param(newValue);
//                         $scope.items = [];
//                         $scope.page = 1;
//                         $scope.isFirstClick = true;
//                     } else {
//                         lookupUrl = lookupUrlBase;
//                     }
//                 });

//                 $scope.$watch('isDisabled', function (newValue, oldValue) {
//                     if (newValue != undefined) {
//                         $scope.isDisabledIntl = newValue;
//                     } else {
//                         $scope.isDisabledIntl = false;
//                     }
//                 });
//             },
//             link: function (scope, elm, attrs, ctrl) {
//                 scope.onInit = function ($select) {
//                     scope.$selectIntl = $select;
//                 };

//                 scope.onClick = function($select) {
//                     if (scope.items.length == 0) {
//                         scope.fetch($select);
//                     }
//                 };

//                 //sync model with ui-select directive->to->controller
//                 scope.OnSelectIntl = function ($item, $model) {
//                     scope.model = $item;
//                     if (!!scope.onSelect) {
//                         scope.onSelect($item, $model);
//                     }
//                 };

//                 //sync model with ui-select controller->to->directive
//                 scope.$watch('model',
//                     function (newValue, oldValue) {
//                         scope.model = newValue;
//                         if (!!scope.$selectIntl)
//                             scope.$selectIntl.selected = newValue;
//                     });

//                 if (scope.showAdd) {
//                     scope.$on('on-' + $scope.lookupName + '-created', function (e, data) {
//                         if (!!data) {
//                             scope.model = data;
//                         }
//                         scope.fetch(scope.$selectIntl);
//                     });
//                 }
//             }
//         };
//     }
// ]);