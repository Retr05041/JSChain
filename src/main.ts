// Imports
import Chain from './Chain';
import Miner from './Miner';

// Create the chain
const chain = Chain.getInstance();

// Create the miner
const miner = new Miner();
miner.start();


