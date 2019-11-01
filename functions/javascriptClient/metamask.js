var web3Provider = null;
if (typeof web3 !== undefined) {
    web3Provider = window.web3.currentProvider;
} else {
    web3Provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545")
}
web3 = new Web3(web3Provider);
console.log(web3Provider);
$('#meta-mask-btn').click(async function () {
    await web3Provider.enable();
    await web3.eth.getAccounts(function (error, accounts) {
        console.log(accounts[0]);
        web3.eth.getBalance(accounts[0], function (err, balance) {
            console.log(web3.utils.fromWei(balance, "ether") + " ETH");
            $('#balance').text(`${web3.utils.fromWei(balance, "ether")} ETH`)
            $('#meta-mask-balance').show()
        });
        $("#meta-mask-btn").hide()
    })
    
})