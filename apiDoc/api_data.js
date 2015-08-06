define({ "api": [
  {
    "type": "post",
    "url": "/api/events",
    "title": "upload single event",
    "name": "AddEvent",
    "group": "Events",
    "description": "<p>Save a single event entry</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Success message</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "newEvent",
            "description": "<p>Saved event data</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/events.js",
    "groupTitle": "Events"
  },
  {
    "type": "post",
    "url": "/api/events/bulk",
    "title": "Upload multiple events",
    "name": "AddEvents",
    "group": "Events",
    "description": "<p>Uses the direct collection insert method instead of looping data array and firing save method on each entry.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>success message</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "resp",
            "description": "<p>array of events added</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/events.js",
    "groupTitle": "Events"
  },
  {
    "type": "get",
    "url": "/api/events",
    "title": "Get events in date order",
    "name": "GetEvent",
    "group": "Events",
    "description": "<p>Get list of events, according to query parameters. A total count of records is also included in the response to aid with pagination.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": true,
            "field": "skip",
            "description": "<p>Optional Number of records to skip on query</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": true,
            "field": "limit",
            "description": "<p>Optional Number of records returned</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "events",
            "description": "<p>Array of query results</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "totalRecords",
            "description": "<p>Number of total records</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/events.js",
    "groupTitle": "Events"
  },
  {
    "type": "delete",
    "url": "/api/events/:event_id",
    "title": "delete event by ID",
    "name": "deleteEvent",
    "group": "Events",
    "description": "<p>Delete event per ID</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "Unique",
            "description": "<p>event ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Success message</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/events.js",
    "groupTitle": "Events"
  },
  {
    "type": "get",
    "url": "/api/events/filter/:event_type",
    "title": "",
    "name": "filterEvents",
    "group": "Events",
    "description": "<p>Filter events as per event type Could be extended to filter any field in the event object</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "Event",
            "description": "<p>type string</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "events",
            "description": "<p>Filtered event objects</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "totalRecords",
            "description": "<p>Number of filtered records</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/events.js",
    "groupTitle": "Events"
  },
  {
    "type": "get",
    "url": "/api/events/:event_id",
    "title": "Get event by ID",
    "name": "getEvent",
    "group": "Events",
    "description": "<p>Get an event, per event ID</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "Unique",
            "description": "<p>event ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "event",
            "description": "<p>Event record</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/events.js",
    "groupTitle": "Events"
  },
  {
    "type": "put",
    "url": "/api/events/:event_id",
    "title": "Update event by ID",
    "name": "updateEvent",
    "group": "Events",
    "description": "<p>Update event per ID</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "Unique",
            "description": "<p>event ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Success message</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/events.js",
    "groupTitle": "Events"
  },
  {
    "type": "post",
    "url": "/preflog",
    "title": "Upload performance log entry",
    "name": "AddPerformanceLog",
    "group": "Performance_Log",
    "description": "<p>Add ySlow performance log</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>success message</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/perfLogs.js",
    "groupTitle": "Performance_Log"
  },
  {
    "type": "get",
    "url": "/perfLog/:categoryName",
    "title": "Get filtered performance log",
    "name": "GetFilteredPerformanceLog",
    "group": "Performance_Log",
    "description": "<p>Get performance log filtered by category name</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "categoryName",
            "description": "<p>logs data</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/perfLogs.js",
    "groupTitle": "Performance_Log"
  }
] });