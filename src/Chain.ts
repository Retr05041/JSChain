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
    private static instance: Chain;

    /**
     * Constructor for Chain
     * 
     * @param baseDifficulty Difficulty of the first block
     * @param debug Debug mode
     */
    private constructor(baseDifficulty: number) {
        this.genisisBlock = Block.createGenesisBlock();
        this.chain = [this.genisisBlock];
        this.difficulty = baseDifficulty;

        this.genisisBlock.mineBlock(this.difficulty);
        this.difficulty++;
        this.displayBlock(this.chain.length - 1);
    }

    public static getInstance() {
        return this.instance || (this.instance = new this(1));
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

    /**
     * Get a block in the chain based off of the index
     * 
     * @param index Index of the block to be returned
     * @returns Block at the given index
     */
    public getBlockByIndex(index: number) {
        return this.chain[index];
    }

    /**
     * Get the difficulty of the chain
     * 
     * @returns Difficulty of the chain
     */
    public getDifficulty() {
        return this.difficulty;
    }

    /**
     * Push a block to the chain
     * 
     * @param block Block to be pushed
     */
    public addBlock(block: Block) {
        this.chain.push(block);
    }

    /**
     * Increment the difficulty of the chain
     * 
     * @param amount Amount to increment the difficulty by
     */
    public incrementDifficulty() {
        this.difficulty++;
    }

}

// Exports
export default Chain;