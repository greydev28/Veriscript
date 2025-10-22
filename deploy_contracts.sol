// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract PharmacyPayments {

    address public admin;

    struct Pharmacy {
        string name;
        address wallet;
        bool isRegistered;
    }

    struct Payment {
        address patient;
        address pharmacy;
        uint256 amount;
        string prescriptionId;
        uint256 timestamp;
    }

    mapping(address => Pharmacy) public pharmacies;
    Payment[] public payments;

    event PharmacyRegistered(address indexed wallet, string name);
    event PaymentMade(address indexed patient, address indexed pharmacy, uint256 amount, string prescriptionId);

    constructor() {
        admin = msg.sender; // deployer is admin
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Not authorized");
        _;
    }

    // Register a pharmacy
    function registerPharmacy(string calldata _name, address _wallet) external onlyAdmin {
        require(!pharmacies[_wallet].isRegistered, "Pharmacy already registered");
        pharmacies[_wallet] = Pharmacy(_name, _wallet, true);
        emit PharmacyRegistered(_wallet, _name);
    }

    // Make HBAR payment
    function makePayment(address _pharmacy, string calldata _prescriptionId) external payable {
        require(pharmacies[_pharmacy].isRegistered, "Pharmacy not registered");
        require(msg.value > 0, "Payment must be greater than 0");

        payments.push(Payment(msg.sender, _pharmacy, msg.value, _prescriptionId, block.timestamp));

        // Transfer HBAR to pharmacy
        payable(_pharmacy).transfer(msg.value);

        emit PaymentMade(msg.sender, _pharmacy, msg.value, _prescriptionId);
    }

    // Get number of payments
    function getPaymentsCount() external view returns (uint256) {
        return payments.length;
    }

    // Get a specific payment
    function getPayment(uint256 index) external view returns (Payment memory) {
        require(index < payments.length, "Invalid index");
        return payments[index];
    }
}
