export const mockData = {
  getFlightsData(){
    return [
      {
        "id": 1,
        "departDate": "01-02-2024",
        "returnDate": "10-02-2024",
        "fromLocation": {"code": "JFK", "name": "John F. Kennedy International Airport"},
        "toLocation": {"code": "LAX", "name": "Los Angeles International Airport"},
        "airline": {"id": 1, "name": "Delta Airlines"},
        "travelers": 2,
        "cabinClass": "Business",
        "price": "300$",
        "flightTime": "1h 45"
      },
      {
        "id": 2,
        "departDate": "15-03-2024",
        "returnDate": "25-03-2024",
        "fromLocation": {"code": "LHR", "name": "Heathrow Airport"},
        "toLocation": {"code": "CDG", "name": "Charles de Gaulle Airport"},
        "airline": {"id": 4, "name": "British Airways"},
        "travelers": 1,
        "cabinClass": "Economy",
        "price": "300$",
        "flightTime": "2h 45"
      },
      {
        "id": 3,
        "departDate": "05-04-2024",
        "returnDate": "15-04-2024",
        "fromLocation": {"code": "HND", "name": "Haneda Airport"},
        "toLocation": {"code": "SYD", "name": "Sydney Airport"},
        "airline": {"id": 3, "name": "Emirates"},
        "travelers": 3,
        "cabinClass": "Business",
        "price": "300$",
        "flightTime": "3h"
      },
      {
        "id": 4,
        "departDate": "20-05-2024",
        "returnDate": "30-05-2024",
        "fromLocation": {"code": "SFO", "name": "San Francisco International Airport"},
        "toLocation": {"code": "ORD", "name": "O'Hare International Airport"},
        "airline": {"id": 6, "name": "Lufthansa"},
        "travelers": 1,
        "cabinClass": "Economy",
        "price": "300$",
        "flightTime": "1h"
      },
      {
        "id": 5,
        "departDate": "10-06-2024",
        "returnDate": "20-06-2024",
        "fromLocation": {"code": "DXB", "name": "Dubai International Airport"},
        "toLocation": {"code": "SIN", "name": "Changi Airport"},
        "airline": {"id": 7, "name": "Qatar Airways"},
        "travelers": 2,
        "cabinClass": "Business",
        "price": "300$",
        "flightTime": "1h 45"
      },
      {
        "id": 6,
        "departDate": "02-07-2024",
        "returnDate": "12-07-2024",
        "fromLocation": {"code": "SYD", "name": "Sydney Airport"},
        "toLocation": {"code": "AKL", "name": "Auckland Airport"},
        "airline": {"id": 5, "name": "Air France"},
        "travelers": 1,
        "cabinClass": "Economy",
        "price": "300$",
        "flightTime": "1h 25"
      },
      {
        "id": 7,
        "departDate": "15-08-2024",
        "returnDate": "25-08-2024",
        "fromLocation": {"code": "LAX", "name": "Los Angeles International Airport"},
        "toLocation": {"code": "JFK", "name": "John F. Kennedy International Airport"},
        "airline": {"id": 1, "name": "Delta Airlines"},
        "travelers": 3,
        "cabinClass": "Business"
      },
      {
        "id": 8,
        "departDate": "05-09-2024",
        "returnDate": "15-09-2024",
        "fromLocation": {"code": "CDG", "name": "Charles de Gaulle Airport"},
        "toLocation": {"code": "LHR", "name": "Heathrow Airport"},
        "airline": {"id": 4, "name": "British Airways"},
        "travelers": 2,
        "cabinClass": "Economy",
        "price": "300$",
        "flightTime": "1h 45"
      },
      {
        "id": 9,
        "departDate": "20-10-2024",
        "returnDate": "30-10-2024",
        "fromLocation": {"code": "ORD", "name": "O'Hare International Airport"},
        "toLocation": {"code": "SFO", "name": "San Francisco International Airport"},
        "airline": {"id": 6, "name": "Lufthansa"},
        "travelers": 1,
        "cabinClass": "Business",
        "price": "300$",
        "flightTime": "1h 45"
      },
      {
        "id":10,
        "departDate": "10-11-2024",
        "returnDate": "20-11-2024",
        "fromLocation": {"code": "SIN", "name": "Changi Airport"},
        "toLocation": {"code": "DXB", "name": "Dubai International Airport"},
        "airline": {"id": 7, "name": "Qatar Airways"},
        "travelers": 3,
        "cabinClass": "Economy",
        "price": "300$",
        "flightTime": "4h 45"
      },
      {
        "id": 11,
        "departDate": "02-12-2024",
        "returnDate": "12-12-2024",
        "fromLocation": {"code": "AKL", "name": "Auckland Airport"},
        "toLocation": {"code": "SYD", "name": "Sydney Airport"},
        "airline": {"id": 5, "name": "Air France"},
        "travelers": 2,
        "cabinClass": "Business",
        "price": "300$",
        "flightTime": "5h 45"
      },
      {
        "id": 12,
        "departDate": "15-01-2025",
        "returnDate": "25-01-2025",
        "fromLocation": {"code": "JFK", "name": "John F. Kennedy International Airport"},
        "toLocation": {"code": "LAX", "name": "Los Angeles International Airport"},
        "airline": {"id": 1, "name": "Delta Airlines"},
        "travelers": 1,
        "cabinClass": "Economy",
        "price": "300$",
        "flightTime": "5h 45"
      },
      {
        "id": 13,
        "departDate": "05-02-2025",
        "returnDate": "15-02-2025",
        "fromLocation": {"code": "LHR", "name": "Heathrow Airport"},
        "toLocation": {"code": "CDG", "name": "Charles de Gaulle Airport"},
        "airline": {"id": 4, "name": "British Airways"},
        "travelers": 2,
        "cabinClass": "Business",
        "price": "300$",
        "flightTime": "4h 45"
      },
      {
        "id": 14,
        "departDate": "20-03-2025",
        "returnDate": "30-03-2025",
        "fromLocation": {"code": "HND", "name": "Haneda Airport"},
        "toLocation": {"code": "SYD", "name": "Sydney Airport"},
        "airline": {"id": 3, "name": "Emirates"},
        "travelers": 3,
        "cabinClass": "Business",
        "flightTime": "2h 45"
      },
      {
        "id": 15,
        "departDate": "10-04-2025",
        "returnDate": "20-04-2025",
        "fromLocation": {"code": "SFO", "name": "San Francisco International Airport"},
        "toLocation": {"code": "JFK", "name": "John F. Kennedy International Airport"},
        "airline": {"id": 6, "name": "Lufthansa"},
        "travelers": 2,
        "cabinClass": "Economy",
        "price": "300$",
        "flightTime": "1h"
      },
      {
        "id": 16,
        "departDate": "25-05-2025",
        "returnDate": "04-06-2025",
        "fromLocation": {"code": "DXB", "name": "Dubai International Airport"},
        "toLocation": {"code": "LHR", "name": "Heathrow Airport"},
        "airline": {"id": 7, "name": "Qatar Airways"},
        "travelers": 1,
        "cabinClass": "Business",
        "price": "300$",
        "flightTime": "1h 20"
      },
      {
        "id": 17,
        "departDate": "15-07-2025",
        "returnDate": "25-07-2025",
        "fromLocation": {"code": "CDG", "name": "Charles de Gaulle Airport"},
        "toLocation": {"code": "SYD", "name": "Sydney Airport"},
        "airline": {"id": 4, "name": "British Airways"},
        "travelers": 3,
        "cabinClass": "Business",
        "price": "500$",
        "flightTime": "2h 45"
      },
      {
        "id": 18,
        "departDate": "10-09-2025",
        "returnDate": "20-09-2025",
        "fromLocation": {"code": "AKL", "name": "Auckland Airport"},
        "toLocation": {"code": "HND", "name": "Haneda Airport"},
        "airline": {"id": 5, "name": "Air France"},
        "travelers": 2,
        "cabinClass": "Economy",
        "price": "445$",
        "flightTime": "3h 45"
      },
      {
        "id": 19,
        "departDate": "02-11-2025",
        "returnDate": "12-11-2025",
        "fromLocation": {"code": "LAX", "name": "Los Angeles International Airport"},
        "toLocation": {"code": "ORD", "name": "O'Hare International Airport"},
        "airline": {"id": 1, "name": "Delta Airlines"},
        "travelers": 1,
        "cabinClass": "Economy",
        "price": "350$",
        "flightTime": "2h"
      },
      {
        "id": 20,
        "departDate": "20-12-2025",
        "returnDate": "30-12-2025",
        "fromLocation": {"code": "JFK", "name": "John F. Kennedy International Airport"},
        "toLocation": {"code": "SFO", "name": "San Francisco International Airport"},
        "airline": {"id": 6, "name": "Lufthansa"},
        "travelers": 3,
        "cabinClass": "Business",
        "price": "250$",
        "flightTime": "3h 15"
      },
      {
        "id": 21,
        "departDate": "15-01-2026",
        "returnDate": "25-01-2026",
        "fromLocation": {"code": "SYD", "name": "Sydney Airport"},
        "toLocation": {"code": "AKL", "name": "Auckland Airport"},
        "airline": {"id": 5, "name": "Air France"},
        "travelers": 1,
        "cabinClass": "Business",
        "flightTime": "3h 15"
      },
      {
        "id": 22,
        "departDate": "05-03-2026",
        "returnDate": "15-03-2026",
        "fromLocation": {"code": "LHR", "name": "Heathrow Airport"},
        "toLocation": {"code": "CDG", "name": "Charles de Gaulle Airport"},
        "airline": {"id": 4, "name": "British Airways"},
        "travelers": 2,
        "cabinClass": "Economy",
        "price": "150$",
        "flightTime": "4h 15"
      },
      {
        "id": 23,
        "departDate": "20-04-2026",
        "returnDate": "30-04-2026",
        "fromLocation": {"code": "HND", "name": "Haneda Airport"},
        "toLocation": {"code": "DXB", "name": "Dubai International Airport"},
        "airline": {"id": 3, "name": "Emirates"},
        "travelers": 3,
        "cabinClass": "Economy",
        "price": "300$",
        "flightTime": "3h 15"
      },
      {
        "id": 24,
        "departDate": "10-06-2026",
        "returnDate": "20-06-2026",
        "fromLocation": {"code": "SIN", "name": "Changi Airport"},
        "toLocation": {"code": "LAX", "name": "Los Angeles International Airport"},
        "airline": {"id": 7, "name": "Qatar Airways"},
        "travelers": 2,
        "cabinClass": "Business",
        "price": "200$",
        "flightTime": "1h 15"
      },
      {
        "id": 25,
        "departDate": "10-04-2025",
        "returnDate": "20-04-2025",
        "fromLocation": {"code": "SFO", "name": "San Francisco International Airport"},
        "toLocation": {"code": "JFK", "name": "John F. Kennedy International Airport"},
        "airline": {"id": 6, "name": "Lufthansa"},
        "travelers": 2,
        "cabinClass": "Economy",
        "price": "100$",
        "flightTime": "5h 15"
      },
      {
        "id": 26,
        "departDate": "25-05-2025",
        "returnDate": "04-06-2025",
        "fromLocation": {"code": "DXB", "name": "Dubai International Airport"},
        "toLocation": {"code": "LHR", "name": "Heathrow Airport"},
        "airline": {"id": 7, "name": "Qatar Airways"},
        "travelers": 1,
        "cabinClass": "Business",
        "price": "300$",
        "flightTime": "2h 25"
      },
      {
        "id": 27,
        "departDate": "15-07-2025",
        "returnDate": "25-07-2025",
        "fromLocation": {"code": "CDG", "name": "Charles de Gaulle Airport"},
        "toLocation": {"code": "SYD", "name": "Sydney Airport"},
        "airline": {"id": 4, "name": "British Airways"},
        "travelers": 3,
        "cabinClass": "Business",
        "price": "200$",
        "flightTime": "6h 15"
      },
      {
        "id": 28,
        "departDate": "10-09-2025",
        "returnDate": "20-09-2025",
        "fromLocation": {"code": "AKL", "name": "Auckland Airport"},
        "toLocation": {"code": "HND", "name": "Haneda Airport"},
        "airline": {"id": 5, "name": "Air France"},
        "travelers": 2,
        "cabinClass": "Economy",
        "price": "100$",
        "flightTime": "4h 15"
      },
    ]
  },

  getFlights(){
    return Promise.resolve(this.getFlightsData());
  },

  getLocation(){
  return [
    { code : "JFK", name: "John F. Kennedy International Airport"},
    { code:  "LAX", name: "Los Angeles International Airport"},
    { code:  "LHR", name: "Heathrow Airport"},
    { code:  "DXB", name: "Dubai International Airport"},
    { code:  "CDG", name: "Charles de Gaulle Airport"},
    { code:  "FRA", name: "Frankfurt Airport"},
    { code:  "DOH", name: "Hamad International Airport"},
    { code:  "SIN", name: "Changi Airport"},
    { code:  "HND", name: "Haneda Airport"},
    { code:  "HKG", name: "Hong Kong International Airport"}
  ]
},
  getCountries() {
    return Promise.resolve(this.getLocation());
  },
}

