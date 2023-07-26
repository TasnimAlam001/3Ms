import CommentBox from "./CommentBox";


const UserInfo = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-5/6 mx-auto pb-4">
            <div className="md:col-span-2 bg-amber-200 rounded-lg">
                <div className="md:flex gap-8 p-8 md:p-20">
                    <div className="card md:w-96 bg-white text-black mb-10 md:mb-0">
                        <div className="card-body shadow-2xl">
                            <h2 className="card-title text-center">My Meals !</h2>
                            <div className="divider"></div> 
                            <div className="md:flex gap-3 mb-5">
                                <p>Total Meals : <span className="font-bold">25</span></p>
                                <button className="badge badge-outline">Details</button>
                            </div>
                            <div className="md:flex">
                                <p>Today`s Meal: </p> 
                                <div >
                                    
                                    <table className="border border-black">
                                        <thead className="rounded">
                                            <tr className="">
                                                <th className="border border-black px-2 py-1 ">Lunch</th>
                                                <th className="border border-black px-2 py-1">Dinner</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="text-center">
                                                <td className="border border-black">0</td>
                                                <td>1</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    
                                    
                                    </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="card md:w-96 bg-white text-black">
                        <div className="card-body shadow-2xl">
                            <h2 className="card-title">My Deposits !</h2>
                            <div className="divider"></div>
                            <div className="mb-1">
                                <p>Initial Deposit : <span className="font-bold">1000</span> Tk</p>
                                
                            </div>
                            <div className="">
                                <p>1st Bazar: <span className="font-bold">00</span> Tk</p>
                                
                            </div>
                            <div className="mb-4">
                                <p>2nd Bazar: <span className="font-bold">00</span>Tk</p>
                                
                            </div>
                            
                            <div className="card-actions justify-end">
                                <button className="btn">Total : <span className="font-bold text-red-600">1000</span>Tk</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-amber-200 rounded-lg pb-6">
                <CommentBox></CommentBox>

            </div>


        </div>
    );
};

export default UserInfo;