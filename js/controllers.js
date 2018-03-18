/**
 *
 * Responsive website using AngularJS
 * http://www.script-tutorials.com/responsive-website-using-angularjs/
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Script Tutorials
 * http://www.script-tutorials.com/
 */

'use strict';

// optional controllers
function HomeCtrl($scope, $rootScope, $http) {
	$rootScope.main = {
      show_title: false,
      title: "My Write-Up"
    }
}

function UdacityProjectCtrl($scope, $rootScope, $http, $route) {
	console.log("route  ",$route);

	$scope.curr_view = '';

	var project_map = {
		"intro_to_ml": "Into to Machine Learning"
	}

	$scope.click_view = function (view_type, location_id) {
		if(view_type === $scope.curr_view) {
			$scope.curr_view = '';
		} else {
			$scope.curr_view = view_type;
			$('#'+location_id).ready(function() {
			  $('pre code').each(function(i, block) {
			    hljs.highlightBlock(block);
			  });
			});
		}


	}

	console.log("sd --> ",project_map[$route.current.params.projectId])


	$rootScope.main = {
      show_title: true,
      title: project_map[$route.current.params.projectId]
    }

    
}

function ProjectCtrl($scope, $rootScope, $http, $route) {
	// body...
}

function PrivacyCtrl($scope, $http, $timeout) {
}

function AboutCtrl($scope, $http, $timeout) {
}

function UdacityCtrl($scope, $rootScope, $http) {

	$rootScope.main = {
      show_title: true,
      title: "Udacity Courses"
    }

    $scope.courses = [{
    	name: 'Intro to Machine Learning',
    	code: 'intro_to_ml'
    }]
}