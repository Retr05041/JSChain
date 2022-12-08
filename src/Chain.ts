// Imports
import { Console } from 'console';
import Block from './Block';

/**
 * The Block Chain
 */
class Chain {
    // Chain properties
    private chain: Block[];
    private genisisBlock: Block;
    private difficulty: number;
    private debug: boolean;

    /**
     * Constructor for Chain
     */
    constructor(baseDifficulty: number, debug: boolean) {
        this.genisisBlock = Block.createGenesisBlock();
        this.chain = [this.genisisBlock];
        this.difficulty = baseDifficulty;
        this.debug = debug;

        this.genisisBlock.mineBlock(this.difficulty);
        this.difficulty++;
        if (debug) {
            console.log("--------------------");
            console.log("Chain built with genisis block");
            console.log("Difficulty for next block: " + this.difficulty);
            console.log("--------------------");
        }
        this.displayBlock(this.chain.length - 1);
    }

    // Mine
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

    // Display Block
    public displayBlock(index: number) {
        // Check if the index is valid
        if (index > this.chain.length) {
            console.log("Invalid index");
        }

        // Return the block
        console.log(this.chain[index].displayInfo());
    }

    // Number of blocks
    public getNumberOfBlocks() {
        return this.chain.length;
    }

}

// Exports
export default Chain;