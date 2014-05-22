function wlCommonInit() {

}

function time_validate(action) {
	input_time = $('#time').val();
	console.log("Input: " + input_time)
	var invocationData = {
		adapter : "sql_connections",
		procedure : "get_restaurant_times",
		parameters : [ input_time, input_time ],
	}
	var options = {
		onSuccess : function(result) {
			get_time_validate_success(result, input_time, action);
		},
		onFailure : function(result) {
			get_time_validate_failure();
		},
	}
	WL.Client.invokeProcedure(invocationData, options);
}

function get_time_validate_success(result, input_time, action) {
	console.log("Inside get_time_validate_success " + result);
	var html = '';
	if (result.invocationResult.isSuccessful) {
		var result_lists = result.invocationResult.resultSet;
		var i = 0;
		for (i = 0; i < result_lists.length; i++) {
			var current_result = result_lists[i];
			html = html + '<p>' + current_result.C_name + '</p>';
		}
	}
	$("#show").html("<br/>" + html);
}

function get_time_validate_failure(result) {
	$("#show").html("<br/><font color='red'>Restaurant closed time.</span>");
}

function get_zone(div_content) {
	var invocationData = {
		adapter : "sql_connections",
		procedure : "get_zone",
		parameters : [],
	}
	var options = {
		onSuccess : function(result) {
			get_zone_success(result, div_content);
		},
		onFailure : get_zone_failure,
	}
	WL.Client.invokeProcedure(invocationData, options);
}

function get_zone_success(result, div_content) {
	console.log("Inside get_zone_success " + result);
	var html = '';
	if (result.invocationResult.isSuccessful) {
		var result_lists = result.invocationResult.resultSet;
		var i = 0;
		for (i = 0; i < result_lists.length; i++) {
			var current_result = result_lists[i];
			html = html + '<p>' + current_result.zone + '</p>';
		}
	}
	$("#" + div_content).html(html);
}

function get_zone_failure(result) {
	console.log("Inside get_zone_failure " + result);
}

function get_customers(div_content) {
	var invocationData = {
		adapter : "sql_connections",
		procedure : "get_customers",
		parameters : [],
	}

	var options = {
		onSuccess : function(result) {
			get_customers_success(result, div_content);
		},
		onFailure : get_customers_failure,
	}

	WL.Client.invokeProcedure(invocationData, options);
}

function get_customers_success(result, div_content) {
	console.log("Inside get_customers_success " + result);
	var html = '';
	if (result.invocationResult.isSuccessful) {
		var result_lists = result.invocationResult.resultSet;
		var i = 0;
		for (i = 0; i < result_lists.length; i++) {
			var current_result = result_lists[i];
			html = html + '<p>' + current_result.C_name + '</p>';
		}
	}
	$("#" + div_content).html(html);
}

function get_customers_failure(result) {
	console.log("Inside get_customers_failure " + result);
}