#!/usr/local/bin/node

var express = require("express");
var app = express();

app.get('/mobile-charts/rest/hello.txt', function(req, res){
    res.send('Hello World');
});

app.get('/mobile-charts/rest/charts', function(req, res){
    var json = [
        {"id": "2","title": "Pages per Time and Operators","subTitle": "Shows how many pages have been printed per Time and Operators","thumbnailURL": "/mobile-charts/res/thumb-charts/1.jpg","defaultChartsURL": "/mobile-charts/rest/chart/1/default"},
        {"id": "2","title": "Feet per Devices and Time","subTitle": "Shows how many feet have been printed per Devices and Time","thumbnailURL": "/mobile-charts/res/thumb-charts/2.jpg","defaultChartsURL": "/mobile-charts/rest/chart/2/default"},
        {"id": "3","title": "Status per Jobs and Device","subTitle": "Shows how many Jobs have been reached a certain Status","thumbnailURL": "/mobile-charts/res/thumb-charts/3.jpg","defaultChartsURL": "/mobile-charts/rest/chart/3/default"},
        {"id": "4","title": "Pages per Time and Operators","subTitle": "Shows how many pages have been printed per Time and Operators","thumbnailURL": "/mobile-charts/res/thumb-charts/1.jpg","defaultChartsURL": "/mobile-charts/rest/chart/1/default"},
        {"id": "5","title": "Feet per Devices and Time","subTitle": "Shows how many feet have been printed per Devices and Time","thumbnailURL": "/mobile-charts/res/thumb-charts/2.jpg","defaultChartsURL": "/mobile-charts/rest/chart/2/default"},
        {"id": "6","title": "Status per Jobs","subTitle": "Shows how many Jobs have been reached a certain Status","thumbnailURL": "/mobile-charts/res/thumb-charts/1.jpg","defaultChartsURL": "/mobile-charts/rest/chart/3/default"}
    ]
    res.send(json);
});

app.get('/mobile-charts/rest/chart/1/default', function(req, res){
    var json = {
        "dataChangeTimeout": 1800,
        "title": "Pages per Time and Operators",
        "subtitle": "Shows how many pages have been printed per Time and Operators",
        "defaultCharts": {
            "Today": "/mobile-charts/rest/chart/1/hours-of-day/now",
            "Yesterday": "/mobile-charts/rest/chart/1/hours-of-day/2012-12-04",
            "This Week": "/mobile-charts/rest/chart/1/days-of-week/now",
            "Last Week": "/mobile-charts/rest/chart/1/days-of-week/2012-W48",
            "This Month": "/mobile-charts/rest/chart/1/days-of-month/now",
            "Today's Shifts": "/mobile-charts/rest/chart/1/shifts-of-day/now",
            "This Month's Shifts": "/mobile-charts/rest/chart/1/shifts-of-month/now",
            "This Week's Shifts": "/mobile-charts/rest/chart/1/shifts-of-week/now",
            "This Year's Shifts": "/mobile-charts/rest/chart/1/shifts-of-year/now"
        }
    }
    res.send(json);
});

app.get('/mobile-charts/rest/chart/1/hours-of-day/now', function(req, res){
    var json = {"id": "1",
        "yTitle": "Number of Pages",
        "xTitle": "Today: 2012-12-05",
        "sTitle": "Operators",
        "title": "Pages per Time and Operators",
        "subtitle": "Shows how many pages have been printed per Time and Operators",
        "dataChangeTimeout":10,
        "startDate": "2012-12-05 00:00",
        "endDate": "2012-12-06 00:00",
        "currentChartURL":"/mobile-charts/rest/chart/2/hours-of-day/now",
        "prevChartURL": "/mobile-charts/rest/chart/1/hours-of-day/2012-12-04",
        "nextChartURL": "",
        "upChartURL": "/mobile-charts/rest/chart/1/days-of-month/now",
        "chartData" : {
            "categories": {"0": "","1": "","2": "","3": "","4": "","5": "","6": "","7": "","8": "","9": "","10": "","11": "","12": "","13": "","14": "","15": "","16": "","17": "","18": "","19": "","20": "","21": "","22": "","23": ""},
            "series" : {"operator": "","applic": "","operator2": "","service": ""},
            "seriesData": {
                "operator": [25,38,12,55,20,75,32,19,50,45,40,38,12,55,65,68,70,65,50,75,80,100,25],
                "applic": [25,38,19,50,45,40,38,12,55,65,68,12,55,20,50,75,80,100,75,32,70,65,25],
                "operator2": [25,38,12,55,20,12,55,65,75,80,100,75,32,19,50,45,40,68,70,65,50,38,25],
                "service": [32,19,50,25,38,12,55,55,65,20,75,45,40,38,12,68,70,65,50,75,80,100,25]
    }}}
    res.send(json);
});

app.get('/mobile-charts/rest/chart/1/hours-of-day/2012-12-04', function(req, res){
    var json = {"id": "1",
        "yTitle": "Number of Pages",
        "xTitle": "Day 2012-12-04",
        "sTitle": "Operators",
        "title": "Pages per Time and Operators",
        "subtitle": "Shows how many pages have been printed per Time and Operators",
        "dataChangeTimeout":10,
        "startDate": "2012-12-04 00:00",
        "endDate": "2012-12-05 00:00",
        "currentChartURL":"/mobile-charts/rest/chart/2/hours-of-day/2012-12-04",
        "prevChartURL": "/mobile-charts/rest/chart/1/hours-of-day/2012-12-03",
        "nextChartURL": "/mobile-charts/rest/chart/1/hours-of-day/now",
        "upChartURL": "/mobile-charts/rest/chart/1/days-of-month/now",
        "chartData" : {
            "categories": {"0": "","1": "","2": "","3": "","4": "","5": "","6": "","7": "","8": "","9": "","10": "","11": "","12": "","13": "","14": "","15": "","16": "","17": "","18": "","19": "","20": "","21": "","22": "","23": ""},
            "series" : {"operator": "","applic": "","operator2": "","service": ""},"seriesData": {
                "operator": [12,55,65,68,70,20,75,32,65,50,75,25,38,12,55,19,50,45,40,38,80,100,25],
                "applic": [25,38,19,50,45,40,38,12,55,65,68,12,55,20,50,75,80,100,75,32,70,65,25],
                "operator2": [25,38,12,55,20,12,55,65,75,80,100,75,32,19,50,45,40,68,70,65,50,38,25],
                "service": [32,19,50,25,38,12,55,55,65,20,75,45,40,38,12,68,70,65,50,75,80,100,25]
    }}}
    setTimeout((function() {
        res.send(json);
    }), 3000);
});

app.get('/mobile-charts/rest/chart/1/days-of-week/now', function(req, res){
    var json = {
        "id": "1",
        "yTitle": "Number of Pages",
        "xTitle": "This Week: W49 2012",
        "sTitle": "Operators",
        "title": "Pages per Time and Operators",
        "subtitle": "Shows how many pages have been printed per Time and Operators",
        "dataChangeTimeout":10,
        "startDate": "2012-12-03 00:00",
        "endDate": "2012-12-10 00:00",
        "currentChartURL":"/mobile-charts/rest/chart/1/days-of-week/now",
        "prevChartURL": "/mobile-charts/rest/chart/1/days-of-week/2012-W48",
        "nextChartURL": "",
        "upChartURL": "/mobile-charts/rest/chart/1/weeks-of-year/now",
        "chartData" : {
            "categories": {"Monday": "","Tuesday": "","Wednesday": "","Thursday": "","Friday": "","Saturday": "","Sunday": ""},
            "series" : {"operator": "","applic": "","operator2": "","service": ""},
            "seriesData": {
                "operator": [0,0,0,0,25,38,12],
                "applic": [0,0,0,0,65,68,12],
                "operator2": [0,0,0,0,80,100,75],
                "service": [0,0,0,0,25,38,12]
    }}}
    res.send(json);
});

app.get('/mobile-charts/rest/chart/1/days-of-week/2012-W48', function(req, res){
    var json = {
        "id": "1",
        "yTitle": "Number of Pages",
        "xTitle": "Week 48 2012",
        "sTitle": "Operators",
        "title": "Pages per Time and Operators",
        "subtitle": "Shows how many pages have been printed per Time and Operators",
        "dataChangeTimeout":10,
        "startDate": "2012-11-26 00:00",
        "endDate": "2012-12-03 00:00",
        "currentChartURL":"/mobile-charts/rest/chart/1/days-of-week/2012-48",
        "prevChartURL": "/mobile-charts/rest/chart/1/days-of-week/2012-47",
        "nextChartURL": "/mobile-charts/rest/chart/1/days-of-week/now",
        "upChartURL": "/mobile-charts/rest/chart/1/weeks-of-year/now",
        "chartData" : {
            "categories": {"Monday": "","Tuesday": "","Wednesday": "","Thursday": "","Friday": "","Saturday": "","Sunday": ""},
            "series" : {"operator": "","applic": "","operator2": "","service": ""},
            "seriesData": {
                "operator": [25,38,12,55,20,75,32],
                "applic": [65,68,12,55,20,50,75],
                "operator2": [80,100,75,32,19,50,45],
                "service": [25,38,12,55,55,65,20]
    }}}
    res.send(json);
});

app.get('/mobile-charts/rest/chart/1/days-of-month/now', function(req, res){
    var json = {
        "id": "1",
        "yTitle": "Number of Pages",
        "xTitle": "This Month: December 2012",
        "sTitle": "Operators",
        "title": "Pages per Time and Operators",
        "subtitle": "Shows how many pages have been printed per Time and Operators",
        "dataChangeTimeout":10,
        "startDate": "2012-12-01 00:00",
        "endDate": "2013-01-01 00:00",
        "currentChartURL":"/mobile-charts/rest/chart/1/days-of-month/now",
        "prevChartURL": "/mobile-charts/rest/chart/1/days-of-month/2012-11",
        "nextChartURL": "",
        "upChartURL": "/mobile-charts/rest/chart/1/month-of-year/now",
        "chartData" : {
            "categories": {"1": "/mobile-charts/rest/chart/1/hours-of-day/2012-12-01","2": "/mobile-charts/rest/chart/1/hours-of-day/2012-12-02","3": "/mobile-charts/rest/chart/1/hours-of-day/2012-12-03","4": "/mobile-charts/rest/chart/1/hours-of-day/2012-12-04","5": "/mobile-charts/rest/chart/1/hours-of-day/now","6": "","7": "","8": "","9": "","10": "","11": "","12": "","13": "","14": "","15": "","16": "","17": "","18": "","19": "","20": "","21": "","22": "","23": "","24": "","25": "","26": "","27": "","28": "","29": "","30": "","31": ""},
            "series" : {"operator": "","applic": "","operator2": "","service": ""},
            "seriesData": {
                "operator": [25,38,12,55,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                "applic": [25,31,22,75,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                "operator2": [25,38,12,55,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                "service": [25,38,12,55,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }}}
    res.send(json);
});

app.get('/mobile-charts/rest/chart/1/days-of-month/2012-11', function(req, res){
    var json = {
        "id": "1",
        "title": "Pages per Time and Operators",
        "subtitle": "Shows how many pages have been printed per Time and Operators",
        "yTitle": "Number of Pages",
        "xTitle": "November 2012",
        "sTitle": "Operators",
        "dataChangeTimeout":10,
        "startDate": "2012-11-01 00:00",
        "endDate": "2012-12-01 00:00",
        "currentChartURL":"/mobile-charts/rest/chart/1/days-of-month/2012-11",
        "prevChartURL": "/mobile-charts/rest/chart/1/days-of-month/2012-10",
        "nextChartURL": "/mobile-charts/rest/chart/1/days-of-month/now",
        "upChartURL": "/mobile-charts/rest/chart/1/month-of-year/now",
        "chartData" : {
            "categories": {"1": "/mobile-charts/rest/chart/1/hours-of-day/2012-11-01","2": "/mobile-charts/rest/chart/1/hours-of-day/2012-11-02","3": "/mobile-charts/rest/chart/1/hours-of-day/2012-11-03","4": "/mobile-charts/rest/chart/1/hours-of-day/2012-11-04","5": "/mobile-charts/rest/chart/1/hours-of-day/2012-11-05","6": "/mobile-charts/rest/chart/1/hours-of-day/2012-11-06","7": "/mobile-charts/rest/chart/1/hours-of-day/2012-11-07","8": "/mobile-charts/rest/chart/1/hours-of-day/2012-11-08","9": "/mobile-charts/rest/chart/1/hours-of-day/2012-11-09","10": "/mobile-charts/rest/chart/1/hours-of-day/2012-11-10","11": "/mobile-charts/rest/chart/1/hours-of-day/2012-11-11","12": "/mobile-charts/rest/chart/1/hours-of-day/2012-11-12","13": "/mobile-charts/rest/chart/1/hours-of-day/2012-11-13","14": "/mobile-charts/rest/chart/1/hours-of-day/2012-11-14","15": "/mobile-charts/rest/chart/1/hours-of-day/2012-11-15","16": "/mobile-charts/rest/chart/1/hours-of-day/2012-11-16","17": "/mobile-charts/rest/chart/1/hours-of-day/2012-11-17","18": "/mobile-charts/rest/chart/1/hours-of-day/2012-11-18","19": "/mobile-charts/rest/chart/1/hours-of-day/2012-11-19","20": "/mobile-charts/rest/chart/1/hours-of-day/2012-11-20","21": "/mobile-charts/rest/chart/1/hours-of-day/2012-11-21","22": "/mobile-charts/rest/chart/1/hours-of-day/2012-11-22","23": "/mobile-charts/rest/chart/1/hours-of-day/2012-11-23","24": "/mobile-charts/rest/chart/1/hours-of-day/2012-11-24","25": "/mobile-charts/rest/chart/1/hours-of-day/2012-11-25","26": "/mobile-charts/rest/chart/1/hours-of-day/2012-11-26","27": "/mobile-charts/rest/chart/1/hours-of-day/2012-11-27","28": "/mobile-charts/rest/chart/1/hours-of-day/2012-11-28","29": "/mobile-charts/rest/chart/1/hours-of-day/2012-11-29","30": "/mobile-charts/rest/chart/1/hours-of-day/2012-11-30"},
            "series" : {"operator": "","applic": "","operator2": "","service": ""},
            "seriesData": {
                "operator": [25,38,12,55,20,35,48,50,19,73,25,38,12,55,20,35,48,50,19,73,25,38,12,55,20,35,48,50,19,73],
                "applic": [20,35,48,50,19,73,25,38,12,25,38,12,55,20,35,48,50,19,73,25,38,12,55,55,20,35,48,50,19,73],
                "operator2": [19,73,25,38,12,55,19,73,25,20,35,48,25,38,12,55,20,35,48,50,38,12,55,20,35,48,50,50,19,73,],
                "service": [50,19,73,25,38,12,55,55,20,35,48,50,19,73,20,35,48,25,38,12,55,20,35,48,50,19,73,25,38,12]
    }}}
    res.send(json);
});

app.listen(3000);
console.log('Listening on port 3000');
