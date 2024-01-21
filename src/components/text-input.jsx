import { useEffect, useState } from 'react';
import { AutoComplete } from "primereact/autocomplete";
import { mockData } from "../data/mockData";
import PropTypes from "prop-types";

export const TextInput = ({id, name,placeholder,value,onChange, onBlur,className}) => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState(null);

    const search = (event) => {
        let _filteredCountries;

        if (!event.query.trim().length) {
            _filteredCountries = [...countries];
        }
        else {
            _filteredCountries = countries.filter((country) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });
        }
        setFilteredCountries(_filteredCountries);
    }

    const itemTemplate = (item) => {
        return (<div>{item.name}</div>);
    };

    useEffect(() => {
        mockData.getCountries(name).then((data) => setCountries(data));
    }, [name]);

    return (
        <AutoComplete 
            field="name" 
            id={id}
            name={name}
            value={value}
            suggestions={filteredCountries} 
            completeMethod={search} 
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            itemTemplate={itemTemplate}
            className={className}
        />
    )
}
TextInput.propsTypes ={
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.any,
    placeholder: PropTypes.string,
    onChange: PropTypes.any,
    onBlur: PropTypes.any,
    className: PropTypes.string,
}