// // SPDX-License-Identifier: GPL-3.0

// pragma solidity ^0.7.0;
// pragma experimental ABIEncoderV2;

// contract Patient {
//     // Patient basic details
//     string public name;
//     string kyc;
//     string bg;
//     string mno;
//     address public owner;
//     Admin admin;

//     // mapping for viewers
//     mapping(address => bool) public viewers;

//     // mapping for editors
//     mapping(address => bool) public editors;

//     // report details
//     struct record {
//         uint256 date;
//         address doctor;
//         string detail;
//         string hash;
//     }

//     // array to store record
//     record[] details;

//     constructor(
//         string memory _name,
//         string memory _kyc,
//         string memory _bg,
//         string memory _mno,
//         address _owner,
//         address _admin
//     ) {
//         // initializaing value
//         admin = Admin(_admin);
//         name = _name;
//         kyc = _kyc;
//         bg = _bg;
//         mno = _mno;
//         owner = _owner;
//         viewers[owner] = true;
//     }

//     // only owner modifier
//     modifier onlyOwner() {
//         // modifier for only owner
//         require(msg.sender == owner, "You are not the Owner ");
//         _;
//     }

//     // only viewers modifiers
//     modifier onlyViewer() {
//         // modifier for only owner
//         require(viewers[msg.sender], "You don't have viewing rights");
//         _;
//     }

//     // only editors modifiers
//     modifier onlyEditor() {
//         // modifier for only owner
//         require(editors[msg.sender], "You dont have editing rights");
//         _;
//     }

//     // setter for mobile number , as all the other details will never change ,so ony thing owner can change is mno

//     function setMno(string memory _mno) public onlyOwner {
//         // checking if the stake holder is eligible of not
//         mno = _mno;
//     }

//     // getter for basic details

//     function getPatientDetails()
//         public
//         view
//         onlyViewer
//         returns (
//             string memory,
//             string memory,
//             string memory,
//             string memory,
//             address
//         )
//     {
//         return (name, kyc, bg, mno, owner);
//     }

//     //set permissions for viewers
//     function addViewer(address _addr) public onlyOwner {
//         viewers[_addr] = true;
//     }

//     //set permissions for editors
//     function addEditor(address _addr) public onlyOwner {
//         editors[_addr] = true;
//         viewers[_addr] = true;
//     }

//     //revoke viewing rights
//     function removeViewer(address _addr) public onlyOwner {
//         viewers[_addr] = false;
//     }

//     //remove permissions for editors
//     function removeEditor(address _addr) public onlyOwner {
//         editors[_addr] = false;
//         viewers[_addr] = false;
//     }

//     // function for addinng details and report

//     function addReport(string memory _detail, string memory _hash)
//         public
//         onlyEditor
//     {
//         require(admin.exist(msg.sender), "You are not a registered Doctor");

//         record memory newRecord =
//             record({
//                 date: block.timestamp,
//                 doctor: msg.sender,
//                 detail: _detail,
//                 hash: _hash
//             });
//         editors[msg.sender] = false;
//         viewers[msg.sender] = false;
//         details.push(newRecord);
//     }

//     // function array length

//     function getLength() public view onlyViewer returns (uint256) {
//         return (details.length);
//     }

//     // function for retriving report

//     function getReport(uint256 _index)
//         public
//         view
//         onlyViewer
//         returns (record memory)
//     {
//         return (details[_index]);
//     }
// }

// // TODO: Connection of doctor to patient is left for adding record
// contract Doctor {
//     string public name;
//     string kyc;
//     string public mno;
//     string public id;
//     address owner;

//     constructor(
//         string memory _name,
//         string memory _kyc,
//         string memory _mno,
//         address _owner,
//         string memory _id
//     ) {
//         //  Admin admin = Admin(msg.sender);
//         //  require(msg.sender == admin.contractAddr(),"Only Admin contract can deploy constructor");

//         // initializaing value
//         name = _name;
//         kyc = _kyc;
//         mno = _mno;
//         owner = _owner;
//         id = _id;
//     }

//     struct patientRecord {
//         uint256 date;
//         address patient;
//         string detail;
//         string hash;
//     }

//     patientRecord[] patients;

//     function recordLen() public view returns (uint256) {
//         return patients.length;
//     }

//     function pRecord(uint256 _index)
//         public
//         view
//         returns (patientRecord memory)
//     {
//         return patients[_index];
//     }

//     function addPatientRecord(
//         string memory _details,
//         string memory _hash,
//         address _patient
//     ) public {
//         Patient patientContract = Patient(_patient);
//         patientContract.addReport(_details, _hash);

//         patientRecord memory pR =
//             patientRecord({
//                 date: block.timestamp,
//                 patient: msg.sender,
//                 detail: _details,
//                 hash: _hash
//             });
//         patients.push(pR);
//     }
// }

// contract Admin {
//     address[] doctorsAddress;
//     mapping(address => Doctor) doctors;
//     mapping(address => bool) public exist;
//     address public owner;

//     // address public contractAddr;

//     // function setContractAddr(address _addr) public {
//     //     contractAddr = _addr;
//     // }

//     constructor() {
//         owner = msg.sender;
//     }

//     modifier onlyOwner() {
//         // modifier for only owner
//         require(msg.sender == owner, "You are not the Owner ");
//         _;
//     }

//     function addDoctor(
//         string memory _name,
//         string memory _kyc,
//         string memory _mno,
//         address _owner,
//         string memory _id
//     ) public onlyOwner returns (address) {
//         Doctor newDoctor = new Doctor(_name, _kyc, _mno, _owner, _id);
//         doctorsAddress.push(_owner);
//         doctors[_owner] = newDoctor;
//         exist[address(newDoctor)] = true;
//         return address(newDoctor);
//     }

//     function addPatient(
//         string memory _name,
//         string memory _kyc,
//         string memory _bg,
//         string memory _mno,
//         address _owner
//     ) public onlyOwner returns (address) {
//         Patient newPatient =
//             new Patient(_name, _kyc, _bg, _mno, _owner, address(this));
//         return address(newPatient);
//     }

//     function showAddressofDoctors()
//         external
//         view
//         onlyOwner
//         returns (address[] memory)
//     {
//         return doctorsAddress;
//     }

//     function showDoctors(address _doc) external view returns (Doctor) {
//         return doctors[_doc];
//     }
// }

//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.7.0;
pragma experimental ABIEncoderV2;

contract Patient {
    // Patient basic details
    string public name;
    string public age;
    string kyc;
    string public bg;
    string public mno;
    address public owner;
    Admin admin;

    // mapping for viewers
    mapping(address => bool) public viewers;

    // mapping for editors
    mapping(address => bool) public editors;

    // report details
    struct record {
        uint256 date;
        address doctor;
        string detail;
        string hash;
    }

    // array to store record
    record[] details;

    constructor(
        string memory _name,
        string memory _age,
        string memory _kyc,
        string memory _bg,
        string memory _mno,
        address _owner,
        address _admin
    ) {
        // initializaing value
        admin = Admin(_admin);
        name = _name;
        kyc = _kyc;
        bg = _bg;
        mno = _mno;
        owner = _owner;
        age = _age;
        viewers[owner] = true;
    }

    // only owner modifier
    modifier onlyOwner() {
        // modifier for only owner
        require(msg.sender == owner, "You are not the Owner ");
        _;
    }

    // only viewers modifiers
    modifier onlyViewer() {
        // modifier for only owner
        require(viewers[msg.sender], "You don't have viewing rights");
        _;
    }

    // only editors modifiers
    modifier onlyEditor() {
        // modifier for only owner
        require(editors[msg.sender], "You dont have editing rights");
        _;
    }

    // setter for mobile number , as all the other details will never change ,so ony thing owner can change is mno

    function setMno(string memory _mno) public onlyOwner {
        // checking if the stake holder is eligible of not
        mno = _mno;
    }

    // getter for basic details

    function getPatientDetails()
        public
        view
        onlyViewer
        returns (
            string memory,
            string memory,
            string memory,
            string memory,
            address
        )
    {
        return (name, kyc, bg, mno, owner);
    }

    //set permissions for viewers
    function addViewer(address _addr) public onlyOwner {
        viewers[_addr] = true;
    }

    //set permissions for editors
    function addEditor(address _addr) public onlyOwner {
        editors[_addr] = true;
    }

    //revoke viewing rights
    function removeViewer(address _addr) public onlyOwner {
        viewers[_addr] = false;
    }

    //remove permissions for editors
    function removeEditor(address _addr) public onlyOwner {
        editors[_addr] = false;
    }

    // function for addinng details and report

    function addReport(string memory _detail, string memory _hash)
        public
        onlyEditor
    {
        require(admin.existDA(msg.sender), "You are not a registered Doctor");

        record memory newRecord = record({
            date: block.timestamp,
            doctor: msg.sender,
            detail: _detail,
            hash: _hash
        });
        editors[msg.sender] = false;
        viewers[msg.sender] = false;
        details.push(newRecord);
    }

    // function array length

    function getLength() public view onlyViewer returns (uint256) {
        return (details.length);
    }

    // function for retriving report

    function getReport(uint256 _index)
        public
        view
        onlyViewer
        returns (record memory)
    {
        return (details[_index]);
    }
}

// TODO: Connection of doctor to patient is left for adding record
contract Doctor {
    string public name;
    string kyc;
    string public mno;
    string public id;
    address public owner;

    constructor(
        string memory _name,
        string memory _kyc,
        string memory _mno,
        address _owner,
        string memory _id
    ) {
        //  Admin admin = Admin(msg.sender);
        //  require(msg.sender == admin.contractAddr(),"Only Admin contract can deploy constructor");

        // initializaing value
        name = _name;
        kyc = _kyc;
        mno = _mno;
        owner = _owner;
        id = _id;
    }

    struct patientRecord {
        uint256 date;
        address patient;
        string detail;
        string hash;
    }

    patientRecord[] patients;

    function recordLen() public view returns (uint256) {
        return patients.length;
    }

    function pRecord(uint256 _index)
        public
        view
        returns (
            patientRecord memory //ToDo : only doctor should access
        )
    {
        return patients[_index];
    }

    function addPatientRecord(
        string memory _details,
        string memory _hash,
        address _patient
    ) public {
        Patient patientContract = Patient(_patient);
        patientContract.addReport(_details, _hash);

        patientRecord memory precord = patientRecord({
            date: block.timestamp,
            patient: _patient,
            detail: _details,
            hash: _hash
        });
        patients.push(precord);
    }
}

contract Admin {
    address[] public doctorsAddress;
    mapping(address => address) public doctors;
    mapping(address => address) public patients;
    mapping(address => bool) public existD;
    mapping(address => bool) public existDA;
    mapping(address => bool) public existP;
    address public owner;

    // address public contractAddr;

    // function setContractAddr(address _addr) public {
    //     contractAddr = _addr;
    // }

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        // modifier for only owner
        require(msg.sender == owner, "You are not the Owner ");
        _;
    }

    function addDoctor(
        string memory _name,
        string memory _kyc,
        string memory _mno,
        address _owner,
        string memory _id
    ) public onlyOwner {
        require(!existD[_owner], "Account Already Exixt");
        Doctor newDoctor = new Doctor(_name, _kyc, _mno, _owner, _id);
        doctorsAddress.push(_owner);
        doctors[_owner] = address(newDoctor);
        existD[_owner] = true;
        existDA[address(newDoctor)] = true;
    }

    function addPatient(
        string memory _name,
        string memory _age,
        string memory _kyc,
        string memory _bg,
        string memory _mno,
        address _owner
    ) public onlyOwner {
        require(!existP[_owner], "Account Already Exixt");
        Patient newPatient = new Patient(
            _name,
            _age,
            _kyc,
            _bg,
            _mno,
            _owner,
            address(this)
        );
        patients[_owner] = address(newPatient);
        existP[_owner] = true;
    }
}
