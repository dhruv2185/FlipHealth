import React from 'react';
import { Container, CssBaseline, Box } from '@mui/material';
import PatientBox from './PatientBox';
import Web3 from 'web3';
import { doctorABI } from '../../abis/doctor.js'
const web3 = new Web3(process.env.REACT_APP_BLOCKCHAIN_PROVIDER_URL);
const doctorContract = new web3.eth.Contract(doctorABI, process.env.REACT_APP_DOCTOR_CONTRACT_ADDRESS);

const getPatients = async () => {
    const result = await doctorContract.methods.getPatients().call({
        from: "0x22207fBEF242156F1cbF1DC83a13d32A2c5Cd029",
        gas: 3000000
    })
    console.log(result);
}

getPatients();

const ViewPatients = () => {

    const getPatients = async () => {
        const result = await doctorContract.methods.getPatients().call({
            from: "0x22207fBEF242156F1cbF1DC83a13d32A2c5Cd029",
            gas: 3000000
        })
        console.log(result);
    }

    return (
        <>
            <Container component="main" maxWidth="s" minWidth="xs"><CssBaseline /><Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: "10px" }}></Box></Container>
        </>
    );
}

export default ViewPatients;
