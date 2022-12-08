// Imports
import { Console } from 'console';
import Block from './Block';

/**
 * This class represents the chain
 * 
 * @author Parker Cranfield
 */
class Chain {
    // Properties of the chain
    private chain: Block[];
    private genisisBlock: Block;
    private difficulty: number;
    private debug: boolean;

    /**
     * Constructor for Chain
     * 
     * @param baseDifficulty Difficulty of the first block
     * @param debug Debug mode
     */
    constructor(baseDifficulty: number, debug: boolean) {
        this.genisisBlock = Block.createGenesisBlock();
        this.chain = [this.genisisBlock];
        this.difficulty = baseDifficulty;
        this.debug = debug;

        this.genisisBlock.mineBlock(this.difficulty);
        this.difficulty++;
        this.displayBlock(this.chain.length - 1);
    }

    /**
     * Mine a block with the given data
     * 
     * @param data Data to be stored in the block
     */
    public mine(data: string) {
        // Create new block
        const newBlock = new Block(data, this.chain[this.chain.length - 1].getHash());

        // Mine the block
        newBlock.mineBlock(this.difficulty);

        // Add the block to the chain
        this.chain.push(newBlock);
        this.difficulty++;
        this.displayBlock(this.chain.length - 1);
    }

    /**
     * Display a block in the chain based off of the index
     * 
     * @param index Index of the block to be displayed
     */
    public displayBlock(index: number) {
        // Check if the index is valid
        if (index > this.chain.length) {
            console.log("Invalid index");
        }

        // Return the block
        console.log(this.chain[index].displayInfo());
    }

    /**
     * Get the number of blocks in the chain
     * 
     * @returns Number of blocks in the chain
     */
    public getNumberOfBlocks() {
        return this.chain.length;
    }

}

// Exports
export default Chain;