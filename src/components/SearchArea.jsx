import {useState} from 'react'
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Checkbox } from "primereact/checkbox";

export const SearchArea = () => {

    const [globalFilter, setGlobalFilter] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [isOneWay, setIsOneWay] = useState(false);


  return (
   <div className="flex flex-row justify-center items-start h-screen">
    <Card title="Search Flight" className="w-6/12" >
        <div className="relative top-0 left-0">
            <Checkbox onChange={e => setIsOneWay(e.checked)} checked={isOneWay} className="color-cobalt-700" />
            <label htmlFor="isOneWay"> Tek Yön Uçuş Ara</label>
        </div>
        <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Kalkış havaalanı" className="border border-cobalt-700 h-12 mr-2" />
        <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Varış havaalanı" className="border border-cobalt-700 h-12 m-2" />

        <Calendar inputId="start_date" locale='tr' value={startDate} onChange={(e) => setStartDate(e.value)} placeholder="Kalkış Tarihi" className="border border-cobalt-700 h-12 rounded-md m-2" />
        <Calendar inputId="start_date" locale='tr' value={endDate} onChange={(e) => setEndDate(e.value)} placeholder="Dönüş Tarihi" className="border border-cobalt-700 h-12 rounded-md m-2" />

        
        <Button className="border border-cobalt-700 text-cobalt-700 bg-cobalt-100 py-2 px-4 rounded-lg " label="Uçuş Ara" />

    </Card>
   </div>
  )
}

