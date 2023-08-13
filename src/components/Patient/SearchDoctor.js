import { Container, CssBaseline, IconButton, InputBase, Paper, Box, Select, FormControl, InputLabel, MenuItem } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import SearchDocResult from './SearchDocResult';
import { searchDoctorByAddress, searchDoctorByName, getAllDoctorsForAPatient } from '../../Utils/SmartContractUtils';
import { useSelector } from 'react-redux';
import { enqueueSnackbar } from 'notistack';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const SearchDoctor = () => {
    const [isLoading, setIsLoading] = useState(false);
    const accountAddress = useSelector(state => state.accountAddress);
    const search = useRef("");
    const [searchType, setSearchType] = useState('name');
    const [searchResults, setSearchResults] = useState([]);
    const [grantedDoctors, setGrantedDoctors] = useState([]);

    const getByAddress = async (search) => {
        // const res = searchDoctorByAddress(
        // enteredAddress, loggedInAddress
        // )
        setIsLoading(true);
        const res = await searchDoctorByAddress(
            search,
            accountAddress
        )
        if (res.message) {
            enqueueSnackbar(res.message, { variant: "error" });
        }
        else {
            setSearchResults([res]);
        }
        setIsLoading(false);

    }
    const fetchDoctors = async () => {
        setIsLoading(true);
        const res = await getAllDoctorsForAPatient(accountAddress);
        if (res.message) {
            enqueueSnackbar(res.message, { variant: "error" });
        }
        else {
            const newres = (res.filter(item => item.myAdd !== "0x0000000000000000000000000000000000000000")).map(item => {

                return {
                    name: item["name"],
                    degreeName: item["degreeName"],
                    age: item["age"],
                    grNum: item["grNum"],
                    myAdd: item["myAdd"]
                }

            })
            setGrantedDoctors(newres);
            console.log(newres)
        }
        setIsLoading(false);
    }
    const getByName = async (search) => {
        // const result = await searchDoctorByName(
        //     "0x22207fBEF242156F1cbF1DC83a13d32A2c5Cd029"
        //     // or loggedInAddress
        // )
        setIsLoading(true);
        const res = await searchDoctorByName(
            accountAddress
        )
        const regex = new RegExp(search, "gi");
        const newres = res.map(item => {

            return {
                name: item["name"],
                degreeName: item["degreeName"],
                age: item["age"],
                grNum: item["grNum"],
                myAdd: item["myAdd"]
            }

        })
        const result = newres.filter(
            item => (search !== "" && regex.test(item["name"]))
        )
        // to filter out the already granted doctors
        // const fetchDoctors = async () => {
        //     const res = await getAllDoctorsForAPatient('0x22207fBEF242156F1cbF1DC83a13d32A2c5Cd029')
        //     // const res = await getAllDoctorsForAPatient('loggedInAddress')
        //     setDoctors(res);
        //     console.log(doctors);
        // }

        // further regex logic
        console.log(result)
        setSearchResults(result);
        setIsLoading(false);

    }
    const searchHandler = (e) => {
        e.preventDefault();
        // if by address

        fetchDoctors();
        if (searchType === "address") {
            getByAddress(search.current.value);
        }
        // if by name
        if (searchType === "name") {
            getByName(search.current.value);
        }


    }
    const handleChange = (event) => {
        setSearchType(event.target.value);
    }
    return (
        <>
            <Container component="main" maxWidth="s" minWidth="xs" sx={{ minHeight: "50vh" }}><CssBaseline /><Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop><Paper onSubmit={searchHandler}
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, margin: '20px auto' }}
            >   <FormControl ><InputLabel id="demo-simple-select-label">Search By</InputLabel><Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={searchType}
                label="Search Type"
                onChange={handleChange}
                required
            >
                <MenuItem value={"name"}>Name</MenuItem>
                <MenuItem value={"address"}>Address</MenuItem>

            </Select></FormControl>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        inputRef={search}
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search ' }}
                    />
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>

                </Paper>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: "10px" }}>{searchResults.length !== 0 && searchResults.map(item => <SearchDocResult data={item} grantedDoctors={grantedDoctors} />)}
                    {searchResults.length === 0 && search.current.value === "" && <h3>ENTER A SEARCH QUERY</h3>}
                    {searchResults.length === 0 && search.current.value !== "" && <h3>NO RESULTS FOUND</h3>}</Box>
            </Container>
        </>
    );
}

export default SearchDoctor;
