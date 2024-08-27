### TECHNOLOGY DECISIONS

# React Router => For Routing
# Styling  => styled component

# REMOTE STATE MANAGEMENT => REACT QUERY

# UI STATE MANAGEMENT => CONTEXT API

# FORM MANAGEMENT =>  REACT HOOK FORM

# REACT ICONS, REACT HOT TOAST, RECHARTS, DATE-FNS, SUPABASE
 
#


### USER AUTHENTICATION
-Users of the app are hotel employees.The need to be looged into the application to perform tasks

-New users can only be signed up inside the applications(to guarantee that only actual hotwl employees can get)

-User should be able to upload an avater and change their name and password

### CABINS

-App needs a table view with all cabins, showing the cabin photo, name, capacity, price and current discount

-Users should be able to update or delete a cabin and to create new cabins(including uploading a photo)
-App needs a table view with all bookings, showing arrival and depature dates, status, and paid amount, as well as cabin and guest data 

### BOOKINGS
-The booking status can be unconfirmed(booked but not yet checked in) checked in or checked out the table by this important status.

Other booking data includes number of guests number of nights, guest observations, whether they booked breakfast,breakfast price

### CHECK IN/OUT
-Users should be able to delete, check in or check out a booking as the guest arrives(no editing necessary for now)
Bookings may not have been paid yet on guest arrival.Therefore on checkin, users need to accept payment then confirm that payment has been  recieved [inside the app]

-On check in, the guest should have the ability to add breakfast for the entire stay,if they hadn't already.

### GUEST
  Guest data should contain: full name, email national Id, nationality, and a country flag for easy identification

### DASHBOARD

The initial app screen should be a dashboard, to display important information for the last 7,30, or 90 days:
-A list of guest checking in and out on the current day. Users should be able to perform these tasks from here.
-Statistics on recent bookings, sales, check ins, and occupancy rate 

-A chart showing all daily hotel sales, showing both toatal salses and extras sales\
-A chart showing statistics on stay durations, as this is an important metric for the hotel.

### APP SETTINGS 
Users  should be able to define a few application-wide settings: breakfast price, min and Max nights/booking
App needs a dark mode .







