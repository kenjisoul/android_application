/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/*******************************************************************************
 * Implementation code for procedure - 'procedure1'
 * 
 * 
 * @return - invocationResult
 */

var sql_zone = WL.Server.createSQLStatement("select * from r_zone");
function get_zone(param) {
	result_lists = WL.Server.invokeSQLStatement({
		preparedStatement : sql_zone,
		parameters : [ param ]
	});
	return result_lists;
}

var sql_customers = WL.Server.createSQLStatement("select * from customers");
function get_customers(param) {
	result_lists = WL.Server.invokeSQLStatement({
		preparedStatement : sql_customers,
		parameters : [ param ]
	});
	return result_lists;
}

var sql_restaurant = WL.Server.createSQLStatement("select * from restaurant");
function get_restaurant(param) {
	result_lists = WL.Server.invokeSQLStatement({
		preparedStatement : sql_restaurant,
		parameters : [ param ]
	});
	return result_lists;
}

var sql_details = WL.Server.createSQLStatement("select * from r_details");
function get_detials(param) {
	result_lists = WL.Server.invokeSQLStatement({
		preparedStatement : sql_details,
		parameters : [ param ]
	});
	return result_lists;
}

var sql_restaurant_times = WL.Server.createSQLStatement("select * from restaurant where R_open <= ? and R_close >= ?");
function get_restaurant_times(time1, time2) {
	result_lists = WL.Server.invokeSQLStatement({
		preparedStatement : sql_restaurant_times,
		parameters : [time1, time2],
	});
	if (result_lists.resultSet.length < 1 && result_lists.isSuccessful == true){
		result_lists.isSuccessful = false;
	}
	else if(result_lists.resultSet.length >= 1 && result_lists.isSuccessful == true){
		result_lists.isSuccessful = true;
	}
	return result_lists;
}
