const provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545");

const contractAddress = "0xaBB6163f2987DC82ddeF425f02fd5AB87DC78D93";

let contract;

async function connectWallet() {
    try {
        const signer = await provider.getSigner(0);

        const response = await fetch("../build/contracts/OnChainStudyNotes.json");
        const artifact = await response.json();

        contract = new ethers.Contract(
            contractAddress,
            artifact.abi,
            signer
        );

        document.getElementById("status").innerText =
            "Connected to Ganache!";
    } catch (error) {
        alert(error.message);
    }
}

async function saveNote() {
    try {
        if (!contract) {
            alert("Connect to Ganache first!");
            return;
        }

        const note = document.getElementById("noteInput").value;

        const tx = await contract.setMessage(note);
        await tx.wait();

        document.getElementById("status").innerText =
            "Note saved successfully!";
    } catch (error) {
        alert(error.message);
    }
}

async function viewNote() {
    try {
        if (!contract) {
            alert("Connect to Ganache first!");
            return;
        }

        const note = await contract.getMyMessage();

        document.getElementById("displayNote").innerText =
            "Your saved note: " + note;
    } catch (error) {
        alert(error.message);
    }
}

async function clearNote() {
    try {
        if (!contract) {
            alert("Connect to Ganache first!");
            return;
        }

        const tx = await contract.clearMyMessage();
        await tx.wait();

        document.getElementById("status").innerText =
            "Note cleared successfully!";

        document.getElementById("displayNote").innerText = "";
    } catch (error) {
        alert(error.message);
    }
}

document.getElementById("connectBtn").onclick = connectWallet;
document.getElementById("saveBtn").onclick = saveNote;
document.getElementById("viewBtn").onclick = viewNote;
document.getElementById("clearBtn").onclick = clearNote;