import "core-js/stable";
import "regenerator-runtime/runtime";
import "number-to-locale-string";
import "metabase/css/index.css";

window.MetabaseBootstrap = {
  "enable-xrays": true,
  "available-timezones": [
    "GMT",
    "UTC",
    "US/Alaska",
    "US/Arizona",
    "US/Central",
    "US/Eastern",
    "US/Hawaii",
    "US/Mountain",
    "US/Pacific",
    "America/Costa_Rica",
  ],
  "availabl-locales": [["en", "English"]],
  // NOTE: update this when updating types.clj
  types: {
    "type/DruidHyperUnique": ["type/*"],
    "type/Longitude": ["type/Coordinate"],
    "type/TimeWithTZ": ["type/Time"],
    "type/IPAddress": ["type/TextLike"],
    "type/TimeWithLocalTZ": ["type/TimeWithTZ"],
    "type/URL": ["type/Text"],
    "type/BigInteger": ["type/Integer"],
    "type/Category": ["type/Special"],
    "type/Owner": ["type/User"],
    "type/TextLike": ["type/*"],
    "type/Discount": ["type/Currency"],
    "type/UNIXTimestampSeconds": ["type/UNIXTimestamp"],
    "type/PostgresEnum": ["type/Text"],
    "type/Time": ["type/Temporal"],
    "type/Integer": ["type/Number"],
    "type/Currency": ["type/Float"],
    "type/Author": ["type/User"],
    "type/Cost": ["type/Currency"],
    "type/Quantity": ["type/Integer"],
    "type/Instant": ["type/DateTimeWithLocalTZ"],
    "type/Number": ["type/*"],
    "type/JoinTimestamp": ["type/DateTime"],
    "type/Subscription": ["type/Category"],
    "type/DeletionTime": ["type/Date", "type/DeletionTimestamp"],
    "type/State": ["type/Category", "type/Address", "type/Text"],
    "type/CancelationDate": ["type/Date", "type/CancelationTimestamp"],
    "type/CancelationTime": ["type/Date", "type/CancelationTimestamp"],
    "type/UpdatedDate": ["type/Date", "type/UpdatedTimestamp"],
    "type/UpdatedTime": ["type/Date", "type/UpdatedTimestamp"],
    "type/UpdatedTimestamp": ["type/DateTime"],
    "type/DeletionDate": ["type/Date", "type/DeletionTimestamp"],
    "type/DateTimeWithZoneID": ["type/DateTimeWithTZ"],
    "type/Address": ["type/*"],
    "type/Source": ["type/Category"],
    "type/Name": ["type/Category", "type/Text"],
    "type/Decimal": ["type/Float"],
    "type/Birthdate": ["type/Date"],
    "type/Date": ["type/Temporal"],
    "type/Text": ["type/*"],
    "type/FK": ["type/Special"],
    "type/SerializedJSON": ["type/Text", "type/Collection"],
    "type/DateTimeWithZoneOffset": ["type/DateTimeWithTZ"],
    "type/MongoBSONID": ["type/TextLike"],
    "type/Duration": ["type/Number"],
    "type/Temporal": ["type/*"],
    "type/Float": ["type/Number"],
    "type/CreationTimestamp": ["type/DateTime"],
    "type/Email": ["type/Text"],
    "type/City": ["type/Category", "type/Address", "type/Text"],
    "type/Title": ["type/Category", "type/Text"],
    "type/Special": ["type/*"],
    "type/Dictionary": ["type/Collection"],
    "type/Description": ["type/Text"],
    "type/JoinTime": ["type/JoinTimestamp", "type/Date"],
    "type/Company": ["type/Category"],
    "type/PK": ["type/Special"],
    "type/Latitude": ["type/Coordinate"],
    "type/CreationTime": ["type/Time", "type/CreationTimestamp"],
    "type/Coordinate": ["type/Float"],
    "type/UUID": ["type/Text"],
    "type/Country": ["type/Category", "type/Address", "type/Text"],
    "type/DateTimeWithTZ": ["type/DateTime"],
    "type/JoinDate": ["type/JoinTimestamp", "type/Date"],
    "type/Boolean": ["type/Category", "type/*"],
    "type/CancelationTimestamp": ["type/DateTime"],
    "type/TemporalString": ["type/Text", "type/DateTime"],
    "type/ISO8601DateTimeString": ["type/TemporalString"],
    "type/ISO8601DateString": ["type/TemporalString"],
    "type/ISO8601TimeString": ["type/TemporalString"],
    "type/GrossMargin": ["type/Currency"],
    "type/CreationDate": ["type/Date", "type/CreationTimestamp"],
    "type/AvatarURL": ["type/ImageURL"],
    "type/Share": ["type/Float"],
    "type/Product": ["type/Category"],
    "type/ImageURL": ["type/URL"],
    "type/Price": ["type/Currency"],
    "type/UNIXTimestampMilliseconds": ["type/UNIXTimestamp"],
    "type/UNIXTimestampMicroseconds": ["type/UNIXTimestamp"],
    "type/Collection": ["type/*"],
    "type/User": ["type/*"],
    "type/Array": ["type/Collection"],
    "type/Income": ["type/Currency"],
    "type/Comment": ["type/Text"],
    "type/DeletionTimestamp": ["type/DateTime"],
    "type/TimeWithZoneOffset": ["type/TimeWithTZ"],
    "type/Score": ["type/Number"],
    "type/ZipCode": ["type/Address", "type/Text"],
    "type/DateTime": ["type/Temporal"],
    "type/DateTimeWithLocalTZ": ["type/DateTimeWithTZ"],
    "type/UNIXTimestamp": ["type/Integer", "type/Instant"],
    "type/Enum": ["type/Category", "type/*"],
    "type/Binary": ["type/*"],
    "type/BinaryIPAddress": ["type/String"],
  },
  version: {
    tag: "v1",
  },
};
