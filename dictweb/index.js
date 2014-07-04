angular.module('dict', [])
	.controller('DictationController', function($scope){
		$scope.dic = "";
		attnamenec = false;
		
		this.expected = [];
		
		$scope.parseInput = function(_e) {
			$scope.expected =[];
			try {
				var parsedinput = parser.parse($scope.dic + ' ');
				$scope.comment = "Input Parsed Successfully!"
				$scope.expected.push("Success!");
				
				//console.log(parsedinput.length);
				var res = parsedinput[parsedinput.length - 1];
				var attr = res.attributes[res.attributes.length - 1];
				//console.log(attr);
				if (attr != undefined) {
					var prop = attr.properties;
					if (Object.keys(prop).length == 0) {
						if (attr.quant != "one" && attr.quant != "many") {
							$scope.expected.push("which");						
						}

					} else {
						$scope.expected.push("and / or");
					}
				} else if (res.canbe.length == 0) {
					if (res.abstract == undefined && res.audited == undefined && res.alias == undefined && res.haspropertiesof.length == 0) {
						and = "'";
					} else {
						and = "'and ";
					}
					$scope.expected.push(and + "is abstract'");
					$scope.expected.push(and + "is audited'");
					$scope.expected.push(and + "has properties from/of'");
					$scope.expected.push(and + "is like a'");
					$scope.expected.push("-------- ");
					$scope.expected.push("'has'");
					$scope.expected.push("'belongs'");
					$scope.expected.push("'can be'");
				} else {
					$scope.expected.push("'has'");
					$scope.expected.push("'belongs'");				
					$scope.expected.push("'can be'");		
				}
				
				//console.log("prop");
				

			} catch (exception) {
				//offset, line, column, expected, found, message	
				//this.expected = exception.expected;
				
				$scope.offset = exception.offset;
				$scope.line = exception.line;
				$scope.col = exception.column;
				$scope.exp = exception.expected;
				$scope.found = exception.found;
				$scope.comment = exception.message;
				
				for (var i=0; i < exception.expected.length; i++) {
					$scope.expected.push(exception.expected[i].description);
				}
			}
			
			return true;
		}
		
	});