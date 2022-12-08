// Imports
import sha256 from 'crypto-js/sha256';

/**
 * This class represents a block
 * 
 * @author Parker Cranfield
 */
class Block {
    // Properties of the block
    private data: string;
    private previousHash: string;
    private nonce: number;
    private hash: string;
    private isMined: boolean;
    private timestamp: Date;

    /**
     * Construcor for Block
     * 
     * @param data Data to be stored in the block
     * @param previousHash Hash of the previous block
     * @param timestamp Timestamp of the block
     */
    constructor(data: string, previousHash: string) {
        this.data = data;
        this.previousHash = previousHash;
        this.timestamp = new Date();
        this.nonce = 0;
        this.hash = this.calculateHash();
        this.isMined = false;
    }

    /**
     * Gives the data of the block
     * 
     * @returns Data of the block
     */
    public getData() {
        return this.data;
    }

    /**
     * Gives the hash of the block
     * 
     * @returns Hash of the block
     */
    public getHash() {
        return this.hash;
    }

    /**
     * Calculate the hash of the block
     * 
     * @returns Hash of the block
     */
    private calculateHash() {
        return sha256(this.previousHash + this.data + this.timestamp + this.nonce).toString();
    }

    /**
     * Mine the block
     * 
     * @param difficulty Difficulty of the block
     */
    public mineBlock(difficulty: number) {
        // Create a string of zeros
        const zeros = Array(difficulty + 1).join("0");

        // Mine the block
        while (this.hash.substring(0, difficulty) !== zeros) {
            this.nonce++;
            this.hash = this.calculateHash();
        }
        this.isMined = true;
    }

    /**
     * Creates a new genesis block
     * 
     * @returns Genisis block
     */
    public static createGenesisBlock() {
        return new Block("Genesis Block", "0");
    }

    /**
     * Display the block info
     * 
     * @returns Block info
     */
    public displayInfo() {
        return "---------------------\n" + this.data + "\n" + "Hash: " + this.hash + "\n" + "Previous hash: " + this.previousHash + "\n" + "Timestamp: " + this.timestamp + "\n" + "---------------------";
    }

    /**
     * Check if the block is mined
     * 
     * @returns If the block is mined
     */
    public isBlockMined() {
        return this.isMined;
    }
}

// Exports
export default Block;