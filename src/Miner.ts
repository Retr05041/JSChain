// Imports
import Chain from './Chain';
import Block from './Block';

/**
 * This class represents a miner
 * 
 * @author Parker Cranfield
 */
class Miner {

    // Properties of the miner
    private chain: Chain;

    /**
     * Constructor for Miner
     */
    constructor() {
        this.chain = Chain.getInstance();
    }

    /**
     * Mine a block with the given data
     * 
     * @param data Data to be stored in the block
     */
    public mine(data: string) {
        // Create new block
        const newBlock = new Block(data, this.chain.getBlockByIndex(this.chain.getNumberOfBlocks() - 1).getHash());

        // Mine the block
        newBlock.mineBlock(this.chain.getDifficulty());

        // Add the block to the chain
        this.chain.addBlock(newBlock);
        this.chain.incrementDifficulty();
        this.chain.displayBlock(this.chain.getNumberOfBlocks() - 1);
    }

    public start() {
        // Mine a block
        while (true) {
            this.mine("Block: " + this.chain.getNumberOfBlocks());
        }
    }

}

// Exports
export default Miner;