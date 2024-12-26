import React from "react";

export default function PaginationComponent({totalPage,page, setPage}) {

    const handleNext =()=> {
        if (page<totalPage){
            setPage(pre => pre+1)
        }
    }
    const handlePre =()=>{
        if (page>1){
            setPage(pre => pre-1)
        }

    }
    return (
        <div>
            <button className="btn btn-sm btn-secondary" onClick={handlePre}>Pre</button>
            {[...new Array(totalPage)].map((e,i)=>
                (<button className={`btn btn-sm page-item ${page === i + 1 ? 'active' : ''}`} onClick={()=>{setPage(i+1)}} key={i}>{i+1}</button>)
            )}
            <button className="btn btn-sm btn-secondary" onClick={handleNext}>Pre</button>
        </div>

    );
}