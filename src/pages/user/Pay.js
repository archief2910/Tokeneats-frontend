import React from 'react'

const Pay = () => {
  console.log("hii");
    axios.get(`${process.env.REACT_APP_API}/orders`)
    .then(response => {
        console.log("hello");
        if (response.data) {
            console.log(response.data);
        } else {
            alert("Orders Fetching Failed!")
        }   
    })
    .catch(err=>{
        console.log(err);
    })
    

    return (
        <Layout title={"My Orders"}>
            <div className='container-fluid p-3 m-3'>
                <div className='row'>
                    <div className='col-md-9'>
                        <h1>My Balance</h1><br/>
                        <h3> {auth?.user?.name}'s remaining balance is {balance}</h3>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Pay