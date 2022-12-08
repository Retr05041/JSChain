// Imports
import Chain from './Chain';


// Create the chain
const debug = true;
const chain = new Chain(1, debug);

// Mine some blocks
chain.mine("Block " + chain.getNumberOfBlocks());
chain.mine("Block " + chain.getNumberOfBlocks());
chain.mine("Block " + chain.getNumberOfBlocks());

