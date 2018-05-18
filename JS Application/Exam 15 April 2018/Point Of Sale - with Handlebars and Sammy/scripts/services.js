let services = (() => {

    function getActiveReceipt(userId) {
        let data = `receipts?query={"_acl.creator":"${userId}","active":"true"}`;
        return remote.get('appdata', data, 'kinvey');
    }

    async function addEntry(type, qty, price, receiptId) {
        let data = {
            "type": type,
            "quantity": qty,
            "price": price,
            "receiptId": receiptId
        };

        return await remote.post('appdata', 'entries', 'kinvey', data);
    }

    async function createReceipt() {
        let data = {
            "active": "true",
            "productCount": 0,
            "total": 0
        };
        return (await remote.post('appdata', 'receipts', 'kinvey', data));
    }

    function getEntriesByReceiptId(receiptId) {
        let data = `entries?query={"receiptId":"${receiptId}"}`;

        return remote.get('appdata', data, 'kinvey');
    }

    function deleteEntry(id) {
        let data = `entries/${id}`;
        return remote.remove('appdata', data, 'kinvey');
    }

    function commitReceipt(receiptId, productCount, total) {
        let data = {
            "active": "false",
            "productCount": productCount,
            "total": total
        };

        return remote.update('appdata', `receipts/${receiptId}`,'kinvey', data);
    }
    
    function myReceipts(userId) {
        const data = `receipts?query={"_acl.creator":"${userId}","active":"false"}`;

        return remote.get('appdata', data, 'kinvey');
    }

    function receiptDetails(receiptId) {
        let data = `receipts/${receiptId}`;

        return remote.get('appdata', data, 'kinvey');
    }

    return {
        getActiveReceipt,
        addEntry,
        createReceipt,
        getEntriesByReceiptId,
        deleteEntry,
        commitReceipt,
        myReceipts,
        receiptDetails
    }
})();