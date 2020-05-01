import React, {useState, useEffect} from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './CountryPicker.module.css'
import { fetchCountries } from '../../API'


const CountryPicker = ({hangleCountryChange}) => {
	const [fetchedcountries, setFetchedCountries] = useState([])
	useEffect( () =>{
		const countriesAPI = async() => {
			setFetchedCountries( await fetchCountries())
		}
		countriesAPI()
	}, [setFetchedCountries])
	
	return (
		<FormControl className={styles.formControl}>
			<NativeSelect defaultValue="" onChange={(event) => hangleCountryChange(event.target.value)}>
				<option value=''>GLOBAL</option>
				{fetchedcountries.map((country,i) => <option value={country} key={i}>{country}</option>)}
			</NativeSelect>
		</FormControl>
	)
}

export default CountryPicker