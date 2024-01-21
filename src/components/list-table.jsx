import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const ListTable = ({searchResults}) => {

  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://edd61d24-3bc8-4cad-ae24-698fd001524a.mock.pstmn.io/Flights/${searchResults}`,
        );
        setFlights(response.data);
      } catch (error) {
        console.error('Error while fetching data:', error);
      }
    };
    fetchData();
  }, [searchResults]);
  return (
    <>
    <DataTable value={flights} tableStyle={{ minWidth: '100vh' }}>
        <Column field="airline.name" header="Airline" ></Column>
        <Column field="fromLocation.name" header="From" ></Column>
        <Column field="toLocation.name" header="To" ></Column>
        <Column field="departDate" header="Depart Date"  ></Column>
        <Column field="returnDate" header="Return Date" ></Column>
        <Column field="flightTime" header="Time" sortable ></Column>
        <Column field="travelers" header="Travelers" ></Column>
        <Column field="cabinClass" header="Class" ></Column>
        <Column field="price" header="Price" sortable ></Column>
    </DataTable>
    </>
  )
}


/*
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const ListTable = ({searchResults}) => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://edd61d24-3bc8-4cad-ae24-698fd001524a.mock.pstmn.io/Flights`,
          {
            params: searchResults,
          }
        );
        setFlights(response.data);
      } catch (error) {
        console.error('Error while fetching data:', error);
      }
    };

    fetchData();
  }, [searchResults]);

  if (!flights) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <DataTable
        value={flights}
        tableStyle={{ minWidth: '100vh' }}
      >
        <Column field="airline.name" header="Airline"></Column>
        <Column field="fromLocation.name" header="From"></Column>
        <Column field="toLocation.name" header="To"></Column>
        <Column field="departDate" header="Depart Date"></Column>
        <Column field="returnDate" header="Return Date"></Column>
        <Column field="flightTime" header="Time" sortable></Column>
        <Column field="travelers" header="Travelers"></Column>
        <Column field="cabinClass" header="Class"></Column>
        <Column field="price" header="Price" sortable></Column>
      </DataTable>
    </>
  );
};


*/