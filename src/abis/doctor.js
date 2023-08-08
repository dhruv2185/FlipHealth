export const doctorABI = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_org",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_date",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_docName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_path",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_cid",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_docType",
                "type": "string"
            }
        ],
        "name": "addRecordByUser",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_doctorAddress",
                "type": "address"
            }
        ],
        "name": "grantAccess",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "uint16",
                "name": "_age",
                "type": "uint16"
            },
            {
                "internalType": "uint256",
                "name": "_abhaId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_aadharId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_gender",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_mobile",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_email",
                "type": "string"
            }
        ],
        "name": "register_patient",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint128",
                "name": "_abhaId",
                "type": "uint128"
            },
            {
                "internalType": "uint128",
                "name": "_aadharId",
                "type": "uint128"
            },
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "uint16",
                "name": "_age",
                "type": "uint16"
            },
            {
                "internalType": "uint64",
                "name": "_grNum",
                "type": "uint64"
            },
            {
                "internalType": "uint128",
                "name": "_mobile",
                "type": "uint128"
            },
            {
                "internalType": "string",
                "name": "_email",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_degreeName",
                "type": "string"
            }
        ],
        "name": "registerDoctor",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_doctor",
                "type": "address"
            }
        ],
        "name": "revokeAccess",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_doctor",
                "type": "address"
            }
        ],
        "name": "DocProfileReturn",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "uint16",
                        "name": "age",
                        "type": "uint16"
                    },
                    {
                        "internalType": "uint64",
                        "name": "grNum",
                        "type": "uint64"
                    },
                    {
                        "internalType": "string",
                        "name": "degreeName",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "myAdd",
                        "type": "address"
                    }
                ],
                "internalType": "struct patient.DocProfile",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllDoctors",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint128",
                        "name": "abhaId",
                        "type": "uint128"
                    },
                    {
                        "internalType": "uint128",
                        "name": "aadharId",
                        "type": "uint128"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "uint16",
                        "name": "age",
                        "type": "uint16"
                    },
                    {
                        "internalType": "uint64",
                        "name": "grNum",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint128",
                        "name": "mobile",
                        "type": "uint128"
                    },
                    {
                        "internalType": "string",
                        "name": "email",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "degreeName",
                        "type": "string"
                    }
                ],
                "internalType": "struct patient.Doctor[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getDocOwnProfile",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint128",
                        "name": "abhaId",
                        "type": "uint128"
                    },
                    {
                        "internalType": "uint128",
                        "name": "aadharId",
                        "type": "uint128"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "uint16",
                        "name": "age",
                        "type": "uint16"
                    },
                    {
                        "internalType": "uint64",
                        "name": "grNum",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint128",
                        "name": "mobile",
                        "type": "uint128"
                    },
                    {
                        "internalType": "string",
                        "name": "email",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "degreeName",
                        "type": "string"
                    }
                ],
                "internalType": "struct patient.Doctor",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getDoctorsForUser",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "uint16",
                        "name": "age",
                        "type": "uint16"
                    },
                    {
                        "internalType": "uint64",
                        "name": "grNum",
                        "type": "uint64"
                    },
                    {
                        "internalType": "string",
                        "name": "degreeName",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "myAdd",
                        "type": "address"
                    }
                ],
                "internalType": "struct patient.DocProfile[]",
                "name": "",
                "type": "tuple[]"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "patAddress",
                "type": "address"
            }
        ],
        "name": "getHealthRecords",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "organisation",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "date",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "doctorName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "documentName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "documentPath",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "documentCid",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "documentType",
                        "type": "string"
                    }
                ],
                "internalType": "struct patient.HealthRecord[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPatientOwnProfile",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint128",
                        "name": "abhaId",
                        "type": "uint128"
                    },
                    {
                        "internalType": "uint128",
                        "name": "aadharId",
                        "type": "uint128"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "uint16",
                        "name": "age",
                        "type": "uint16"
                    },
                    {
                        "internalType": "string",
                        "name": "gender",
                        "type": "string"
                    },
                    {
                        "internalType": "uint128",
                        "name": "mobile",
                        "type": "uint128"
                    },
                    {
                        "internalType": "string",
                        "name": "email",
                        "type": "string"
                    }
                ],
                "internalType": "struct patient.Patient",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_patient",
                "type": "address"
            }
        ],
        "name": "getPatientProfile",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint128",
                        "name": "abhaId",
                        "type": "uint128"
                    },
                    {
                        "internalType": "uint128",
                        "name": "aadharId",
                        "type": "uint128"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "uint16",
                        "name": "age",
                        "type": "uint16"
                    },
                    {
                        "internalType": "string",
                        "name": "gender",
                        "type": "string"
                    },
                    {
                        "internalType": "uint128",
                        "name": "mobile",
                        "type": "uint128"
                    },
                    {
                        "internalType": "string",
                        "name": "email",
                        "type": "string"
                    }
                ],
                "internalType": "struct patient.Patient",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPatients",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint128",
                        "name": "abhaId",
                        "type": "uint128"
                    },
                    {
                        "internalType": "uint128",
                        "name": "aadharId",
                        "type": "uint128"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "uint16",
                        "name": "age",
                        "type": "uint16"
                    },
                    {
                        "internalType": "string",
                        "name": "gender",
                        "type": "string"
                    },
                    {
                        "internalType": "uint128",
                        "name": "mobile",
                        "type": "uint128"
                    },
                    {
                        "internalType": "string",
                        "name": "email",
                        "type": "string"
                    }
                ],
                "internalType": "struct patient.Patient[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]