"use strict";

function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread()
  );
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (
    Symbol.iterator in Object(iter) ||
    Object.prototype.toString.call(iter) === "[object Arguments]"
  )
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var fetch = require("node-fetch");

var queryString = require("query-string");

exports.createSchemaCustomization = function(_ref) {
  var actions = _ref.actions;
  var createTypes = actions.createTypes;
  var typeDefs = `
    scalar Long
    type MeetupPhoto {
      base_url: String
      highres_link: String
      id: Int
      photo_link: String
      thumb_link: String
      type: String
    }


    type MeetupEventHost {
      host_count: Int
      id: ID!
      intro: String
      join_date: Long
      name: String
      photo: MeetupPhoto
    }
    type MeetupEventFee {
      accepts: String
      amount: Float
      currency: String
      description: String
      label: String
      required: Boolean
    }
    type MeetupEventFeeOptionCurrency {
      code: String
      default: Boolean!
    }
    type MeetupEventFeeOption {
      currencies: [MeetupEventFeeOptionCurrency]
      is_setup: Boolean
      setup_link: String
      type: String
    }
    type MeetupEventGroupCategory {
      id: Int
      name: String
      shortname: String
      sort_name: String
    }
    type MeetupEventGroupJoinInfo {
      photo_req: Boolean
      questions: [String]
      questions_req: Boolean
    }
    type MeetupEventGroupMembershipDues {
      currency: String
      fee: Float
      fee_desc: String
      methods: String
      reasons: [String]
      reasons_other: String
      refund_policy: String
      required: Boolean
      required_to: String
      self_payment_required: Boolean
      trial_days: Int
    }
    type MeetupEventGroupMetaCategory {
      best_topics: String
      category_ids: [Int]
      id: Int
      name: String
      photo: String
      shortname: String
      sort_name: String
    }
    type MeetupEventGroupPhotoGradient {
      composite_color: String
      dark_color: String
      id: ID!
      light_color: String
    }
    type MeetupEventGroupSelf {
      actions: [String]
      membership_dues: String
      profile: String
      status: String
    }
    type MeetupEventGroupTopic {
      id: Int
      lang: String
      name: String
      urlkey: String
    }
    type MeetupEventGroup {
      category: MeetupEventGroupCategory
      country: String
      id: Int
      join_info: MeetupEventGroupJoinInfo
      join_mode: String
      key_photo: MeetupPhoto
      lat: Float
      localized_country_name: String
      lon: Float
      membership_dues: MeetupEventGroupMembershipDues
      meta_category: MeetupEventGroupMetaCategory
      name: String
      past_event_count: Int
      photo: MeetupPhoto
      photo_gradient: MeetupEventGroupPhotoGradient
      pro_network: String
      region: String
      self: MeetupEventGroupSelf
      state: String
      timezone: String
      topics: [MeetupEventGroupTopic]
      urlname: String
      visibility: String
      who: String
    }
    type MeetupEventPhotoAlbumEvent {
      id: String
      name: String
      no_rsvp_count: Int
      time: Long
      utc_offset: Long
      waitlist_count: Int
      yes_rsvp_count: Int
    }
    type MeetupEventPhotoAlbum {
      event: MeetupEventPhotoAlbumEvent
      id: ID!
      photo_count: Int
      photo_sample: MeetupPhoto
      title: String
    }
    type MeetupEventRsvpRulesRefundPolicy {
      days: Int
      notes: String
      policies: [String]
    }
    type MeetupEventRsvpRules {
      close_time: Long
      closed: Boolean
      guest_limit: Int
      open_time: Long
      refund_policy: MeetupEventRsvpRulesRefundPolicy
      waitlisting: String
    }
    type MeetupEventRsvpSampleMember {
      bio: String
      event_context: String
      id: ID!
      name: String
      photo: String
      role: String
      self: String
      title: String
    }
    type MeetupEventRsvpSample {
      created: Long
      id: ID!
      member: MeetupEventRsvpSampleMember
      updated: Long
    }
    type MeetupEventSelfRsvp {
      answers: [String]
      guests: Int
      response: String
    }
    type MeetupEventSelf {
      actions: [String]
      pay_status: String
      role: String
      rsvp: MeetupEventSelfRsvp
    }
    type MeetupEventMonthly {
      day_of_week: Int
      interval: Int
      week_of_month: Int
    }
    type MeetupEventWeekly {
      day_of_week: Int
      interval: Int
    }
    type MeetupEventSeries {
      description: String
      end_date: Long
      id: ID!
      monthly: MeetupEventMonthly
      start_date: Long
      template_event_id: ID
      weekly: MeetupEventWeekly
    }
    type MeetupEventSurveyQuestion {
      id: Int
      question: String
    }
    type MeetupEventVenue {
      address_1: String
      address_2: String
      address_3: String
      city: String
      country: String
      id: ID
      lat: Float
      localized_country_name: String
      lon: Float
      name: String
      phone: String
      repinned: Boolean
      state: String
      zip: String
    }
    type MeetupEvent implements Node {
      member_pay_fee: Boolean!

      attendance_count: Int
      attendance_sample: MeetupEventRsvpSampleMember
      attendee_sample: MeetupEventRsvpSample
      comment_count: Int
      created: Long
      date_in_series_pattern: Boolean!
      description: String!
      description_images: [String]
      duration: Int!
      event_hosts: [MeetupEventHost]
      featured: Boolean
      featured_photo: MeetupPhoto
      fee: MeetupEventFee
      fee_options: [MeetupEventFeeOption]
      group: MeetupEventGroupCategory
      how_to_find_us: String
      id: ID!
      link: String!
      local_date: String
      local_time: String!
      manual_attendance_count: Int
      name: String!
      past_event_count_inclusive: Int
      photo_album: MeetupEventPhotoAlbum
      plain_text_description: String
      plain_text_no_images_description: String
      rsvp_close_offset: String
      rsvp_limit: Int
      rsvp_open_offset: String
      rsvp_rules: MeetupEventRsvpRules
      rsvp_sample: MeetupEventRsvpSample
      rsvpable: Boolean
      rsvpable_after_join: Boolean
      saved: Boolean
      self: MeetupEventSelf
      series: MeetupEventSeries
      short_link: String
      simple_html_description: String
      status: String!
      survey_questions: [MeetupEventSurveyQuestion]
      time: Long!
      updated: Long
      utc_offset: Int!
      venue: MeetupEventVenue
      venue_visibility: String
      visibility: String
      waitlist_count: Int
      web_actions: String
      why: String
      yes_rsvp_count: Int
    }
  `;
  createTypes(typeDefs);
};

exports.sourceNodes = function(_ref2, configOptions) {
  var actions = _ref2.actions,
    createNodeId = _ref2.createNodeId,
    createContentDigest = _ref2.createContentDigest;
  var createNode = actions.createNode; // Gatsby adds a configOption that's not needed for this plugin, delete it

  delete configOptions.plugins; // Processes a Meetup Group

  var processGroup = function processGroup(group) {
    var nodeId = createNodeId(`meetup-group-${group.id}`);
    var nodeData = Object.assign(
      {},
      group,
      _objectSpread({}, group, {
        id: nodeId,
        parent: null,
        children: [],
        internal: {
          type: `MeetupGroup`,
          contentDigest: createContentDigest(group),
        },
      }),
    );
    return nodeData;
  }; // Processes a Meetup Event as a child of a Meetup Group

  var processEvent = function processEvent(event, parent) {
    var nodeId = createNodeId(`meetup-event-${event.id}`);
    var nodeData = Object.assign(
      {},
      event,
      _objectSpread({}, event, {
        id: nodeId,
        meetupId: event.id,
        parent,
        children: [],
        internal: {
          type: `MeetupEvent`,
          contentDigest: createContentDigest(event),
        },
      }),
    );
    return nodeData;
  };

  var groupUrlName = configOptions.groupUrlName,
    paramEventsOptions = configOptions.eventsOptions,
    apiOptions = _objectWithoutProperties(configOptions, [
      "groupUrlName",
      "eventsOptions",
    ]);

  var eventsOptions = paramEventsOptions ? paramEventsOptions : [apiOptions]; // Convert the options object into a query string

  var queryStringOptions = queryString.stringify(apiOptions);
  var apiGroupUrl = `https://api.meetup.com/${groupUrlName}?${queryStringOptions}`;
  var allApiEventsUrl = eventsOptions.map(function(eventApiOptions) {
    // Convert the options object into a query string
    var queryStringEventOptions = queryString.stringify(eventApiOptions);
    return `https://api.meetup.com/${groupUrlName}/events?${queryStringEventOptions}`;
  });
  var allApiUrls = [apiGroupUrl].concat(_toConsumableArray(allApiEventsUrl)); // Gatsby expects sourceNodes to return a promise

  return (
    // Fetch a response from the apiUrl
    Promise.all(
      allApiUrls.map(function(url) {
        return fetch(url);
      }),
    ) // Parse the response as JSON
      .then(function(responses) {
        return Promise.all(
          responses.map(function(response) {
            return response.json();
          }),
        );
      }) // Process the JSON data into a node
      .then(function(dataArray) {
        var _dataArray = _toArray(dataArray),
          groupData = _dataArray[0],
          eventsDataSeparated = _dataArray.slice(1);

        var eventData = eventsDataSeparated.reduce(function(acc, events) {
          return [].concat(_toConsumableArray(acc), _toConsumableArray(events));
        }, []); // For each query result (or 'hit')

        var groupNode = processGroup(groupData);
        groupNode.events___NODE = Object.values(eventData).map(function(event) {
          var nodeData = processEvent(event, groupNode.id);
          createNode(nodeData);
          return nodeData.id;
        });
        createNode(groupNode);
      })
  );
};
