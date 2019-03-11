pragma solidity >=0.4.22 <0.6.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";

contract Gauchocoin is ERC20Mintable, ERC20Detailed {
    //string public constant name = "GauchoCoin";
    //string public constant symbol = "Gaucho";
    //uint8 public constant decimals = 18;

    constructor(string memory name, string memory symbol, uint8 decimals) 
    ERC20Detailed(name, symbol, decimals) public {}
}
