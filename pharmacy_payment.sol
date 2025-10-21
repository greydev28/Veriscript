// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title HBAR Payment Contract Between Patients and Pharmacists
/// @notice Allows patients to send HBAR payments to registered pharmacists, with full on-chain tracking.

contract HBARPatientPharmacist {
    address public owner;

    struct Pharmacist {
        string name;
        address wallet;
        bool isRegistered;
    }

    struct HbarPayment {
        address patient;
        address pharmacist;
        uint256 amount; // amount in tinybars (1 HBAR = 10^8 tinybars)
        string prescriptionId;
        uint256 timestamp;
    }

    mapping(address => Pharmacist) public pharmacists;
    HbarPayment[] public payments;

    event PharmacistRegistered(address indexed pharmacist, string name);
    event PaymentMade(address indexed patient, address indexed pharmacist, uint256 amount, string prescriptionId);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    /// @notice Register a pharmacist who can receive HBAR payments
    /// @param _name Name of the pharmacist
    /// @param _wallet Pharmacist’s wallet address
    function registerPharmacist(string calldata _name, address _wallet) external onlyOwner {
        require(!pharmacists[_wallet].isRegistered, "Pharmacist already registered");
        pharmacists[_wallet] = Pharmacist(_name, _wallet, true);
        emit PharmacistRegistered(_wallet, _name);
    }

    /// @notice Patients send HBAR to a registered pharmacist
    /// @param _pharmacist The pharmacist's wallet address
    /// @param _prescriptionId A string note or prescription reference
    function makePayment(address _pharmacist, string calldata _prescriptionId) external payable {
        require(pharmacists[_pharmacist].isRegistered, "Pharmacist not registered");
        require(msg.value > 0, "Payment must be greater than zero");

        // Record the transaction on-chain
        payments.push(HbarPayment(msg.sender, _pharmacist, msg.value, _prescriptionId, block.timestamp));

        // Transfer HBAR to the pharmacist’s address
        payable(_pharmacist).transfer(msg.value);

        emit PaymentMade(msg.sender, _pharmacist, msg.value, _prescriptionId);
    }

    /// @notice Returns the total number of payments recorded
    function getPaymentsCount() external view returns (uint256) {
        return payments.length;
    }

    /// @notice Get details of a specific payment by index
    function getPayment(uint256 index) external view returns (HbarPayment memory) {
        require(index < payments.length, "Invalid index");
        return payments[index];
    }

    /// @notice Accepts direct HBAR deposits to the contract (optional)
    receive() external payable {}
}
