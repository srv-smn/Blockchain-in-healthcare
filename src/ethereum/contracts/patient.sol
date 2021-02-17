pragma solidity ^0.7.0;
pragma experimental ABIEncoderV2;

contract Patient {
    // Patient basic details
     string public name;
     string  kyc;
     string  bg;
     string mno;
     address owner;
     
     // mapping for viewers 
     mapping(address => bool) public viewers; 
     
     // mapping for editors
     mapping(address => bool) public editors;
     
     // report details
     struct record{
       uint date;
       address doctor ;
       string detail ;
       string hash ;
     }
      
     
     // array to store record
     record[] details;
     
     constructor(string memory _name, string memory _kyc, string memory _bg, string memory _mno, address _owner)  {
         // initializaing value 
         name = _name;
         kyc = _kyc;
         bg=_bg;
         mno = _mno;
         owner = _owner;
         viewers[owner] = true;
     }
     
     
     // only owner modifier
     modifier onlyOwner() { // modifier for only owner
          require(msg.sender==owner,"You are not the Owner " );
          _;
      }
      
      // only viewers modifiers 
      modifier onlyViewer() { // modifier for only owner
          require(viewers[msg.sender],"You don't have viewing rights" );
          _;
      }
      
        // only editors modifiers 
      modifier onlyEditor() { // modifier for only owner
          require(editors[msg.sender],"You dont have editing rights" );
          _;
      }
      
      // setter for mobile number , as all the other details will never change ,so ony thing owner can change is mno
     
      function setMno(string memory _mno) public onlyOwner { // checking if the stake holder is eligible of not
        mno = _mno;
       } 
       
       
       // getter for basic details 
       
       function getPatientDetails() public onlyViewer view returns 
       (string memory, string memory,string memory,string memory, address) {
    return (
      name,
      kyc,
      bg,
      mno,
      owner
      );
    }

    //set permissions for viewers 
    function addViewer(address _addr) public onlyOwner {
    viewers[_addr] = true;
    }
    
    //set permissions for editors 
    function addEditor(address _addr) public onlyOwner {
    editors[_addr] = true;
    viewers[_addr] = true;
    }
    
    //revoke viewing rights 
    function removeViewer(address _addr) public onlyOwner {
    viewers[_addr] = false;
    }
    
     //remove permissions for editors 
    function removeEditor(address _addr) public onlyOwner {
    editors[_addr] = false;
    viewers[_addr] = false;
    }
    
    // function for addinng details and report 
    
    function addReport(string memory _detail , string memory _hash) public onlyEditor {
        
        record memory newRecord = record({
            date:block.timestamp,
            doctor:msg.sender,
            detail:_detail,
            hash:_hash
        });
        editors[msg.sender] = false;
        viewers[msg.sender] = false;
        details.push(newRecord);
    }
    
    // function array length 
    
    function getLength()public onlyViewer view returns(uint){
        return (details.length);
    }
    
    
    // function for retriving report
    
    function getReport(uint _index) public onlyViewer view returns (record memory) {
    return (details[_index]);
    }
    
}

