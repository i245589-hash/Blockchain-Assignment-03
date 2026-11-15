// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/**
 * @title OnChainStudyNotes
 * @notice A tiny Sepolia dApp where every wallet can save its own short note.
 * @dev Notes are PUBLIC blockchain data. Never store secrets or personal data.
 */
contract OnChainStudyNotes {
    mapping(address => string) private notes;
    mapping(address => uint256) private updateCounts;

    event NoteSaved(address indexed student, string note, uint256 totalUpdates);
    event NoteCleared(address indexed student);

    // WRITE #1: Save or replace the caller's own note (max 140 UTF-8 bytes).
    function setMessage(string calldata newMessage) external {
        uint256 size = bytes(newMessage).length;
        require(size > 0, "Note must not be empty");
        require(size <= 140, "Note must be at most 140 bytes");

        notes[msg.sender] = newMessage;
        updateCounts[msg.sender] += 1;

        emit NoteSaved(msg.sender, newMessage, updateCounts[msg.sender]);
    }

    // READ #1: Return the note belonging to the connected wallet.
    function getMyMessage() external view returns (string memory) {
        return notes[msg.sender];
    }

    // READ #2: Return how many times this wallet has saved a note.
    function getMyUpdateCount() external view returns (uint256) {
        return updateCounts[msg.sender];
    }

    // WRITE #2: Delete the caller's note, without resetting the update counter.
    function clearMyMessage() external {
        require(bytes(notes[msg.sender]).length > 0, "There is no note to clear");
        delete notes[msg.sender];
        emit NoteCleared(msg.sender);
    }
}