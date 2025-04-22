import updinstance from "./updinstance";

const payment = {
   
    createpaymentdet: async (data) => {
    return await updinstance.post("/createpaymentdet", data);
        
    },
    getPaymentdet: async (data) => {
        return await updinstance.post("/getPaymentdet", data);
            
        },
}

export default payment;