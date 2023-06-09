document.getElementById('mint').addEventListener('click', async () => {
    const data = document.getElementById('data').value;
    const password = document.getElementById('password').value;
  
    const encryptedData = CryptoJS.AES.encrypt(data, password).toString();
  
    // replace this with your contract's ABI and address
    const abi = [];
    const contractAddress = "";
  
    if (typeof ethereum !== 'undefined') {
      await ethereum.request({ method: 'eth_requestAccounts' });
  
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
  
      try {
        // replace "mint" with the correct function from your contract
        const tx = await contract.mint(signer.getAddress(), encryptedData);
        console.log(tx);
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log('Ethereum provider not found');
    }
  });
